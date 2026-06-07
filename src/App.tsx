import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { ProjectSkillImpactGraph } from "./components/visualizations/ProjectSkillImpactGraph"
import { portfolioData } from "./data/portfolio"

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <ProjectSkillImpactGraph data={portfolioData} />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
