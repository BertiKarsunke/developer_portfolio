import type { ReactNode } from "react"

type NeoButtonProps = {
  readonly href: string
  readonly children: ReactNode
  readonly variant?: "primary" | "secondary" | "outline"
}

export function NeoButton({ href, children, variant = "primary" }: NeoButtonProps) {
  return (
    <a className={`neo-button neo-button--${variant}`} href={href}>
      {children}
    </a>
  )
}

type SectionHeaderProps = {
  readonly eyebrow: string
  readonly title: string
  readonly summary: string
}

export function SectionHeader({ eyebrow, title, summary }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="sticker-label">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  )
}

type NeoCardProps = {
  readonly children: ReactNode
  readonly className?: string
}

export function NeoCard({ children, className = "" }: NeoCardProps) {
  return <article className={`neo-card ${className}`}>{children}</article>
}
