import { ExternalLink } from "lucide-react"
import { portfolioData } from "../data/portfolio"
import { NeoCard, SectionHeader } from "./Neo"

const maxActivityCount = Math.max(...portfolioData.openSource.activityDays.map((day) => day.count))

function activityColor(count: number): string {
  const ratio = Math.max(0.18, count / maxActivityCount)
  const red = 255
  const green = Math.round(253 - 146 * ratio)
  const blue = Math.round(245 - 138 * ratio)
  return `rgb(${red}, ${green}, ${blue})`
}

export function OpenSource() {
  const { openSource } = portfolioData

  return (
    <section className="page-section page-section--violet" id="open-source">
      <SectionHeader
        eyebrow="OPEN SOURCE TRACE"
        title="공개 저장소에 남긴 작은 도구와 실험들"
        summary={openSource.summary}
      />
      <div className="open-source-layout">
        <fieldset className="open-source-metrics">
          <legend className="sr-only">GitHub 공개 활동 지표</legend>
          {openSource.metrics.map((metric) => (
            <div className="open-source-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </div>
          ))}
        </fieldset>
        <fieldset className="activity-strip">
          <legend className="sr-only">최근 공개 GitHub contribution 활동일</legend>
          {openSource.activityDays.map((day) => (
            <span
              className="activity-strip__day"
              key={day.date}
              style={{ backgroundColor: activityColor(day.count) }}
              title={`${day.date}: ${day.count} contributions`}
            >
              <span>{day.date.slice(5)}</span>
              <strong>{day.count}</strong>
            </span>
          ))}
        </fieldset>
      </div>
      <div className="open-source-grid">
        {openSource.repos.map((repo) => (
          <NeoCard className="open-source-card" key={repo.name}>
            <div className="project-card__top">
              <span>{repo.role}</span>
              <strong>{repo.updated}</strong>
            </div>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <strong className="project-outcome">{repo.language}</strong>
            <div className="chip-row">
              {repo.tags.map((tag) => (
                <span className="neo-chip" key={`${repo.name}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={repo.href}>
                GitHub
                <ExternalLink aria-hidden="true" strokeWidth={3} />
              </a>
            </div>
          </NeoCard>
        ))}
      </div>
      <div className="open-source-notes">
        <span className="sticker-label">{openSource.source}</span>
        <span className="sticker-label">Checked {openSource.checkedAt}</span>
        {openSource.ecosystemNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </section>
  )
}
