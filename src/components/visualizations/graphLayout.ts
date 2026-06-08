import * as d3 from "d3"
import type { GraphEdge, GraphNode, SkillCategoryId } from "../../types/portfolio"

export type LayoutNode = {
  id: string
  label: string
  type: GraphNode["type"]
  summary: string
  category?: SkillCategoryId
  projectId?: string
  featured: boolean
  priority: number
  links: GraphNode["links"]
  x?: number
  y?: number
  vx?: number
  vy?: number
  fx?: number | null
  fy?: number | null
}

export const graphSize = {
  width: 920,
  height: 780,
} as const

export function createLayout(
  nodes: readonly GraphNode[],
  edges: readonly GraphEdge[],
  reducedMotion: boolean,
): readonly LayoutNode[] {
  const layoutNodes = nodes.map((node): LayoutNode => ({ ...node }))
  if (reducedMotion) return createLaneLayout(layoutNodes, edges, 0)

  return createLaneLayout(layoutNodes, edges, 14)
}

function createLaneLayout(
  nodes: readonly LayoutNode[],
  edges: readonly GraphEdge[],
  offsetSize: number,
): readonly LayoutNode[] {
  const degreeByNode = buildDegreeMap(edges)
  const projectNodes = sortLane(
    nodes.filter((node) => node.type === "project"),
    degreeByNode,
  )
  const skillNodes = sortLane(
    nodes.filter((node) => node.type === "skill"),
    degreeByNode,
  )
  const impactNodes = sortLane(
    nodes.filter((node) => node.type === "impact"),
    degreeByNode,
  )

  return [
    ...positionLane(skillNodes, graphSize.width * 0.17, offsetSize),
    ...positionLane(projectNodes, graphSize.width * 0.5, -offsetSize),
    ...positionLane(impactNodes, graphSize.width * 0.83, offsetSize),
  ]
}

function buildDegreeMap(edges: readonly GraphEdge[]): ReadonlyMap<string, number> {
  const degreeByNode = new Map<string, number>()
  for (const edge of edges) {
    degreeByNode.set(edge.source, (degreeByNode.get(edge.source) ?? 0) + 1)
    degreeByNode.set(edge.target, (degreeByNode.get(edge.target) ?? 0) + 1)
  }
  return degreeByNode
}

function sortLane(
  nodes: readonly LayoutNode[],
  degreeByNode: ReadonlyMap<string, number>,
): readonly LayoutNode[] {
  return [...nodes].sort((left, right) => {
    const degreeDelta = (degreeByNode.get(right.id) ?? 0) - (degreeByNode.get(left.id) ?? 0)
    if (degreeDelta !== 0) return degreeDelta
    return left.priority - right.priority
  })
}

function positionLane(
  nodes: readonly LayoutNode[],
  x: number,
  alternatingOffset: number,
): readonly LayoutNode[] {
  const yScale = d3
    .scalePoint<string>()
    .domain(nodes.map((node) => node.id))
    .range([86, graphSize.height - 86])
    .padding(0.35)

  return nodes.map((node, index) => {
    const stagger = index % 2 === 0 ? alternatingOffset : -alternatingOffset
    return {
      ...node,
      x: x + stagger,
      y: yScale(node.id) ?? graphSize.height / 2,
    }
  })
}

export function connectedIds(edges: readonly GraphEdge[], nodeId: string): ReadonlySet<string> {
  const ids = new Set<string>([nodeId])
  for (const edge of edges) {
    if (edge.source === nodeId) ids.add(edge.target)
    if (edge.target === nodeId) ids.add(edge.source)
  }
  return ids
}

export function nodeColor(node: GraphNode | LayoutNode, selected: boolean): string {
  if (selected) return "#000000"
  switch (node.type) {
    case "project":
      return "#FF6B6B"
    case "skill":
      return "#FFD93D"
    case "impact":
      return "#C4B5FD"
    default:
      return "#FFFFFF"
  }
}

export function nodeShape(node: GraphNode | LayoutNode): "circle" | "rect" | "diamond" {
  switch (node.type) {
    case "project":
      return "rect"
    case "skill":
      return "circle"
    case "impact":
      return "diamond"
    default:
      return "circle"
  }
}
