import { portfolioData } from "../data/portfolio"
import { NeoCard, SectionHeader } from "./Neo"

export function Experience() {
  return (
    <section className="page-section page-section--yellow" id="experience">
      <SectionHeader
        eyebrow="CAREER LOG"
        title="제품 운영 경력"
        summary="서비스 출시, 운영, 자동화, 개선을 맡아 온 주요 경력입니다."
      />
      <div className="experience-list">
        {portfolioData.experience.map((item) => (
          <NeoCard className="experience-card" key={`${item.company}-${item.period}`}>
            <time>{item.period}</time>
            <div>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <div className="chip-row">
                {item.highlights.map((highlight) => (
                  <span className="neo-chip" key={highlight}>
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </NeoCard>
        ))}
      </div>
    </section>
  )
}
