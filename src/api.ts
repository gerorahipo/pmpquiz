import type { Attempt, Concept, MissedEntry, Question, QuizMode, TaskStat } from './types'
import type { GlossaryEntry } from './data/glossary'
import type { EcoTask } from './data/ecoTasks'

/** Base URL of the PHP API. Override with VITE_API_URL at build/dev time. */
const BASE = (import.meta.env.VITE_API_URL ?? 'https://pmpquiz-api.ddev.site').replace(/\/$/, '')

const TOKEN_KEY = 'pmpquiz-token'
let token: string | null = localStorage.getItem(TOKEN_KEY)

export function getToken(): string | null {
  return token
}

export function setToken(next: string | null): void {
  token = next
  if (next) localStorage.setItem(TOKEN_KEY, next)
  else localStorage.removeItem(TOKEN_KEY)
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: unknown
  query?: Record<string, string>
}

async function request<T>(path: string, opts: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, query } = opts
  const url = new URL(BASE + path)
  if (query) {
    for (const [k, v] of Object.entries(query)) url.searchParams.set(k, v)
  }

  const headers: Record<string, string> = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (token) headers['Authorization'] = `Bearer ${token}`

  let res: globalThis.Response
  try {
    res = await fetch(url.toString(), {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new ApiError('network-error', 0)
  }

  if (res.status === 204) return undefined as T
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const message = (data && typeof data === 'object' && 'error' in data && String(data.error)) || 'request-failed'
    throw new ApiError(message, res.status)
  }
  return data as T
}

export interface User {
  id: number
  email: string
}

interface AuthResponse {
  token: string
  user: User
}

export interface ReviewItem {
  entry: MissedEntry
  question: Question
}

export const api = {
  // ── auth ──
  register: (email: string, password: string) =>
    request<AuthResponse>('/api/auth/register', { method: 'POST', body: { email, password } }),
  login: (email: string, password: string) =>
    request<AuthResponse>('/api/auth/login', { method: 'POST', body: { email, password } }),
  me: () => request<{ user: User }>('/api/auth/me'),

  // ── content (public) ──
  getQuestions: (query: Record<string, string>) => request<Question[]>('/api/questions', { query }),
  getConcepts: () => request<Concept[]>('/api/concepts'),
  getGlossary: () => request<GlossaryEntry[]>('/api/glossary'),
  getEcoTasks: () => request<EcoTask[]>('/api/eco-tasks'),

  // ── user data (auth required) ──
  listAttempts: () => request<Attempt[]>('/api/attempts'),
  createAttempt: (attempt: Omit<Attempt, 'id'>) =>
    request<{ id: number }>('/api/attempts', { method: 'POST', body: attempt }),
  clearAttempts: () => request<{ cleared: number }>('/api/attempts', { method: 'DELETE' }),
  recordAnswer: (questionId: string, correct: boolean) =>
    request<{ ok: boolean }>('/api/answers', { method: 'POST', body: { questionId, correct } }),
  dueReview: () => request<ReviewItem[]>('/api/review/due'),
  allReview: () => request<ReviewItem[]>('/api/review/all'),
  taskStats: () => request<TaskStat[]>('/api/task-stats'),

  /**
   * Draw the question set for a quiz mode (missed mode pulls the SR due
   * queue). `taskId` targets one ECO task (weak-area practice); `taskIds`
   * targets several at once (concept-sheet drill).
   */
  async questionsForMode(mode: QuizMode, taskId?: string, taskIds?: string[]): Promise<Question[]> {
    if (mode === 'missed') {
      const due = await api.dueReview()
      return due.map((d) => d.question)
    }
    if (taskIds && taskIds.length > 0) return api.getQuestions({ tasks: taskIds.join(','), limit: '15' })
    if (taskId) return api.getQuestions({ task: taskId, limit: '15' })
    return api.getQuestions({ mode })
  },
}
