export const DigitalWorkforce = () => {
  const agents = [
    {
      name: "Fraud Detection Agent",
      industry: "BFSI",
      description: "Proactively alerts and locks accounts upon detecting suspicious transactions. Autonomously initiates customer verification protocols.",
      color: "neon",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      name: "Patient Triage Agent",
      industry: "Healthcare",
      description: "Empathetically assesses urgency and routes with verified HIPAA compliance. Dynamically adjusts tone based on patient distress levels.",
      color: "neon-purple",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      name: "Complex Returns Agent",
      industry: "E-Commerce",
      description: "Handles multi-step logic and refund processing autonomously. Manages edge cases like partial returns and restocking policies.",
      color: "neon-green",
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="workforce" className="border-t border-border bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 text-center opacity-0 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            THE DIGITAL WORKFORCE: Agents of Scale
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Autonomous, Digital Experts—Not Just Chatbots
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className="reveal group relative overflow-hidden rounded-lg border border-border bg-card p-8 opacity-0 transition-all duration-700 ease-out hover:border-${agent.color}/50"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Robot Icon SVG */}
              <div className="mb-6 flex justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  className="animate-data-flow"
                  style={{ animationDuration: "4s", animationDelay: `${index * 0.3}s` }}
                >
                  {/* Robot head */}
                  <rect
                    x="20"
                    y="25"
                    width="40"
                    height="35"
                    rx="5"
                    fill="none"
                    stroke={`hsl(var(--${agent.color}))`}
                    strokeWidth="2"
                  />
                  {/* Antenna */}
                  <line
                    x1="40"
                    y1="25"
                    x2="40"
                    y2="15"
                    stroke={`hsl(var(--${agent.color}))`}
                    strokeWidth="2"
                  />
                  <circle
                    cx="40"
                    cy="15"
                    r="3"
                    fill={`hsl(var(--${agent.color}))`}
                    className="animate-glow"
                  />
                  {/* Eyes */}
                  <circle
                    cx="30"
                    cy="35"
                    r="4"
                    fill={`hsl(var(--${agent.color}))`}
                    className="group-hover:animate-pulse"
                  />
                  <circle
                    cx="50"
                    cy="35"
                    r="4"
                    fill={`hsl(var(--${agent.color}))`}
                    className="group-hover:animate-pulse"
                  />
                  {/* Mouth */}
                  <path
                    d="M 30 48 Q 40 53 50 48"
                    stroke={`hsl(var(--${agent.color}))`}
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Body */}
                  <rect
                    x="25"
                    y="60"
                    width="30"
                    height="15"
                    rx="3"
                    fill="none"
                    stroke={`hsl(var(--${agent.color}))`}
                    strokeWidth="2"
                  />
                  {/* Arms */}
                  <line
                    x1="25"
                    y1="65"
                    x2="15"
                    y2="70"
                    stroke={`hsl(var(--${agent.color}))`}
                    strokeWidth="2"
                  />
                  <line
                    x1="55"
                    y1="65"
                    x2="65"
                    y2="70"
                    stroke={`hsl(var(--${agent.color}))`}
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Industry Tag */}
              <div className={`mb-4 inline-block rounded-full bg-gradient-to-r ${agent.gradient} px-4 py-1 text-xs font-bold text-${agent.color}`}>
                {agent.industry}
              </div>

              {/* Agent Name */}
              <h3 className={`mb-4 text-2xl font-bold text-${agent.color}`}>
                {agent.name}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground">
                {agent.description}
              </p>

              {/* Active indicator */}
              <div className="mt-6 flex items-center space-x-2">
                <div className={`h-2 w-2 animate-pulse rounded-full bg-${agent.color}`} />
                <span className="text-xs font-medium text-muted-foreground">
                  ACTIVE & LEARNING
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Capabilities */}
        <div className="reveal mt-16 grid gap-6 opacity-0 transition-all duration-700 ease-out sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Autonomous Decision-Making", icon: "🧠" },
            { label: "Multi-Step Logic", icon: "🔄" },
            { label: "Compliance-First", icon: "✓" },
            { label: "24/7 Availability", icon: "🌐" },
          ].map((capability, index) => (
            <div
              key={capability.label}
              className="rounded-lg border border-border bg-card p-6 text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3 text-4xl">{capability.icon}</div>
              <div className="text-sm font-semibold text-foreground">{capability.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
