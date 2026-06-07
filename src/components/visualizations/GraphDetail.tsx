import { ExternalLink } from "lucide-react"
import type { GraphNode } from "../../types/portfolio"

type GraphDetailProps = {
  readonly node: GraphNode | undefined
}

export function GraphDetail({ node }: GraphDetailProps) {
  if (!node) {
    return (
      <aside className="graph-detail">
        <span className="sticker-label">detail</span>
        <h3>노드를 선택하세요</h3>
        <p>프로젝트, 기술, 성과 노드를 선택하면 관련 근거와 링크가 표시됩니다.</p>
      </aside>
    )
  }

  return (
    <aside className="graph-detail">
      <span className="sticker-label">{node.type}</span>
      <h3>{node.label}</h3>
      <p>{node.summary}</p>
      {node.links.length > 0 ? (
        <div className="project-links">
          {node.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
              <ExternalLink aria-hidden="true" strokeWidth={3} />
            </a>
          ))}
        </div>
      ) : null}
    </aside>
  )
}
