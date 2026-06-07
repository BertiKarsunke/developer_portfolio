export const skillCategoryIds = [
  "mobile",
  "backend",
  "frontend",
  "data-realtime",
  "cloud-ci",
  "automation",
] as const

export type SkillCategoryId = (typeof skillCategoryIds)[number]

export const nodeTypes = ["project", "skill", "impact"] as const

export type NodeType = (typeof nodeTypes)[number]

export type PortfolioLink = {
  readonly label: string
  readonly href: string
}

export type Profile = {
  readonly name: string
  readonly headline: string
  readonly summary: string
  readonly github: PortfolioLink
  readonly linkedin: PortfolioLink
}

export type SkillGroup = {
  readonly id: SkillCategoryId
  readonly label: string
  readonly summary: string
  readonly skills: readonly string[]
}

export type Project = {
  readonly id: string
  readonly title: string
  readonly company: string
  readonly years: string
  readonly role: string
  readonly problem: string
  readonly solution: string
  readonly outcome: string
  readonly stack: readonly string[]
  readonly categories: readonly SkillCategoryId[]
  readonly impacts: readonly string[]
  readonly links: readonly PortfolioLink[]
  readonly featured: boolean
}

export type Experience = {
  readonly company: string
  readonly period: string
  readonly role: string
  readonly highlights: readonly string[]
}

export type Impact = {
  readonly id: string
  readonly label: string
  readonly summary: string
}

export type PortfolioData = {
  readonly profile: Profile
  readonly projects: readonly Project[]
  readonly skills: readonly SkillGroup[]
  readonly experience: readonly Experience[]
  readonly impacts: readonly Impact[]
}

export type GraphNode = {
  readonly id: string
  readonly label: string
  readonly type: NodeType
  readonly summary: string
  readonly category?: SkillCategoryId
  readonly projectId?: string
  readonly featured: boolean
  readonly priority: number
  readonly links: readonly PortfolioLink[]
}

export type GraphEdge = {
  readonly source: string
  readonly target: string
  readonly relation: "uses" | "proves"
  readonly featured: boolean
}
