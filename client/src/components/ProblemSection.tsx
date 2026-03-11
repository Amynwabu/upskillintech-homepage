/**
 * ProblemSection — "Why Most Professionals Struggle With AI"
 * Design: Light teal-tinted background, icon cards, empathy-focused copy
 */

import { useRef, useEffect, useState } from "react";
import { Layers, GitBranch, Shuffle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Too Many AI Tools",
    desc: "Overwhelmed by hundreds of AI tools with no clear starting point or strategy.",
    color: "#0D9488",
  },
  {
    icon: GitBranch,
    title: "No Clear Workflow",
    desc: "Using AI randomly without a structured system that fits your actual work.",
    color: "#16A34A",
  },
  {
    icon: Shuffle,
    title: "Random Experimentation",
    desc: "Trying different tools and prompts with no consistent results or methodology.",
    color: "#D97706",
  },
  {
    icon: TrendingDown,
    title: "No Real Productivity Gain",
    desc: "Spending more time learning AI than actually benefiting from it in your work.",
    color: "#DC2626",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 lg:py-28" style={{ background: "#F8FAFC" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="section-label mb-3">The Problem</div>
          <h2 className="mb-4" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#0F172A", lineHeight: 1.2 }}>
            Why Most Professionals{" "}
            <span style={{ color: "#DC2626" }}>Struggle With AI</span>
          </h2>
          <p className="text-lg" style={{ color: "#64748B", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
            Professionals know AI is important, but many struggle to apply it effectively in their daily work. Sound familiar?
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 card-teal-border ${inView ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  borderLeftColor: p.color,
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: `${p.color}15` }}>
                  <Icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold mb-2 text-slate-800" style={{ fontFamily: "'Sora', sans-serif", fontSize: "0.95rem" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6" style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.08), rgba(22,163,74,0.08))", border: "1px solid rgba(13,148,136,0.2)" }}>
          <div className="flex-1">
            <p className="text-lg font-medium text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
              <span className="font-bold text-slate-900">The truth is:</span> The problem isn't the tools — it's the lack of a{" "}
              <span style={{ color: "#0D9488", fontWeight: 700 }}>structured approach</span> to integrating AI into real work.
            </p>
          </div>
          <a href="#solution" className="btn-primary whitespace-nowrap" style={{ fontSize: "0.9rem" }}>
            See Our Solution →
          </a>
        </div>
      </div>
    </section>
  );
}
