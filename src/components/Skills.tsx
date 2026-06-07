import { portfolioData } from "../data/portfolio"
import { NeoCard, SectionHeader } from "./Neo"

export function Skills() {
  return (
    <section className="page-section" id="skills">
      <SectionHeader
        eyebrow="STACK RANGE"
        title="모바일에서 자동화까지 이어지는 기술 범위"
        summary="스킬은 단순 나열보다 프로젝트에서 맡은 역할을 설명하는 그룹으로 묶었습니다."
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
