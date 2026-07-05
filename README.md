# Nishanth K J — Portfolio

A production-oriented developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and Motion.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Motion for React
- Lucide React
- GitHub Pages deployment workflow

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run lint
```

## Project structure

```text
src/
├── components/   # Reusable UI and section components
├── data/         # Project and capability data
├── hooks/        # Shared React hooks
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

The repository includes `.github/workflows/deploy.yml` for GitHub Pages. The Vite base path is configured as `/Portfolio/`.

In GitHub repository settings, set **Pages → Source** to **GitHub Actions**.
