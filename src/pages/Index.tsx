import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-servers.jpg";
import { ProblemSection } from "@/components/ProblemSection";
import { TrinityArchitecture } from "@/components/TrinityArchitecture";
import { DigitalWorkforce } from "@/components/DigitalWorkforce";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Scroll reveal animation
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-wider text-neon sm:text-3xl">
            VoxentraAI
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 text-sm font-semibold md:flex">
            <button
              onClick={() => scrollToSection("problem")}
              className="transition-colors hover:text-neon"
            >
              The Problem
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="transition-colors hover:text-neon"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("workforce")}
              className="transition-colors hover:text-neon"
            >
              Workforce
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="transition-colors hover:text-neon"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("goals")}
              className="transition-colors hover:text-neon"
            >
              Goals
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neon" />
            ) : (
              <Menu className="h-6 w-6 text-foreground hover:text-neon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-border bg-card px-4 py-6 md:hidden">
            <div className="flex flex-col space-y-4 text-sm font-semibold">
              <button
                onClick={() => scrollToSection("problem")}
                className="text-left transition-colors hover:text-neon"
              >
                The Problem
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-left transition-colors hover:text-neon"
              >
                Architecture
              </button>
              <button
                onClick={() => scrollToSection("workforce")}
                className="text-left transition-colors hover:text-neon"
              >
                Workforce
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left transition-colors hover:text-neon"
              >
                Leadership
              </button>
              <button
                onClick={() => scrollToSection("goals")}
                className="text-left transition-colors hover:text-neon"
              >
                Goals
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VoxentraAI Infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="reveal container relative z-10 mx-auto px-4 text-center opacity-0 transition-all duration-700 ease-out sm:px-6 lg:px-8">
          <p className="animate-data-flow mb-4 text-xs font-semibold uppercase tracking-widest text-neon-purple sm:text-sm">
            AUTONOMY, VERIFIED.
          </p>
          <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-8xl">
            THE NEXT GENERATION OF{" "}
            <span className="text-neon">AGENCY</span>.
          </h2>
          <h3 className="mb-6 text-xl font-light text-muted-foreground sm:text-2xl lg:text-3xl">
            Proactive, Empathetic, Autonomous AI Systems for Regulated Enterprise.
          </h3>
          <p className="text-lg font-medium text-foreground sm:text-xl">
            Closing the $150 Billion Empathy and Latency Gap in Conversational AI.
          </p>
        </div>
      </section>

      {/* Problem Statement - Enhanced Canvas Animation */}
      <ProblemSection />

      {/* Technology Section - Scroll-Driven Trinity */}
      <TrinityArchitecture />

      {/* Digital Workforce Section */}
      <DigitalWorkforce />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Mission and Goals */}
      <section
        id="goals"
        className="border-t border-border bg-tech-gradient py-16 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-10 text-center opacity-0 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-extrabold text-neon sm:text-4xl">
              OUR AIM: AUTONOMY, VERIFIED.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:gap-8">
            <div className="reveal rounded-lg border border-border bg-card p-6 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: "0.1s" }}>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                Global Standard
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                Establish the <strong>Gold Standard</strong> for compliant AI agents in BFSI and
                Healthcare, leveraging architectural commitment to HIPAA and PCI DSS.
              </p>
            </div>
            <div className="reveal rounded-lg border border-border bg-card p-6 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: "0.2s" }}>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                75% Automation
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                Achieve 75% automation of all high-value, complex voice interactions, directly
                eliminating the most expensive labor bottlenecks for enterprise clients.
              </p>
            </div>
            <div className="reveal rounded-lg border border-border bg-card p-6 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: "0.3s" }}>
              <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
                Architectural IP
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                Secure global IP protection for the <strong>Synergistic Trinity</strong> (PCE, ETS,
                ARC) to maintain an unassailable technical moat against market replication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Leadership */}
      <section
        id="about"
        className="border-t border-border bg-background py-16 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-10 text-center opacity-0 transition-all duration-700 ease-out">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              LEADERSHIP: ARCHITECTING THE FUTURE.
            </h2>
          </div>
          <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-8 sm:p-12">
            <h3 className="mb-4 text-2xl font-bold text-neon sm:text-3xl">
              Nikhil Sharma, Founder
            </h3>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              Nikhil Sharma is the visionary technologist focused on solving AI's core deficiency:
              the <strong>emotional and ethical deficit</strong>. His expertise spans Deep Tech,
              Enterprise Scale, and building resilient systems for regulated global markets.
            </p>
            <blockquote className="border-l-4 border-neon pl-6 italic text-lg text-foreground">
              "We are not building a better chatbot. We are building the final layer of enterprise
              automation: the one that requires perfect trust, zero latency, and genuine empathy."
            </blockquote>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              The vision for VoxentraAI is rooted in the mandate that AI must serve human safety
              and complexity first. The goal is to build systems that are not only intelligent but{" "}
              <strong>indistinguishable in conversational flow and verifiable in compliance</strong>{" "}
              from the world's most trusted human experts. The architecture is a direct response to
              the failure of current LLM-only solutions in high-stakes environments.
            </p>
            <p className="text-base font-semibold text-neon-purple sm:text-lg">
              "We are not building a better chatbot. We are building the final layer of enterprise
              automation: the one that requires perfect trust, zero latency, and genuine empathy."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
