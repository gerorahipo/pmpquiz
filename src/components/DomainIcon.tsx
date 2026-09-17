import type { StudyDomain } from '../data/studyDomains'

const PATHS: Record<StudyDomain['icon'], string> = {
  book: 'M5 4.5A1.5 1.5 0 0 1 6.5 3H18a1 1 0 0 1 1 1v15.5a.5.5 0 0 1-.5.5H6.5A1.5 1.5 0 0 0 5 21.5V4.5zM5 18.5A1.5 1.5 0 0 1 6.5 17H19 M8.5 7.5h7 M8.5 10.5h7',
  people: 'M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 19c.6-3 2.7-4.7 5.5-4.7S13.4 16 14 19M14.5 19c.5-2.4 2.1-3.8 4.5-3.8 1 0 1.9.2 2.7.7',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm2.5-13.5-2 5-5 2 2-5 5-2z',
  building: 'M4 21V7l8-4 8 4v14 M9 21v-6h6v6 M9 11h.01 M13.5 11h.01 M9 15h.01 M13.5 15h.01',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  calendar: 'M4 5.5h16v15H4v-15zM4 9.5h16 M8 3v4.5 M16 3v4.5 M8.5 13h.01 M12 13h.01 M15.5 13h.01 M8.5 16.5h.01 M12 16.5h.01 M15.5 16.5h.01',
  handshake:
    'M2.5 12.5 6 9l3.5 3-1.6 1.6a1.4 1.4 0 0 0 2 2L14.5 11l2.7 2.7a1.5 1.5 0 0 0 2.1-2.1L15 7.3a2 2 0 0 0-1.4-.6H10L6.5 4 2.5 8',
  shield: 'M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5zM9.5 12l1.8 1.8 3.2-3.6',
  refresh: 'M4 12a8 8 0 0 1 14-5.2M20 5v4h-4 M20 12a8 8 0 0 1-14 5.2M4 19v-4h4',
}

export default function DomainIcon({ icon, className }: { icon: StudyDomain['icon']; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d={PATHS[icon]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
