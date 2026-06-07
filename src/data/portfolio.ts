import type { PortfolioData } from "../types/portfolio"
import { experience, impacts, profile, skills } from "./profile"
import { projects } from "./projects"

export const portfolioData = {
  profile,
  projects,
  skills,
  experience,
  impacts,
} satisfies PortfolioData
