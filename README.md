# single_page_shoe

Creation of a webpage with a shoe product page (running shoes for men), built with React, TypeScript and TailwindCSS.

This repository contains a small Single Page Application (SPA) challenge: create a visually appealing, responsive product page for running shoes. The project is structured to be componentized (breadcrumb, image gallery, product details, actions) and optimized for performance and accessibility.

## Tech stack
- Next.js (app router)
- React + TypeScript
- Tailwind CSS

## Features
- Semantic HTML (accessible breadcrumb, headings, lists)
- Componentized layout (reusable components under `app/components`)
- Responsive design using Tailwind (flexbox/grid)
- Lightweight image usage and simple animations/hover states
- Optional JSON-LD for Breadcrumbs (SEO)

## How to run
1. Install dependencies:

```powershell
npm install
```

2. Run development server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
npm run start
```

## Notes about the breadcrumb
The breadcrumb component lives in `app/components/shared/breadcrumb` and is built to accept a flexible list of items, a custom Link component (for `next/link`), and an optional JSON-LD structured data injection for SEO. It supports truncation and accessibility attributes like `aria-current`.

## Contribution / resolving conflicts
If you run into a merge or rebase conflict on `README.md` (add/add), combine the relevant sections and keep useful run instructions. A recommended quick workflow when rebasing:

```powershell
git branch backup-before-rebase
# resolve the README.md content, then:
git add README.md
git rebase --continue
```

---
Small project created as part of a UI challenge to build a product page for running shoes.

```
