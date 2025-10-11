# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on localhost:8080 with hot reload
- `npm run build` - Production build
- `npm run build:dev` - Development build with debug tools
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on all TypeScript/TSX files

### Single File Development
This project uses Vite's fast HMR - changes to individual components will hot-reload instantly. No separate testing commands are configured.

## Architecture Overview

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation (configured but not actively used)
- **Animations**: Custom CSS animations and scroll-driven effects

### Application Architecture

**Single Page Application**: This is a marketing/showcase website for VoxentraAI with scroll-driven animations and sections. The main content is in `Index.tsx` with modular components for each section.

**Component Structure**:
- `ProblemSection` - Describes the business problem being solved
- `TrinityArchitecture` - Interactive scroll-driven visualization of the three-layer AI architecture (PCE, ETS, ARC)
- `DigitalWorkforce` - Showcases AI workforce capabilities
- `TechStack` - Technology stack presentation
- `Footer` - Contact and company information

**Scroll-Driven Interactions**: The application heavily uses Intersection Observer API and scroll event listeners to create engaging animations as users scroll through sections.

### Project Structure
```
src/
├── assets/           # Static images (hero-servers.jpg)
├── components/       # Page section components
│   └── ui/          # shadcn/ui components (auto-generated)
├── hooks/           # Custom React hooks (use-mobile.tsx, use-toast.ts)
├── lib/             # Utility functions (utils.ts)
├── pages/           # Route components (Index.tsx, NotFound.tsx)
├── index.css        # Global CSS with Tailwind and custom animations
├── main.tsx         # Application entry point
└── vite-env.d.ts    # Vite TypeScript definitions
```

### Key Architectural Patterns

**Component Architecture**: Uses shadcn/ui design system. All UI components in `src/components/ui/` are auto-generated and should not be manually edited.

**Path Aliases**: Uses `@/` alias pointing to `src/` directory. Import pattern: `@/components/ComponentName`

**Animation System**: 
- Custom CSS keyframes for data flow animations
- Intersection Observer for scroll-reveal effects
- Scroll progress calculations for interactive visualizations
- CSS classes: `reveal`, `animate-data-flow`, `animate-glow`

**Styling System**: 
- Tailwind CSS with custom color variables
- CSS variables for theming (no active dark/light mode toggle)
- Custom gradient backgrounds: `bg-tech-gradient`
- Neon color scheme with custom CSS variables

**State Management**:
- TanStack Query setup (QueryClient provider in App.tsx)
- Local component state with React hooks
- Scroll progress tracking for animations

### Component Development Guidelines

**shadcn/ui Components**: 
- Located in `src/components/ui/`
- Configuration in `components.json`
- Add new components: `npx shadcn@latest add <component-name>`
- Never manually edit files in `ui/` directory

**Custom Components**: 
- Place in `src/components/`
- Use TypeScript for props
- Follow PascalCase naming for component files
- Import UI components using `@/components/ui/` path

**Animation Components**:
- Use `useEffect` with scroll listeners for dynamic animations
- Implement `useRef` for DOM element references
- Apply `reveal` class for intersection observer animations
- Use `opacity-0 transition-all duration-700 ease-out` for scroll reveals

### Development Notes

**TypeScript Configuration**: 
- Uses project references (`tsconfig.json` -> `tsconfig.app.json` + `tsconfig.node.json`)
- Relaxed strictness settings (`noImplicitAny: false`, `strictNullChecks: false`)
- Path aliases configured for clean imports

**Vite Configuration**: 
- Development server on port 8080 (custom override)
- Host set to "::" for network access
- SWC plugin for fast React compilation
- Path aliases: `@` -> `./src`

**ESLint Configuration**:
- Uses modern ESLint flat config format
- TypeScript ESLint with React hooks plugin
- Custom rule: `@typescript-eslint/no-unused-vars: "off"`

## Key Files to Understand

- `src/App.tsx` - Application root with providers (QueryClient, Router, Toasts)
- `src/pages/Index.tsx` - Main landing page with navigation and scroll effects
- `src/components/TrinityArchitecture.tsx` - Complex scroll-driven SVG visualization
- `components.json` - shadcn/ui configuration with aliases
- `tailwind.config.ts` - Tailwind configuration with custom animations
- `vite.config.ts` - Build configuration with port 8080 and aliases
- `src/index.css` - Global styles and custom CSS animations
