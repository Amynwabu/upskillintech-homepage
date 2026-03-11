/**
 * HeroSection — UpskillinTech v2
 * Background: linear-gradient #38B54A → #8B9E1A
 * Text: White | Primary CTA: white bg + green text | Secondary: outline white
 * Font: Poppins headings, Inter body
 */
import { ArrowRight, Download } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/hero-ai-illustration-v2-DTWbSY6GVJAfpr9jDrwUUR.webp";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #38B54A 0%, #6B9E2A 50%, #8B9E1A 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-[-80px] right-[-80px] rounded-full pointer-events-none"
        style={{ width: 400, height: 400, background: "rgba(230,184,0,0.12)" }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] rounded-full pointer-events-none"
        style={{ width: 280, height: 280, background: "rgba(255,255,255,0.07)" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Left: Copy */}
          <div className="animate-fade-up">
            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", color: "#ffffff" }}
            >
              Become an AI-Enabled Professional
            </h1>
            <p className="text-lg mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.90)", fontFamily: "'Inter', sans-serif" }}>
              Learn how to integrate AI into your daily work, decision-making, and workflows.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.90)", fontFamily: "'Inter', sans-serif" }}>
              Save hours every week and stay ahead in an AI-powered world.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#programs" className="btn-primary-white">
                <ArrowRight size={18} />
                Join the AI-Enabled Professional Program
              </a>
              <a href="#lead-magnet" className="btn-outline-white">
                <Download size={18} />
                Download Free AI Productivity Guide
              </a>
            </div>

            {/* Progress breadcrumb */}
            <div className="flex items-center gap-3 flex-wrap">
              {["AI Curiosity", "AI Confidence", "AI Productivity"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      background: "rgba(255,255,255,0.18)",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.35)",
                    }}
                  >
                    {step}
                  </span>
                  {i < 2 && (
                    <span style={{ color: "#E6B800", fontWeight: 700, fontSize: "1.1rem" }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-up-delay-2">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 64px rgba(0,0,0,0.30)",
                maxWidth: 520,
                width: "100%",
              }}
            >
              <img
                src={HERO_IMG}
                alt="AI workflow illustration with diverse professionals"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl px-4 py-2"
                style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
              >
                <span style={{ fontSize: "1.4rem" }}>🚀</span>
                <div>
                  <div className="text-xs font-bold" style={{ color: "#38B54A", fontFamily: "'Poppins', sans-serif" }}>
                    1,000+ Professionals
                  </div>
                  <div className="text-xs" style={{ color: "#6B7280" }}>Already AI-Enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: "linear-gradient(90deg, #8B9E1A 0%, #E6B800 100%)", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="container py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "1,000+", label: "Professionals Trained" },
              { value: "95%", label: "Success Rate" },
              { value: "50+", label: "Business Partners" },
              { value: "10+", label: "Flagship Courses" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.70)", fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
