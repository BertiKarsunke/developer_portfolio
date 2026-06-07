import { BriefcaseBusiness, Code2, Send } from "lucide-react"
import { portfolioData } from "../data/portfolio"
import { NeoButton } from "./Neo"

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="sticker-label">CONTACT</span>
        <h2>제품 운영까지 책임지는 개발자</h2>
        <p>공개 이력과 연락 채널은 GitHub와 LinkedIn에서 확인할 수 있습니다.</p>
      </div>
      <div className="hero-actions">
        <NeoButton href={portfolioData.profile.github.href}>
          GitHub 열기 <Code2 aria-hidden="true" strokeWidth={3} />
        </NeoButton>
        <NeoButton href={portfolioData.profile.linkedin.href} variant="outline">
          LinkedIn 열기 <BriefcaseBusiness aria-hidden="true" strokeWidth={3} />
        </NeoButton>
        <NeoButton href="#top" variant="secondary">
          맨 위로 <Send aria-hidden="true" strokeWidth={3} />
        </NeoButton>
      </div>
    </section>
  )
}
