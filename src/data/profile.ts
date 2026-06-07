import type { Experience, Impact, Profile, SkillGroup } from "../types/portfolio"

export const profile = {
  name: "이성진",
  headline: "14년+ 제품을 끝까지 만드는 Full-stack / Product Developer",
  summary:
    "모바일 앱, 백엔드 API, AWS 인프라, 데이터 시각화, CI/CD, 업무 자동화를 직접 설계하고 구현해 온 개발자입니다.",
  github: {
    label: "GitHub",
    href: "https://github.com/BertiKarsunke",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karsunke/",
  },
} satisfies Profile

export const skills = [
  {
    id: "mobile",
    label: "Mobile",
    summary: "React Native, Flutter, iOS, Android 앱 출시와 운영",
    skills: ["React Native", "Flutter", "iOS", "Android", "Swift", "Objective-C", "Kotlin"],
  },
  {
    id: "backend",
    label: "Backend",
    summary: "Node.js, NestJS, Spring Boot, PHP, FastAPI 기반 API 개발",
    skills: ["Node.js", "NestJS", "Express", "Spring Boot", "PHP", "FastAPI"],
  },
  {
    id: "frontend",
    label: "Frontend",
    summary: "React, Vue, Angular, Next.js 기반 웹 서비스와 관리자 화면",
    skills: ["TypeScript", "React", "Vue.js", "Angular", "Next.js", "TailwindCSS"],
  },
  {
    id: "data-realtime",
    label: "Data / Realtime",
    summary: "검색, 로그 수집, 실시간 채팅, 데이터 시각화",
    skills: ["Elasticsearch", "Redis", "MongoDB", "MySQL", "Socket.IO", "Puppeteer"],
  },
  {
    id: "cloud-ci",
    label: "Cloud / CI-CD",
    summary: "AWS 인프라와 Fastlane, TeamCity 배포 자동화",
    skills: ["AWS EC2", "RDS", "ElastiCache", "SQS", "SNS", "Fastlane", "TeamCity"],
  },
  {
    id: "automation",
    label: "Automation",
    summary: "Figma API와 내부 업무 자동화",
    skills: ["Figma API", "React", "FastAPI", "MySQL", "SQLite", "Workflow Automation"],
  },
] satisfies readonly SkillGroup[]

export const impacts = [
  {
    id: "award-investment",
    label: "Awards / Investment",
    summary: "Smart Palette로 투자유치, 공공데이터 경진대회 대통령상 등 수상 실적",
  },
  {
    id: "store-shipping",
    label: "App Store Shipping",
    summary: "iOS, Android, Flutter, React Native 앱 출시와 운영",
  },
  {
    id: "realtime-chat",
    label: "Realtime Chat",
    summary: "Socket.IO 기반 실시간 고객 상담 솔루션 개발",
  },
  {
    id: "data-visualization",
    label: "Data Visualization",
    summary: "오픈마켓 로그와 ROAS 데이터를 수집하고 시각화하는 플랫폼 개발",
  },
  {
    id: "ci-cd",
    label: "CI/CD Automation",
    summary: "Fastlane, TeamCity 기반 모바일 배포 자동화 시스템 구축",
  },
  {
    id: "workflow-automation",
    label: "Workflow Automation",
    summary: "Figma 업무 자동화 플러그인과 API 연동 도구 개발",
  },
] satisfies readonly Impact[]

export const experience = [
  {
    company: "FSN 카울리",
    period: "2022.08 - Present",
    role: "개발본부 매니저 · 백엔드/서버개발",
    highlights: ["CashRun", "난네편", "My1pick", "Figma 업무자동화 플러그인"],
  },
  {
    company: "휴넷 DTLAB",
    period: "2020.10 - 2022.08",
    role: "책임연구원",
    highlights: ["Grow Flutter 앱", "모바일 CI/CD", "Objective-C 레거시 운영"],
  },
  {
    company: "빌트온",
    period: "2018.10 - 2020.08",
    role: "개발연구소 과장",
    highlights: ["ChannelOn", "Cygnus", "LiveChatOn", "데이터 시각화"],
  },
  {
    company: "구니스",
    period: "2014.07 - 2017.07",
    role: "개발팀 대리/팀장",
    highlights: ["Smart Palette", "하드웨어 연동", "모바일 앱 런칭"],
  },
] satisfies readonly Experience[]
