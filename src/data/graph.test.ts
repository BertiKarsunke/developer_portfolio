import { describe, expect, it } from "vitest"
import { createLayout } from "../components/visualizations/graphLayout"
import { buildGraphModel, filterProjectIds, selectVisibleNodeId } from "./graph"
import { portfolioData } from "./portfolio"

describe("buildGraphModel", () => {
  it("connects projects to skills and impacts when portfolio data is provided", () => {
    const model = buildGraphModel(portfolioData)

    expect(model.nodes.some((node) => node.id === "cashrun")).toBe(true)
    expect(model.nodes.some((node) => node.id === "mobile")).toBe(true)
    expect(model.nodes.some((node) => node.id === "store-shipping")).toBe(true)
    expect(
      model.edges.some(
        (edge) => edge.source === "cashrun" && edge.target === "mobile" && edge.relation === "uses",
      ),
    ).toBe(true)
    expect(
      model.edges.some(
        (edge) =>
          edge.source === "cashrun" &&
          edge.target === "store-shipping" &&
          edge.relation === "proves",
      ),
    ).toBe(true)
  })
})

describe("filterProjectIds", () => {
  it("returns only featured backend projects when a category and featured flag are selected", () => {
    const projectIds = filterProjectIds(portfolioData, "backend", true)

    expect(projectIds).toContain("cashrun")
    expect(projectIds).toContain("my1pick")
    expect(projectIds).not.toContain("livechaton")
  })
})

describe("selectVisibleNodeId", () => {
  it("keeps the current node when it is still visible", () => {
    const selectedNodeId = selectVisibleNodeId("backend", new Set(["cashrun", "backend"]), [
      "cashrun",
    ])

    expect(selectedNodeId).toBe("backend")
  })

  it("moves selection to the first visible project when the current node is hidden", () => {
    const selectedNodeId = selectVisibleNodeId("cashrun", new Set(["my1pick"]), ["my1pick"])

    expect(selectedNodeId).toBe("my1pick")
  })
})

describe("createLayout", () => {
  it("places skills before projects before impacts from left to right", () => {
    const model = buildGraphModel(portfolioData)
    const layout = createLayout(model.nodes, model.edges, true)
    const mobile = layout.find((node) => node.id === "mobile")
    const cashrun = layout.find((node) => node.id === "cashrun")
    const storeShipping = layout.find((node) => node.id === "store-shipping")

    expect(mobile?.x).toBeLessThan(cashrun?.x ?? 0)
    expect(cashrun?.x).toBeLessThan(storeShipping?.x ?? 0)
  })
})
