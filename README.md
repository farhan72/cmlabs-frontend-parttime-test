# MealApp

A modern food discovery app built with **Next.js 16**, **Tailwind CSS v4**, and **Atomic Design** architecture. Browse ingredients and explore meals powered by the [TheMealDB](https://www.themealdb.com) API.

**Live Demo:** [https://meal-app-alfiy.vercel.app/](https://meal-app-alfiy.vercel.app/)

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v18+**
- [npm](https://www.npmjs.com/) **v9+** (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:farhan72/cmlabs-frontend-parttime-test.git
cd cmlabs-frontend-parttime-test
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app auto-reloads when you edit files.

### Building for Production

```bash
npm run build
```

This compiles an optimized production build and generates a **compression report** (Gzip & Brotli savings).

### Starting the Production Server

```bash
npm start
```

Runs the built app in production mode on [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
cmlabs-frontend-parttime-test/
├── app/                      # Next.js App Router (pages & layouts)
│   ├── globals.css           # Global styles & Tailwind theme tokens
│   ├── error.tsx             # Global error boundary
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── ingredients/          # Ingredients directory
│       ├── [slug]/           # Ingredient detail page & nested routes
│       │   └── meal/[id]/    # Meal detail page
│       └── page.tsx          # Ingredients listing page
├── components/               # Atomic Design components
│   ├── atoms/                # Button, Typography, Badge, Image, Skeleton
│   ├── molecules/            # Breadcrumb, Card, MealCard, IngredientCard, SearchInput, Pagination
│   ├── organisms/            # Navbar, MealGrid, IngredientGrid, IngredientSearchList, VideoSection, MealDetailSection
│   └── templates/            # MainLayout, GridLayout
├── lib/                      # Utilities & API helpers
│   ├── api.ts                # TheMealDB API functions
│   ├── hash.ts               # ID encoding/decoding
│   └── utils.ts              # cn() helper, slugify, etc.
├── public/                   # Static assets
└── scripts/                  # Post-build reporting script
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | App Router, SSR/SSG, Image optimization |
| [React 19](https://react.dev) | UI framework |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling with semantic tokens |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Lucide React](https://lucide.dev) | Icon library |
| [TheMealDB API](https://www.themealdb.com/api.php) | Meal & ingredient data |

---

## Pages

| Route | Description |
|---|---|
| `/` | Redirects to `/ingredients` |
| `/ingredients` | Browse all ingredients with search & pagination |
| `/ingredients/[slug]` | View meals that use a specific ingredient |
| `/ingredients/[slug]/meal/[id]` | Full meal detail within context of selected ingredient |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production + show compression report |
| `npm start` | Run the production build locally |
| `npm run lint` | Run ESLint checks |

---

## Environment Variables

No API keys are required. TheMealDB free tier is used via public endpoints.

---
