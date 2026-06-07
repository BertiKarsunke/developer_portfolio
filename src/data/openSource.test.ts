import { describe, expect, it } from "vitest"
import { portfolioData } from "./portfolio"

describe("openSource data", () => {
  it("uses public GitHub activity values and links to real repositories", () => {
    const { openSource } = portfolioData
    const metricValues = Object.fromEntries(
      openSource.metrics.map((metric) => [metric.label, metric.value]),
    )
    const repoUrls = openSource.repos.map((repo) => repo.href)

    expect(openSource.checkedAt).toBe("2026-06-07")
    expect(metricValues["Public repos"]).toBe("37")
    expect(metricValues["Contributions"]).toBe("50")
    expect(metricValues["Commit activity"]).toBe("19")
    expect(metricValues["Repository work"]).toBe("7")
    expect(repoUrls).toContain("https://github.com/BertiKarsunke/cnn-fearandgreed")
    expect(repoUrls).toContain("https://github.com/BertiKarsunke/x-thread-clean-capture")
    expect(repoUrls).toContain("https://github.com/BertiKarsunke/ReportSkills_ko")
    expect(openSource.ecosystemNotes.join(" ")).toContain("repositoryContributedTo")
  })
})
