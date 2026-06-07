import { portfolioData } from "../data/portfolio"
import { NeoCard, SectionHeader } from "./Neo"

export function Experience() {
  return (
    <section className="page-section page-section--yellow" id="experience">
      <SectionHeader
        eyebrow="CAREER LOG"
        title="제품 운영 경력 타임라인"
        summary="이력서 원본의 민감 정보는 제외하고 공개 가능한 경력과 산출물 중심으로 정리했습니다."
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
