import { useEffect, useRef, useState } from "react";

export const ProblemSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [transitionProgress, setTransitionProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Scroll observer for transition
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollProgress = Math.min(entry.intersectionRatio * 2, 1);
            setTransitionProgress(scrollProgress);
          }
        });
      },
      { threshold: Array.from({ length: 100 }, (_, i) => i / 100) }
    );

    observer.observe(canvas);

    // Animation loop
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      if (transitionProgress < 0.5) {
        // CHAOS STATE
        ctx.globalAlpha = 1 - transitionProgress * 2;

        // Red chaotic lines
        for (let i = 0; i < 30; i++) {
          ctx.strokeStyle = `rgba(239, 68, 68, ${Math.random() * 0.8 + 0.2})`;
          ctx.lineWidth = Math.random() * 3 + 1;
          ctx.beginPath();
          ctx.moveTo(
            Math.random() * w,
            Math.sin(time + i) * 50 + h / 2 + Math.random() * 100 - 50
          );
          ctx.lineTo(
            Math.random() * w,
            Math.cos(time + i) * 50 + h / 2 + Math.random() * 100 - 50
          );
          ctx.stroke();
        }

        // Frustrated emoji icons
        ctx.font = "40px Arial";
        ["😤", "😠", "😫"].forEach((emoji, i) => {
          ctx.fillText(
            emoji,
            (w / 4) * (i + 0.5) + Math.sin(time + i) * 20,
            h / 2 + Math.cos(time * 2 + i) * 30
          );
        });

        // "70% FAIL RATE" overlay
        ctx.fillStyle = "rgba(239, 68, 68, 0.9)";
        ctx.font = "bold 32px Inter";
        ctx.textAlign = "center";
        ctx.fillText("70% FAIL RATE", w / 2, h / 4);
      } else {
        // ORDER STATE
        ctx.globalAlpha = (transitionProgress - 0.5) * 2;

        // Clean blue/green parallel lines
        for (let i = 0; i < 15; i++) {
          const gradient = ctx.createLinearGradient(0, 0, w, 0);
          gradient.addColorStop(0, "rgba(56, 189, 248, 0.3)");
          gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.5)");
          gradient.addColorStop(1, "rgba(74, 222, 128, 0.3)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          const y = (h / 16) * (i + 1) + Math.sin(time + i * 0.5) * 5;
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }

        // Data flow particles
        for (let i = 0; i < 20; i++) {
          const x = ((time * 50 + i * 50) % w);
          const y = (h / 21) * (i + 1);
          ctx.fillStyle = `rgba(56, 189, 248, ${Math.sin(time * 2 + i) * 0.5 + 0.5})`;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // "SEAMLESS FLOW" text
        ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
        ctx.font = "bold 32px Inter";
        ctx.textAlign = "center";
        ctx.fillText("SEAMLESS FLOW", w / 2, h / 4);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [transitionProgress]);

  return (
    <section
      id="problem"
      className="border-t border-border bg-tech-gradient py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-12 opacity-0 transition-all duration-700 ease-out lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-extrabold text-neon sm:text-4xl">
              THE EMPATHY GAP: Latency Kills Trust.
            </h2>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              Current AI is fundamentally <strong>reactive</strong>. It waits for a command,
              leading to unpredictable processing delays, context loss, and a robotic tone that
              damages brand trust. This is a structural failure of architecture, not intelligence.
            </p>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              The failure to handle human <strong>emotion, complexity, and compliance</strong>{" "}
              means 70% of high-value, high-stakes interactions—fraud alerts, medical triage,
              complex claims—remain bottlenecked by expensive, high-churn human labor.
            </p>
            <p className="text-lg font-bold text-destructive sm:text-xl">
              Result: High cost, low CSAT, zero competitive advantage.
            </p>
          </div>

          {/* Canvas Animation */}
          <div className="order-1 lg:order-2">
            <canvas
              ref={canvasRef}
              className="h-80 w-full rounded-lg border border-border bg-card shadow-2xl sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
