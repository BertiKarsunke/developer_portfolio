import { RotateCcw } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { buildGraphModel, filterProjectIds, selectVisibleNodeId } from "../../data/graph"
import type { PortfolioData, SkillCategoryId } from "../../types/portfolio"
import { SectionHeader } from "../Neo"
import { GraphDetail } from "./GraphDetail"
import { connectedIds, createLayout, graphSize, nodeColor, nodeShape } from "./graphLayout"
import { RelationshipFallback } from "./RelationshipFallback"
import { useReducedMotion } from "./useReducedMotion"

const filterOptions = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "data-realtime", label: "Data / Realtime" },
  { id: "cloud-ci", label: "Cloud / CI-CD" },
  { id: "automation", label: "Automation" },
] as const satisfies readonly { readonly id: SkillCategoryId | "all"; readonly label: string }[]

type GraphProps = {
  readonly data: PortfolioData
}

export function ProjectSkillImpactGraph({ data }: GraphProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>("cashrun")
  const [activeCategory, setActiveCategory] = useState<SkillCategoryId | "all">("all")
  const [featuredOnly, setFeaturedOnly] = useState(false)
  const reducedMotion = useReducedMotion()
  const graph = useMemo(() => buildGraphModel(data), [data])
  const visibleProjectIds = useMemo(
    () => filterProjectIds(data, activeCategory, featuredOnly),
    [activeCategory, data, featuredOnly],
  )
  const visibleNodeIds = useMemo(() => {
    const ids = new Set<string>(visibleProjectIds)
    for (const edge of graph.edges) {
      if (ids.has(edge.source)) ids.add(edge.target)
      if (ids.has(edge.target)) ids.add(edge.source)
    }
    return ids
  }, [graph.edges, visibleProjectIds])
  const layoutNodes = useMemo(
    () => createLayout(graph.nodes, graph.edges, reducedMotion),
    [graph, reducedMotion],
  )
  const resolvedSelectedNodeId = selectVisibleNodeId(
    selectedNodeId,
    visibleNodeIds,
    visibleProjectIds,
  )
  const selectedNode = resolvedSelectedNodeId
    ? graph.nodes.find((node) => node.id === resolvedSelectedNodeId && visibleNodeIds.has(node.id))
    : undefined
  const relatedIds = selectedNode ? connectedIds(graph.edges, selectedNode.id) : new Set<string>()
  const selectedProjectId = selectedNode?.type === "project" ? selectedNode.id : undefined

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedNodeId(selectVisibleNodeId(undefined, visibleNodeIds, visibleProjectIds))
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [visibleNodeIds, visibleProjectIds])

  useEffect(() => {
    if (selectedNodeId !== resolvedSelectedNodeId) setSelectedNodeId(resolvedSelectedNodeId)
  }, [resolvedSelectedNodeId, selectedNodeId])

  const resetGraph = () => {
    setActiveCategory("all")
    setFeaturedOnly(false)
    setSelectedNodeId(
      selectVisibleNodeId(
        undefined,
        new Set(data.projects.map((project) => project.id)),
        data.projects.map((project) => project.id),
      ),
    )
  }

  return (
    <section className="page-section page-section--dark" id="impact-map">
      <SectionHeader
        eyebrow="WORK CONNECTIONS"
        title="프로젝트와 기술, 성과의 연결"
        summary="각 프로젝트에서 맡은 기술과 결과를 함께 확인할 수 있습니다. 노드를 선택하면 관련 근거만 강조됩니다."
      />
      <div className="graph-shell">
        <fieldset className="graph-controls">
          <legend className="sr-only">그래프 필터</legend>
          {filterOptions.map((option) => (
            <button
              className={activeCategory === option.id ? "neo-toggle is-active" : "neo-toggle"}
              key={option.id}
              onClick={() => setActiveCategory(option.id)}
              type="button"
              aria-pressed={activeCategory === option.id}
            >
              {option.label}
            </button>
          ))}
          <button
            className={featuredOnly ? "neo-toggle is-active" : "neo-toggle"}
            onClick={() => setFeaturedOnly((current) => !current)}
            type="button"
            aria-pressed={featuredOnly}
          >
            Featured only
          </button>
          <button className="neo-toggle" onClick={resetGraph} type="button">
            <RotateCcw aria-hidden="true" strokeWidth={3} /> Reset
          </button>
        </fieldset>
        <div className="graph-layout">
          <section className="graph-canvas" aria-label="프로젝트 스킬 성과 네트워크">
            <svg role="img" viewBox={`0 0 ${graphSize.width} ${graphSize.height}`}>
              <title>Project, Technology, Outcome Network</title>
              {graph.edges.map((edge) => {
                const source = layoutNodes.find((node) => node.id === edge.source)
                const target = layoutNodes.find((node) => node.id === edge.target)
                if (!source || !target || !visibleNodeIds.has(edge.source)) return null
                const active = relatedIds.has(edge.source) && relatedIds.has(edge.target)
                return (
                  <line
                    className={active ? "graph-edge is-active" : "graph-edge"}
                    key={`${edge.source}-${edge.target}-${edge.relation}`}
                    strokeWidth={edge.featured ? 4 : 2}
                    x1={source.x}
                    x2={target.x}
                    y1={source.y}
                    y2={target.y}
                  />
                )
              })}
            </svg>
            <div className="graph-node-layer" aria-hidden="false">
              {layoutNodes.map((node) => {
                if (!visibleNodeIds.has(node.id)) return null
                const selected = resolvedSelectedNodeId === node.id
                const connected = relatedIds.has(node.id)
                const shape = nodeShape(node)
                return (
                  <button
                    className={[
                      "graph-node-button",
                      `graph-node-button--${shape}`,
                      connected || selected ? "is-connected" : "",
                      selected ? "is-selected" : "",
                    ].join(" ")}
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    onFocus={() => setSelectedNodeId(node.id)}
                    style={{
                      backgroundColor: nodeColor(node, selected),
                      left: `${(((node.x ?? 0) / graphSize.width) * 100).toFixed(2)}%`,
                      top: `${(((node.y ?? 0) / graphSize.height) * 100).toFixed(2)}%`,
                    }}
                    type="button"
                    aria-label={`${node.label}: ${node.summary}`}
                    aria-pressed={selected}
                  >
                    <span>{node.label}</span>
                  </button>
                )
              })}
            </div>
          </section>
          <GraphDetail node={selectedNode} />
        </div>
        <RelationshipFallback
          data={data}
          onSelectProject={setSelectedNodeId}
          projectIds={visibleProjectIds}
          selectedProjectId={selectedProjectId}
        />
        <p className="sr-only" aria-live="polite">
          {selectedNode
            ? `${selectedNode.label} 선택됨. ${selectedNode.summary}`
            : "노드를 선택하면 상세 정보가 표시됩니다."}
        </p>
      </div>
    </section>
  )
}
