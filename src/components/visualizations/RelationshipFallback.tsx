import type { PortfolioData } from "../../types/portfolio"

type RelationshipFallbackProps = {
  readonly data: PortfolioData
  readonly projectIds: readonly string[]
  readonly selectedProjectId: string | undefined
  readonly onSelectProject: (projectId: string) => void
}

export function RelationshipFallback({
  data,
  onSelectProject,
  projectIds,
  selectedProjectId,
}: RelationshipFallbackProps) {
  return (
    <div className="relationship-fallback">
      {data.projects
        .filter((project) => projectIds.includes(project.id))
        .map((project) => (
          <button
            className={
              selectedProjectId === project.id
                ? "relationship-fallback__item is-selected"
                : "relationship-fallback__item"
            }
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            type="button"
            aria-pressed={selectedProjectId === project.id}
          >
            <strong>{project.title}</strong>
            <span className="relationship-fallback__meta">{project.categories.join(" / ")}</span>
            <p>{project.outcome}</p>
          </button>
        ))}
    </div>
  )
}
