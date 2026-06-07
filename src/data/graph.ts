import type { GraphEdge, GraphNode, PortfolioData, SkillCategoryId } from "../types/portfolio"

export type GraphModel = {
  readonly nodes: readonly GraphNode[]
  readonly edges: readonly GraphEdge[]
}

export function buildGraphModel(data: PortfolioData): GraphModel {
  const skillNodes = data.skills.map(
    (skill, index): GraphNode => ({
      id: skill.id,
      label: skill.label,
      type: "skill",
      category: skill.id,
      summary: skill.summary,
      featured: true,
      priority: 40 + index,
      links: [],
    }),
  )

  const impactNodes = data.impacts.map(
    (impact, index): GraphNode => ({
      id: impact.id,
      label: impact.label,
      type: "impact",
      summary: impact.summary,
      featured: false,
      priority: 80 + index,
      links: [],
    }),
  )

  const projectNodes = data.projects.map(
    (project, index): GraphNode => ({
      id: project.id,
      label: project.title,
      type: "project",
      projectId: project.id,
      summary: project.outcome,
      featured: project.featured,
      priority: project.featured ? index : 60 + index,
      links: project.links,
    }),
  )

  const skillEdges = data.projects.flatMap((project) =>
    project.categories.map(
      (category): GraphEdge => ({
        source: project.id,
        target: category,
        relation: "uses",
        featured: project.featured,
      }),
    ),
  )

  const impactEdges = data.projects.flatMap((project) =>
    project.impacts.map(
      (impact): GraphEdge => ({
        source: project.id,
        target: impact,
        relation: "proves",
        featured: project.featured,
      }),
    ),
  )

  return {
    nodes: [...projectNodes, ...skillNodes, ...impactNodes],
    edges: [...skillEdges, ...impactEdges],
  }
}

export function filterProjectIds(
  data: PortfolioData,
  category: SkillCategoryId | "all",
  featuredOnly: boolean,
): readonly string[] {
  return data.projects
    .filter((project) => (category === "all" ? true : project.categories.includes(category)))
    .filter((project) => (featuredOnly ? project.featured : true))
    .map((project) => project.id)
}

export function selectVisibleNodeId(
  currentNodeId: string | undefined,
  visibleNodeIds: ReadonlySet<string>,
  fallbackProjectIds: readonly string[],
): string | undefined {
  if (currentNodeId && visibleNodeIds.has(currentNodeId)) return currentNodeId
  return fallbackProjectIds[0]
}
