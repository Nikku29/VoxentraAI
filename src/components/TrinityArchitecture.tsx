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
