import { BriefcaseBusiness, Code2, Send } from "lucide-react"
import { portfolioData } from "../data/portfolio"
import { NeoButton } from "./Neo"

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="sticker-label">CONTACT</span>
        <h2>제품을 실제로 움직이게 만드는 개발자를 찾고 있다면</h2>
        <p>현재 공개 가능한 연락 채널은 GitHub와 LinkedIn입니다.</p>
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
