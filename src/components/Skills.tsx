import { portfolioData } from "../data/portfolio"
import { NeoCard, SectionHeader } from "./Neo"

export function Skills() {
  return (
    <section className="page-section" id="skills">
      <SectionHeader
        eyebrow="STACK RANGE"
        title="모바일부터 자동화까지"
        summary="앱, 웹, API, 인프라, 데이터, 자동화를 실제 서비스 안에서 다뤄 왔습니다."
      />
      <div className="skills-grid">
        {portfolioData.skills.map((group) => (
          <NeoCard className="skill-card" key={group.id}>
            <h3>{group.label}</h3>
            <p>{group.summary}</p>
            <div className="chip-row">
              {group.skills.map((skill) => (
                <span className="neo-chip" key={`${group.id}-${skill}`}>
                  {skill}
                </span>
              ))}
            </div>
          </NeoCard>
        ))}
      </div>
    </section>
  )
}
