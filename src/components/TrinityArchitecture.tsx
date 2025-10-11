export const TrinityArchitecture = () => {

  return (
    <section
      id="technology"
      className="bg-background py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            ARCHITECTURAL DEFENSE: THE SYNERGISTIC TRINITY
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Scroll-Driven Layered Intelligence
          </p>
        </div>

        {/* Central Visualization */}
        <div className="mb-24 flex justify-center">
          <div className="relative h-[600px] w-full max-w-3xl">
            <svg
              viewBox="0 0 600 600"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* PCE Layer - Blue converging lines */}
              <g opacity={1}>
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 300 + Math.cos(angle) * 250;
                  const y1 = 300 + Math.sin(angle) * 250;
                  return (
                    <line
                      key={`pce-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={300}
                      y2={300}
                      stroke="rgb(56, 189, 248)"
                      strokeWidth="2"
                      opacity={0.6}
                      className="animate-data-flow"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  );
                })}
                <circle
                  cx="300"
                  cy="300"
                  r={80}
                  fill="none"
                  stroke="rgb(56, 189, 248)"
                  strokeWidth="3"
                  className="animate-glow"
                />
                <text
                  x="300"
                  y="300"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="rgb(56, 189, 248)"
                  fontSize="18"
                  fontWeight="bold"
                  opacity={1}
                >
                  PCE
                </text>
              </g>

              {/* ETS Layer - Purple overlay with robot face */}
              <g opacity={1}>
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180 + Math.PI / 4;
                  const x1 = 300 + Math.cos(angle) * 180;
                  const y1 = 300 + Math.sin(angle) * 180;
                  return (
                    <line
                      key={`ets-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={300}
                      y2={300}
                      stroke="rgb(167, 139, 250)"
                      strokeWidth="2"
                      opacity={0.7}
                      strokeDasharray="5,5"
                      className="animate-data-flow"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  );
                })}
                <circle
                  cx="300"
                  cy="300"
                  r={100}
                  fill="rgba(167, 139, 250, 0.1)"
                  stroke="rgb(167, 139, 250)"
                  strokeWidth="3"
                />
                {/* Robot face icon */}
                <g>
                  <circle cx="285" cy="290" r="5" fill="rgb(167, 139, 250)" />
                  <circle cx="315" cy="290" r="5" fill="rgb(167, 139, 250)" />
                  <path
                    d="M 280 310 Q 300 320 320 310"
                    stroke="rgb(167, 139, 250)"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Heart icon */}
                  <path
                    d="M 300 325 L 310 315 Q 315 310 315 305 Q 315 300 310 300 Q 305 300 300 305 Q 295 300 290 300 Q 285 300 285 305 Q 285 310 290 315 Z"
                    fill="rgb(239, 68, 68)"
                    opacity={1}
                  />
                </g>
              </g>

              {/* ARC Layer - Green compliance grid */}
              <g opacity={1}>
                {/* Grid lines */}
                {[...Array(5)].map((_, i) => (
                  <g key={`grid-${i}`}>
                    <line
                      x1={150 + i * 25}
                      y1="240"
                      x2={150 + i * 25}
                      y2="360"
                      stroke="rgb(74, 222, 128)"
                      strokeWidth="1"
                      opacity={0.5}
                    />
                    <line
                      x1="350"
                      y1={240 + i * 30}
                      x2="470"
                      y2={240 + i * 30}
                      stroke="rgb(74, 222, 128)"
                      strokeWidth="1"
                      opacity={0.5}
                    />
                  </g>
                ))}
                <rect
                  x="220"
                  y="220"
                  width={160}
                  height={160}
                  fill="rgba(74, 222, 128, 0.1)"
                  stroke="rgb(74, 222, 128)"
                  strokeWidth="3"
                  rx="10"
                />
                {/* Compliance checkboxes */}
                {["PCI", "HIPAA"].map((label, i) => (
                  <g key={label} opacity={1}>
                    <rect
                      x={260 + i * 80}
                      y="280"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="rgb(74, 222, 128)"
                      strokeWidth="2"
                    />
                    <path
                      d={`M ${265 + i * 80} 290 L ${270 + i * 80} 295 L ${275 + i * 80} 285`}
                      stroke="rgb(74, 222, 128)"
                      strokeWidth="3"
                      fill="none"
                      opacity={1}
                    />
                    <text
                      x={270 + i * 80}
                      y="315"
                      textAnchor="middle"
                      fill="rgb(74, 222, 128)"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      {label}
                    </text>
                  </g>
                ))}
              </g>

              {/* Final Merged State */}
              <g opacity={1}>
                  <circle
                    cx="300"
                    cy="300"
                    r="120"
                    fill="rgba(56, 189, 248, 0.2)"
                    stroke="url(#trinity-gradient)"
                    strokeWidth="4"
                    className="animate-glow"
                  />
                  <text
                    x="300"
                    y="300"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    TRINITY
                  </text>
                </g>

              {/* Gradient definition */}
              <defs>
                <linearGradient id="trinity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(56, 189, 248)" />
                  <stop offset="50%" stopColor="rgb(167, 139, 250)" />
                  <stop offset="100%" stopColor="rgb(74, 222, 128)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Text Content Sections */}
        <div className="space-y-24">
          {/* PCE */}
          <div className="reveal grid gap-8 opacity-0 transition-all duration-700 ease-out lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-bold text-neon">
                LAYER 1: PCE
              </div>
              <h3 className="mb-4 text-3xl font-bold text-neon sm:text-4xl">
                Proactive Context Engine
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neon-purple sm:text-sm">
                ZERO-SECOND ANALYSIS
              </p>
              <p className="mb-4 text-base text-muted-foreground sm:text-lg">
                The PCE executes analysis in the pre-connection window. It retrieves authenticated
                customer profiles, transaction history, and knowledge assets via{" "}
                <strong>Edge RAG</strong>, generating a <strong>Potential Action Set</strong>{" "}
                before the first token is exchanged.
              </p>
              <div className="rounded-lg border border-primary/30 bg-card p-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-neon">Edge RAG Deployment:</span> Context pre-loaded at
                  network edge, eliminating data lookup latency entirely.
                </p>
              </div>
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg border border-primary/50 bg-card">
              <div className="text-center">
                <div className="mb-4 text-6xl font-bold text-neon">{"<200ms"}</div>
                <div className="text-lg text-muted-foreground">Context Retrieval</div>
              </div>
            </div>
          </div>

          {/* ETS */}
          <div className="reveal grid gap-8 opacity-0 transition-all duration-700 ease-out lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 flex h-64 items-center justify-center rounded-lg border border-secondary/50 bg-card">
              <div className="text-center">
                <div className="mb-4 text-6xl">🤖❤️</div>
                <div className="text-lg font-bold text-neon-purple">BDI-E Model</div>
                <div className="text-sm text-muted-foreground">Real-time Emotion Mapping</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-bold text-neon-purple">
                LAYER 2: ETS
              </div>
              <h3 className="mb-4 text-3xl font-bold text-neon-purple sm:text-4xl">
                Emotional Twin System
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neon sm:text-sm">
                REAL-TIME AFFECTIVE COMPUTING
              </p>
              <p className="mb-4 text-base text-muted-foreground sm:text-lg">
                A parallel AI agent analyzes <strong>vocal cadence, pitch, and semantic content</strong>,
                generating a real-time <strong>BDI-E Model</strong> (Belief-Desire-Intention-Emotion).
                This provides quantifiable empathy data beyond simple sentiment.
              </p>
              <div className="rounded-lg border border-secondary/30 bg-card p-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-neon-purple">Tone Modulation:</span> Dynamic S2S adjustments
                  to de-escalate frustration and maintain compliance.
                </p>
              </div>
            </div>
          </div>

          {/* ARC */}
          <div className="reveal grid gap-8 opacity-0 transition-all duration-700 ease-out lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-bold text-neon-green">
                LAYER 3: ARC
              </div>
              <h3 className="mb-4 text-3xl font-bold text-neon-green sm:text-4xl">
                Agentic Reasoning Core & S2S
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-neon-purple sm:text-sm">
                VERIFIABLE AUTONOMY
              </p>
              <p className="mb-4 text-base text-muted-foreground sm:text-lg">
                The ARC uses a <strong>Metareasoning Policy</strong> to orchestrate specialized
                micro-agents, verifying all decisions against <strong>PCI/HIPAA</strong> mandates.
                The <strong>Unified S2S Model</strong> collapses the ASR/LLM/TTS stack for
                ultra-low latency.
              </p>
              <div className="rounded-lg border border-accent/30 bg-card p-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-neon-green">Sub-200ms TTFT:</span> Response flow
                  indistinguishable from human experts.
                </p>
              </div>
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg border border-accent/50 bg-card">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="mb-2 text-3xl font-bold text-neon-green">✓</div>
                  <div className="text-sm text-muted-foreground">PCI DSS</div>
                </div>
                <div>
                  <div className="mb-2 text-3xl font-bold text-neon-green">✓</div>
                  <div className="text-sm text-muted-foreground">HIPAA</div>
                </div>
                <div className="col-span-2">
                  <div className="mb-2 text-3xl font-bold text-neon-green">✓</div>
                  <div className="text-sm text-muted-foreground">Auditable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trinity Merged */}
          <div className="reveal text-center opacity-0 transition-all duration-700 ease-out">
            <div className="mx-auto max-w-3xl rounded-lg border border-border bg-neon-gradient p-12">
              <h3 className="mb-4 text-4xl font-extrabold text-white">
                VoxentraAI: The Fully Integrated Moat
              </h3>
              <p className="text-lg text-white/90">
                Three layers—<span className="font-bold text-neon">Proactive</span>,{" "}
                <span className="font-bold text-neon-purple">Empathetic</span>,{" "}
                <span className="font-bold text-neon-green">Autonomous</span>—locked together
                as a single, unassailable architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
