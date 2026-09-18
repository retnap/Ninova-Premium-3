import type { ReactNode } from 'react'

export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[10px] tracking-[0.28em] text-[#9B9B9B] uppercase font-body ${className}`}>{children}</p>
}
