/**
 * HeroSection — First screen, communicates core transformation
 * Design: Asymmetric split layout — text left, image right
 * Colors: Dark slate headline, teal/green gradient CTA, amber secondary CTA
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
// CountUp uses useRef, useEffect, useState above

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/hero-ai-professional-mKPvphmMybyv8Wk5DBvr6h.webp";

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;
          const tick = (now: number) => {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #F0FDFA 0%, #F8FAFC 50%, #ECFDF5 100%)", paddingTop: "4.5rem" }}>
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #0D9488, transparent)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 pointer-events-none" style={{ background: "radial-gradient(circle, #16A34A, transparent)", transform: "translate(-30%, 30%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold" style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488", fontFamily: "'Sora', sans-serif", letterSpacing: "0.05em" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              AI-Enabled Professional Program
            </div>

            {/* Headline */}
            <h1 className="mb-6 leading-tight" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#0F172A", lineHeight: 1.15 }}>
              Become an{" "}
              <span style={{ background: "linear-gradient(135deg, #0D9488, #16A34A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AI-Enabled
              </span>{" "}
              Professional
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#475569", fontFamily: "'DM Sans', sans-serif", maxWidth: "520px" }}>
              Learn how to integrate AI into your daily work, decision-making, and workflows so you can{" "}
              <strong style={{ color: "#0F172A", fontWeight: 600 }}>save hours every week</strong>{" "}
              and stay ahead in an AI world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#programs" className="btn-amber flex items-center gap-2" style={{ fontSize: "0.95rem" }}>
                Join the AI-Enabled Professional Program
                <ArrowRight size={16} />
              </a>
              <a href="#lead-magnet" className="btn-outline-white flex items-center gap-2" style={{ color: "#0D9488", border: "2px solid #0D9488", background: "transparent", fontSize: "0.95rem" }}>
                <Download size={16} />
                Download Free AI Guide
              </a>
            </div>

            {/* Journey Progression */}
            <div className="flex items-center gap-2 flex-wrap">
              {["AI Awareness", "AI Productivity", "AI Workflow Integration"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ background: i === 2 ? "rgba(13,148,136,0.15)" : "rgba(13,148,136,0.08)", color: "#0D9488", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}>
                    {step}
                  </span>
                  {i < 2 && <ChevronRight size={14} style={{ color: "#94A3B8" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/11" }}>
              <img
                src={HERO_IMAGE}
                alt="AI-enabled professional at work"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.3) 0%, transparent 60%)" }} />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: "linear-gradient(135deg, #0D9488, #16A34A)" }}>
                <CountUp end={1000} suffix="+" />
              </div>
              <div>
                <div className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>Professionals</div>
                <div className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'Sora', sans-serif" }}>Trained</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3">
              <div className="text-xs text-slate-500 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Average time saved</div>
              <div className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif", color: "#0D9488" }}>
                <CountUp end={5} suffix="+ hrs" /><span className="text-sm text-slate-500 font-normal">/week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-slate-100" style={{ background: "white" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 1000, suffix: "+", label: "Professionals Trained" },
              { value: 95, suffix: "%", label: "Success Rate" },
              { value: 50, suffix: "+", label: "Business Partners" },
              { value: 10, suffix: "+", label: "Flagship Courses" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif", color: "#0D9488" }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
