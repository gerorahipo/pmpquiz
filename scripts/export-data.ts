/**
 * Export the bundled TypeScript content (questions, concepts, glossary, ECO
 * tasks) to JSON files consumed by the PHP/MySQL seeder. Run via:
 *   node_modules/.bin/esbuild scripts/export-data.ts --bundle --format=esm \
 *     --platform=node --outfile=<tmp>.mjs && node <tmp>.mjs
 * (see scripts/gen-seed.mjs for the wrapper).
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { QUESTIONS } from '../src/data/questions'
import { CONCEPTS } from '../src/data/concepts'
import { GLOSSARY } from '../src/data/glossary'
import { ECO_TASKS } from '../src/data/ecoTasks'

// resolve against the current working directory (run from the project root)
const outDir = resolve(process.cwd(), 'backend/db/seed')
mkdirSync(outDir, { recursive: true })

function write(name: string, data: unknown) {
  const file = resolve(outDir, name)
  writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8')
  console.log(`wrote ${name} (${Array.isArray(data) ? data.length : '?'} items)`)
}

write('eco_tasks.json', ECO_TASKS)
write('questions.json', QUESTIONS)
write('concepts.json', CONCEPTS)
write('glossary.json', GLOSSARY)

console.log('seed export complete →', outDir)
