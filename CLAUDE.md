# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check + build for production (tsc && vite build)
npm run preview   # Preview production build locally
```

No test suite is configured.

## Architecture

Single-page React + TypeScript + Vite + Tailwind CSS portfolio site with RU/EN language switching.

### Data flow

**Russian content is the source of truth** — all content lives in `src/data.ts` as typed arrays (`heroMetrics`, `competencies`, `companies`, `caseStudies`, `whatIBringItems`). English translations live in `src/translations.ts` and override fields by array index at runtime via the `useLocalizedData()` hook. UI strings (labels, headings, nav items) for both languages are also in `translations.ts` in the `ui` object.

Language state is managed by `LangContext` (`src/LangContext.tsx`) — a simple `'ru' | 'en'` toggle context consumed via `useLang()`.

### Adding content

- **New company**: add an object to `companies[]` in `src/data.ts`, add matching English fields by index to `enCompanies` in `src/translations.ts`.
- **New case study**: add an object to `caseStudies[]` in `src/data.ts` with `companyId` matching a `Company.id`, add matching English fields by index to `enCaseStudies` in `src/translations.ts`.
- The `CasesSection` component auto-renders company filter tabs when `companies.length > 1`.

### Page structure (`src/App.tsx`)

`Nav` → `Hero` → `ExecutiveSummary` → `CompetencyMatrix` → `CasesSection` → `WhatIBring` → `Footer` + `BackToTop`

`DataDriven` is currently commented out.

### Key types (defined in `src/data.ts`)

- `Competency` — competency matrix row with `id`, `name`, `demonstrates`, `evidence[]`, `caseLinks[]`
- `Company` — employer entry with `id`, `name`, `role`, `period`, `industry`, `description`
- `CaseStudyData` — STAR-format case with `id`, `companyId`, `competencyBadge`, `title`, `situation`, `task`, `actions[]`, `results[]`, `metrics[]`
