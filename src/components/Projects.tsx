import { ExternalLink } from "lucide-react"
import { portfolioData } from "../data/portfolio"
import { NeoCard, SectionHeader } from "./Neo"

export function Projects() {
  const featuredProjects = portfolioData.projects.filter((project) => project.featured)

  return (
    <section className="page-section" id="projects">
      <SectionHeader
        eyebrow="SELECTED WORK"
        title="제품 전반을 다룬 프로젝트"
        summary="모바일 앱, 백엔드, 데이터, 인프라, 자동화를 실제 서비스 안에서 직접 설계하고 구현했습니다."
      />
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <NeoCard className="project-card" key={project.id}>
            <div className="project-card__top">
              <span>{project.company}</span>
              <strong>{project.years}</strong>
            </div>
            <h3>{project.title}</h3>
            <p className="project-role">{project.role}</p>
            <p>{project.problem}</p>
            <p>{project.solution}</p>
            <strong className="project-outcome">{project.outcome}</strong>
            <div className="chip-row">
              {project.stack.slice(0, 6).map((stack) => (
                <span className="neo-chip" key={`${project.id}-${stack}`}>
                  {stack}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                  <ExternalLink aria-hidden="true" strokeWidth={3} />
                </a>
              ))}
            </div>
          </NeoCard>
        ))}
      </div>
    </section>
  )
}
