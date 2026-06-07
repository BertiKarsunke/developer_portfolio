import { BriefcaseBusiness, Code2 } from "lucide-react"
import { portfolioData } from "../data/portfolio"

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Map", href: "#impact-map" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="홈으로 이동">
        LSJ
      </a>
      <nav className="nav-links" aria-label="주요 섹션">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="icon-link" href={portfolioData.profile.github.href} aria-label="GitHub 열기">
        <Code2 aria-hidden="true" strokeWidth={3} />
      </a>
      <a
        className="icon-link"
        href={portfolioData.profile.linkedin.href}
        aria-label="LinkedIn 열기"
      >
        <BriefcaseBusiness aria-hidden="true" strokeWidth={3} />
      </a>
    </header>
  )
}
