# Contributing to VoxentraAI

Thank you for your interest in contributing to VoxentraAI! This document provides guidelines and information for contributors.

## Development Setup

1. **Fork the repository**
   ```sh
   # Clone your fork
   git clone https://github.com/YOUR_USERNAME/VoxentraAI.git
   cd VoxentraAI
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start development server**
   ```sh
   npm run dev
   ```

## Project Structure

### Key Directories

- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components (auto-generated, don't edit manually)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/pages/` - Route components

### Important Files

- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions (PascalCase for components, camelCase for functions)
- Use Tailwind CSS classes for styling
- Keep components focused and single-purpose

### Component Development

- Place custom components in `src/components/`
- Use shadcn/ui components from `src/components/ui/`
- Add new shadcn/ui components with: `npx shadcn@latest add <component-name>`
- Never manually edit files in `src/components/ui/`

### Animation Guidelines

- Use `useEffect` with scroll listeners for dynamic animations
- Apply `reveal` class for intersection observer animations
- Use `opacity-0 transition-all duration-700 ease-out` for scroll reveals

## Pull Request Process

1. **Create a feature branch**
   ```sh
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing patterns
   - Test your changes

3. **Commit your changes**
   ```sh
   git commit -m "Add: brief description of your changes"
   ```

4. **Push to your fork**
   ```sh
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Provide a clear description of changes
   - Link any relevant issues
   - Ensure all checks pass

## Available Scripts

- `npm run dev` - Start development server on localhost:8080
- `npm run build` - Create production build
- `npm run build:dev` - Create development build with debug tools
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Adding New Components

### Custom Components
```tsx
// src/components/MyComponent.tsx
import { ComponentProps } from '@/components/ui/component-name'

export function MyComponent() {
  return (
    <div className="reveal opacity-0 transition-all duration-700 ease-out">
      {/* Your component content */}
    </div>
  )
}
```

### Using shadcn/ui Components
```sh
# Add a new shadcn/ui component
npx shadcn@latest add button

# Use in your component
import { Button } from '@/components/ui/button'
```

## Animation Patterns

### Scroll Reveal
```tsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0')
        entry.target.classList.add('opacity-100')
      }
    })
  })

  // Observe elements with 'reveal' class
}, [])
```

## Questions and Support

If you have questions or need help:
- Check existing issues on GitHub
- Create a new issue with the "question" label
- Follow the issue template

Thank you for contributing to VoxentraAI! 🚀