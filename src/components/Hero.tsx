import { ArrowRight, BriefcaseBusiness, Download, Sparkles } from "lucide-react"
import { portfolioData } from "../data/portfolio"
import { NeoButton } from "./Neo"

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <span className="sticker-label sticker-label--tilt">PRODUCT + FULL STACK</span>
        <strong className="hero-name">{portfolioData.profile.name}</strong>
        <h1>
          <span className="hero-title-line">Builds</span>
          <span className="hero-title-line outlined">Product</span>
          <span className="hero-title-line">Systems.</span>
        </h1>
        <p>{portfolioData.profile.summary}</p>
        <div className="hero-actions">
          <NeoButton href="#projects">
            프로젝트 보기 <ArrowRight aria-hidden="true" strokeWidth={3} />
          </NeoButton>
          <NeoButton href={portfolioData.profile.github.href} variant="outline">
            GitHub <Download aria-hidden="true" strokeWidth={3} />
          </NeoButton>
          <NeoButton href={portfolioData.profile.linkedin.href} variant="secondary">
            LinkedIn <BriefcaseBusiness aria-hidden="true" strokeWidth={3} />
          </NeoButton>
        </div>
      </div>
      <aside className="hero-board" aria-label="핵심 경력 요약">
        <div className="hero-stat hero-stat--yellow">
          <strong>14Y+</strong>
          <span className="hero-stat__label">Mobile / Backend / Web</span>
        </div>
        <div className="hero-stat hero-stat--violet">
          <strong>Ops</strong>
          <span className="hero-stat__label">Launch, Monitor, Improve</span>
        </div>
        <div className="hero-stat hero-stat--red">
          <Sparkles aria-hidden="true" strokeWidth={3} />
          <span className="hero-stat__label">Apps, APIs, Infra, Automation</span>
        </div>
      </aside>
    </section>
  )
}
