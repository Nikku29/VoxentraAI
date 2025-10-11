export const TechStack = () => {
  const techCategories = [
    {
      title: "AI Models",
      items: [
        { name: "Unified S2S Models", type: "Proprietary" },
        { name: "LLM Orchestration", type: "Multi-Model Support" },
        { name: "Edge RAG", type: "Context Retrieval" },
      ],
      color: "neon",
    },
    {
      title: "Infrastructure",
      items: [
        { name: "Edge Computing Nodes", type: "Global Distribution" },
        { name: "Kubernetes", type: "Agent Orchestration" },
        { name: "Redis/Blackboard", type: "High-Speed Cache" },
      ],
      color: "neon-purple",
    },
    {
      title: "Data & Compliance",
      items: [
        { name: "Knowledge Graphs", type: "Semantic Storage" },
        { name: "HIPAA Tokenization", type: "Healthcare Security" },
        { name: "PCI DSS Systems", type: "Financial Security" },
      ],
      color: "neon-green",
    },
  ];


  return (
    <section className="border-t border-border bg-tech-gradient py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 text-center opacity-0 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            FOUNDATION: HARDWARE & SOFTWARE LAYER
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Enterprise-Grade Infrastructure for Mission-Critical AI
          </p>
        </div>

        {/* Tech Categories */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="reveal rounded-lg border border-border bg-card p-8 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className={`mb-6 text-2xl font-bold text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="rounded-lg border border-border bg-background p-4 transition-all hover:border-${category.color}/50"
                    style={{ transitionDelay: `${(catIndex * 0.15) + (itemIndex * 0.05)}s` }}
                  >
                    <div className="mb-1 font-semibold text-foreground">{item.name}</div>
                    <div className={`text-xs text-${category.color}`}>{item.type}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Architecture Diagram Placeholder */}
        <div className="reveal mt-16 rounded-lg border border-border bg-card p-8 opacity-0 transition-all duration-700 ease-out">
          <h3 className="mb-6 text-center text-2xl font-bold text-white">
            System Architecture Overview
          </h3>
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Edge Layer */}
            <div className="flex w-full max-w-4xl items-center justify-around">
              {["Edge Node 1", "Edge Node 2", "Edge Node 3"].map((node, i) => (
                <div
                  key={node}
                  className="animate-data-flow rounded-lg border-2 border-neon bg-primary/10 px-6 py-4 text-center text-sm font-semibold text-neon"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {node}
                </div>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="flex w-full max-w-4xl justify-center">
              <svg width="400" height="60" className="mx-auto">
                {[0, 1, 2].map((i) => (
                  <line
                    key={i}
                    x1={50 + i * 150}
                    y1="0"
                    x2="200"
                    y2="60"
                    stroke="hsl(var(--neon-purple))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-data-flow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>

            {/* Core Layer */}
            <div className="rounded-lg border-2 border-neon-purple bg-secondary/10 px-12 py-6 text-center">
              <div className="text-lg font-bold text-neon-purple">
                Synergistic Trinity Core
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                PCE • ETS • ARC
              </div>
            </div>

            {/* Output Layer */}
            <div className="flex w-full max-w-4xl items-center justify-around">
              {["User Interface", "API Gateway", "Analytics"].map((output, i) => (
                <div
                  key={output}
                  className="animate-data-flow rounded-lg border-2 border-neon-green bg-accent/10 px-6 py-4 text-center text-sm font-semibold text-neon-green"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {output}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Note */}
        <div className="reveal mt-12 rounded-lg border border-accent/30 bg-card p-6 text-center opacity-0 transition-all duration-700 ease-out">
          <div className="mb-2 text-sm font-bold uppercase tracking-wider text-neon-green">
            Security & Compliance
          </div>
          <p className="text-base text-muted-foreground">
            All systems architected with <strong>HIPAA & PCI DSS Compliance by Design</strong>.
            End-to-end encryption, audit logging, and zero-trust architecture across all layers.
          </p>
        </div>
      </div>
    </section>
  );
};
