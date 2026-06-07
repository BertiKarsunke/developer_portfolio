import type { OpenSourceActivity } from "../types/portfolio"

export const openSource = {
  source: "GitHub public REST + GraphQL API / BertiKarsunke",
  checkedAt: "2026-06-07",
  summary: "공개 저장소에서는 브라우저 확장, Cloudflare Worker, 자동화 도구를 주로 다룹니다.",
  metrics: [
    {
      label: "Public repos",
      value: "37",
      detail: "REST public_repos 기준 공개 저장소 수",
    },
    {
      label: "Contributions",
      value: "50",
      detail: "최근 1년 contribution calendar total",
    },
    {
      label: "Commit activity",
      value: "19",
      detail: "최근 1년 public commit contributions",
    },
    {
      label: "Repository work",
      value: "7",
      detail: "최근 1년 repository contributions",
    },
  ],
  repos: [
    {
      name: "cnn-fearandgreed",
      href: "https://github.com/BertiKarsunke/cnn-fearandgreed",
      role: "Original",
      language: "TypeScript",
      description:
        "Cloudflare Worker로 CNN Fear & Greed Index 변화를 감시하고 Telegram 알림을 보내는 자동화 프로젝트",
      updated: "2026-06-03",
      tags: ["Cloudflare Worker", "Telegram", "Market Signal"],
    },
    {
      name: "x-thread-clean-capture",
      href: "https://github.com/BertiKarsunke/x-thread-clean-capture",
      role: "Original",
      language: "JavaScript",
      description:
        "X/Twitter thread를 주변 UI 없이 깨끗한 텍스트 이미지로 캡처하는 Manifest V3 확장",
      updated: "2026-05-24",
      tags: ["Chrome Extension", "Manifest V3", "Capture"],
    },
    {
      name: "x-thread-clean-capture-firefox",
      href: "https://github.com/BertiKarsunke/x-thread-clean-capture-firefox",
      role: "Original",
      language: "JavaScript",
      description: "동일한 thread capture 문제를 Firefox 환경으로 옮긴 브라우저 확장 실험",
      updated: "2026-06-01",
      tags: ["Firefox", "Browser Extension", "Text Utility"],
    },
    {
      name: "youtube-netflix-caption-screenshot-extension",
      href: "https://github.com/BertiKarsunke/youtube-netflix-caption-screenshot-extension",
      role: "Original",
      language: "JavaScript",
      description: "YouTube/Netflix 장면과 자막 오버레이를 함께 캡처하는 확장 도구",
      updated: "2026-05-21",
      tags: ["Media", "Subtitle", "Screenshot"],
    },
    {
      name: "intellij-papago-translator",
      href: "https://github.com/BertiKarsunke/intellij-papago-translator",
      role: "Original",
      language: "Kotlin",
      description: "IntelliJ 환경에서 번역 워크플로우를 줄이는 Papago 기반 플러그인 실험",
      updated: "2022-06-06",
      tags: ["IntelliJ", "Kotlin", "Plugin"],
    },
    {
      name: "ReportSkills_ko",
      href: "https://github.com/BertiKarsunke/ReportSkills_ko",
      role: "Fork",
      language: "Shell",
      description: "개발자 리포트와 스킬 문서화 흐름을 한국어 환경에서 살펴본 fork",
      updated: "2026-06-06",
      tags: ["Documentation", "Automation", "Korean"],
    },
  ],
  activityDays: [
    { date: "2026-05-21", count: 5 },
    { date: "2026-05-22", count: 26 },
    { date: "2026-05-24", count: 4 },
    { date: "2026-05-25", count: 3 },
    { date: "2026-05-31", count: 5 },
    { date: "2026-06-01", count: 2 },
    { date: "2026-06-03", count: 1 },
    { date: "2026-06-06", count: 2 },
    { date: "2026-06-07", count: 1 },
  ],
  ecosystemNotes: [
    "Android/iOS UI, Flutter/APNS, AppFlowy, Cloudflare Workers 등 제품 개발 생태계를 꾸준히 확인",
    "최근 소유 저장소는 브라우저 확장과 업무 자동화처럼 작고 반복 가능한 문제 해결에 집중",
    "GitHub GraphQL 기준 최근 1년 외부 repositoryContributedTo는 0건으로 확인",
  ],
} satisfies OpenSourceActivity
