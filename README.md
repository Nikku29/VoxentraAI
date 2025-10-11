# VoxentraAI

A modern React application showcasing VoxentraAI's autonomous AI systems for regulated enterprise environments. This application features interactive visualizations, scroll-driven animations, and a modern tech stack presentation.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast development with Vite and hot module replacement
- 🎯 Interactive scroll-driven animations
- 🧩 Component-based architecture with shadcn/ui
- 📱 Mobile-first responsive design
- 🚀 Trinity Architecture visualization
- 💼 Enterprise-focused UI components

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/Nikku29/VoxentraAI.git
cd VoxentraAI
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`.

### Available Scripts

- `npm run dev` - Start development server on localhost:8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development with debug tools
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/           # Static images and assets
├── components/       # React components
│   ├── ui/          # shadcn/ui components (auto-generated)
│   ├── DigitalWorkforce.tsx
│   ├── Footer.tsx
│   ├── ProblemSection.tsx
│   ├── TechStack.tsx
│   └── TrinityArchitecture.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Route components
└── index.css        # Global styles and animations
```

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui built on Radix UI primitives
- **State Management**: TanStack Query + React hooks
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## Key Features

### Trinity Architecture Visualization
Interactive scroll-driven visualization of the three-layer AI architecture:
- **PCE (Process Control Engine)**: Data processing and workflow management
- **ETS (Enterprise Task Scheduler)**: Task orchestration and scheduling
- **ARC (Autonomous Resource Controller)**: Resource allocation and optimization

### Scroll-Driven Animations
The application uses Intersection Observer API and scroll event listeners to create engaging animations as users scroll through sections.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Developed by Nikku29

## Acknowledgments

- Built with modern React development practices
- UI components powered by shadcn/ui
- Animations inspired by modern web design trends
