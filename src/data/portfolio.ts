import type { PortfolioData } from "../types/portfolio"
import { openSource } from "./openSource"
import { experience, impacts, profile, skills } from "./profile"
import { projects } from "./projects"

export const portfolioData = {
  profile,
  projects,
  skills,
  experience,
  openSource,
  impacts,
} satisfies PortfolioData
