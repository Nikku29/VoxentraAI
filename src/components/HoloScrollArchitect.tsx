import { useEffect, useState, useRef } from "react";

interface Stage {
  id: number;
  title: string;
  content: string;
  metricLabel: string;
  metricValue: string;
  color: string;
}

const stages: Stage[] = [
  {
    id: 0,
    title: "ARCHITECTURAL DEFENSE: The Synergistic Trinity",
    content: "The current reactive approach is a single point of failure. We engineered a multi-layered, verifiable core.",
    metricLabel: "Phase Status",
    metricValue: "Problem Transition",
    color: "core"
  },
  {
    id: 1,
    title: "1. PROACTIVE CONTEXT ENGINE (PCE)",
    content: "Zero-Second Analysis. Edge RAG deployment eliminates latency. We solve the problem before the user finishes speaking.",
    metricLabel: "Latency Metric",
    metricValue: "TTFT Target: <200ms",
    color: "blue"
  },
  {
    id: 2,
    title: "2. EMOTIONAL TWIN SYSTEM (ETS)",
    content: "Verifiable Empathy. Proprietary BDI-E model quantifies emotion. Ensures policy-driven, non-robotic tone modulation.",
    metricLabel: "Compliance Status",
    metricValue: "Affective Computing Policy: Active",
    color: "purple"
  },
  {
    id: 3,
    title: "3. AGENTIC REASONING CORE (ARC)",
    content: "Verifiable Autonomy. Metareasoning Policy governs all action. Guarantees PCI DSS and HIPAA compliance on every decision.",
    metricLabel: "Compliance Status",
    metricValue: "ARC Audit Trail: PCI/HIPAA Ready",
    color: "green"
  },
  {
    id: 4,
    title: "4. S2S ULTRA-LOW LATENCY BACKBONE",
    content: "Collapse the Stack. Unified Speech-to-Speech (S2S) architecture bypasses multi-component pipeline bottlenecks. Delivers human-flow conversation.",
    metricLabel: "Performance",
    metricValue: "Inference Speed: 50ms Target",
    color: "unified"
  },
  {
    id: 5,
    title: "VOXENTRAAI: THE INTEGRATED MOAT",
    content: "Unassailable Defense. The complexity is the product. Ready for global enterprise deployment.",
    metricLabel: "Final Metric",
    metricValue: "Architectural Moat: Locked",
    color: "synthesis"
  }
];

export const HoloScrollArchitect = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within the container
      const scrolled = -rect.top;
      const totalScrollable = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      
      setScrollProgress(progress);
      
      // Determine current stage (0-5)
      const stage = Math.min(5, Math.floor(progress * 6));
      setCurrentStage(stage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stage = stages[currentStage];
  const stageProgress = (scrollProgress * 6) % 1; // Progress within current stage

  return (
    <section 
      ref={containerRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      {/* Sticky container for visualization */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* Metadata Panel */}
        <div className="absolute top-8 right-8 z-20 bg-card/80 backdrop-blur-md border border-border rounded-lg p-6 min-w-[280px] animate-slide-in">
          <div className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wider">
            {stage.metricLabel}
          </div>
          <div className="text-lg font-bold text-foreground font-mono">
            {stage.metricValue}
          </div>
        </div>

        {/* Central Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            width="600" 
            height="600" 
            viewBox="0 0 600 600"
            className="transition-transform duration-500"
            style={{
              transform: `perspective(1000px) rotateX(${stageProgress * 10}deg) rotateY(${currentStage * 10}deg)`
            }}
          >
            {/* Core Structure */}
            <g className={`transition-all duration-500 ${currentStage >= 0 ? 'opacity-100' : 'opacity-0'}`}>
              {/* Main isometric cube */}
              <path
                d="M 300 200 L 400 250 L 400 350 L 300 400 L 200 350 L 200 250 Z"
                fill="hsl(var(--muted-foreground) / 0.3)"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                className="transition-all duration-500"
                style={{
                  filter: currentStage >= 5 ? 'drop-shadow(0 0 30px hsl(var(--neon)))' : 'none'
                }}
              />
              {/* Top face */}
              <path
                d="M 300 200 L 400 150 L 400 250 L 300 200 Z"
                fill="hsl(var(--muted-foreground) / 0.2)"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
              {/* Right face */}
              <path
                d="M 400 250 L 400 350 L 400 250 Z"
                fill="hsl(var(--muted-foreground) / 0.1)"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
            </g>

            {/* PCE Layer - Blue pathways */}
            {currentStage >= 1 && (
              <g className="animate-fade-scale" style={{ animationDelay: "0.1s" }}>
                {/* Blue data lines flowing in */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const startX = 300 + Math.cos(angle) * 250;
                  const startY = 300 + Math.sin(angle) * 250;
                  return (
                    <line
                      key={`blue-${i}`}
                      x1={startX}
                      y1={startY}
                      x2="300"
                      y2="300"
                      stroke="hsl(var(--neon))"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-data-flow"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        filter: 'drop-shadow(0 0 8px hsl(var(--neon)))'
                      }}
                    />
                  );
                })}
                {/* Blue glow */}
                <circle
                  cx="300"
                  cy="300"
                  r="80"
                  fill="hsl(var(--neon) / 0.2)"
                  className="animate-glow"
                />
              </g>
            )}

            {/* ETS Layer - Purple twin */}
            {currentStage >= 2 && (
              <g className="animate-fade-scale" style={{ animationDelay: "0.15s" }}>
                {/* Emotional twin structure */}
                <path
                  d="M 450 300 L 500 325 L 500 375 L 450 400 L 400 375 L 400 325 Z"
                  fill="hsl(var(--neon-purple) / 0.3)"
                  stroke="hsl(var(--neon-purple))"
                  strokeWidth="2"
                  style={{ filter: 'drop-shadow(0 0 15px hsl(var(--neon-purple)))' }}
                />
                {/* Connection pulses */}
                {[...Array(4)].map((_, i) => (
                  <line
                    key={`purple-${i}`}
                    x1="350"
                    y1={280 + i * 20}
                    x2="425"
                    y2={310 + i * 20}
                    stroke="hsl(var(--neon-purple))"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    className="animate-glow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </g>
            )}

            {/* ARC Layer - Green grid */}
            {currentStage >= 3 && (
              <g className="animate-fade-scale" style={{ animationDelay: "0.2s" }}>
                {/* Grid overlay */}
                {[...Array(5)].map((_, i) => (
                  <line
                    key={`grid-h-${i}`}
                    x1="150"
                    y1={200 + i * 50}
                    x2="450"
                    y2={200 + i * 50}
                    stroke="hsl(var(--neon-green) / 0.4)"
                    strokeWidth="1"
                  />
                ))}
                {[...Array(7)].map((_, i) => (
                  <line
                    key={`grid-v-${i}`}
                    x1={150 + i * 50}
                    y1="200"
                    x2={150 + i * 50}
                    y2="400"
                    stroke="hsl(var(--neon-green) / 0.4)"
                    strokeWidth="1"
                  />
                ))}
                {/* Checkmarks */}
                {[...Array(6)].map((_, i) => (
                  <circle
                    key={`check-${i}`}
                    cx={200 + (i % 3) * 100}
                    cy={250 + Math.floor(i / 3) * 100}
                    r="6"
                    fill="hsl(var(--neon-green))"
                    className="animate-glow"
                    style={{ 
                      animationDelay: `${i * 0.15}s`,
                      filter: 'drop-shadow(0 0 6px hsl(var(--neon-green)))'
                    }}
                  />
                ))}
              </g>
            )}

            {/* S2S Integration - Rapid flow */}
            {currentStage >= 4 && (
              <g className="animate-fade-scale" style={{ animationDelay: "0.25s" }}>
                {/* Circular flow lines */}
                <circle
                  cx="300"
                  cy="300"
                  r="150"
                  fill="none"
                  stroke="hsl(var(--neon))"
                  strokeWidth="4"
                  strokeDasharray="10,5"
                  className="animate-data-flow"
                  style={{ filter: 'drop-shadow(0 0 10px hsl(var(--neon)))' }}
                />
              </g>
            )}

            {/* Final Synthesis - All layers combined */}
            {currentStage >= 5 && (
              <g className="animate-fade-scale" style={{ animationDelay: "0.3s" }}>
                <circle
                  cx="300"
                  cy="300"
                  r="200"
                  fill="none"
                  stroke="url(#synthesis-gradient)"
                  strokeWidth="6"
                  className="animate-glow"
                />
                <defs>
                  <linearGradient id="synthesis-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--neon))" />
                    <stop offset="50%" stopColor="hsl(var(--neon-purple))" />
                    <stop offset="100%" stopColor="hsl(var(--neon-green))" />
                  </linearGradient>
                </defs>
              </g>
            )}
          </svg>
        </div>

        {/* Content Panel */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-12">
          <div className="max-w-4xl mx-auto animate-slide-in" key={currentStage}>
            <h2 className="text-4xl font-bold mb-6 text-foreground font-mono tracking-tight">
              {stage.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {stage.content}
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {stages.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-12 rounded-full transition-all duration-300 ${
                index === currentStage 
                  ? 'bg-primary' 
                  : index < currentStage 
                    ? 'bg-primary/50' 
                    : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};