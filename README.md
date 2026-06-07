# 이성진 Developer Portfolio

Vite, React, TypeScript, Tailwind CSS 4, D3, and lucide-react 기반의 정적 개발자 포트폴리오입니다.

## Local Development

```sh
pnpm install
pnpm run dev
```

## Verification

```sh
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm run preview
```

## GitHub Pages

기본 Vite base path는 project Pages 기준인 `/developer_portfolio/`입니다.

```sh
pnpm run build
```

사용자 사이트 또는 custom domain처럼 root path가 필요한 경우:

```sh
GITHUB_PAGES_BASE=/ pnpm run build
```

배포는 `.github/workflows/deploy.yml`에서 `dist`를 GitHub Pages artifact로 업로드합니다. Repository Settings에서 Pages source를 GitHub Actions로 설정하세요.

## Content Notes

- 이력서 PDF 원본은 커밋하지 않습니다.
- 전화번호, 주소, 비공개 이메일, 희망연봉 같은 민감 정보는 공개 포트폴리오 데이터에 포함하지 않았습니다.
- 공개 가능한 연락 채널은 현재 GitHub 링크만 사용합니다.
