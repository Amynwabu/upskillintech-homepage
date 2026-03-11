/**
 * FinalCTASection — "Start Your Journey to Becoming an AI-Enabled Professional"
 * Design: Bold teal-to-green gradient background, dual CTAs
 */

import { useRef, useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";

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

export default function FinalCTASection() {
  const { ref, inView } = useInView();

  return (
    <section id="final-cta" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A 0%, #0D2D2D 50%, #0F172A 100%)" }}>
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(13,148,136,0.15), transparent)", transform: "translateY(-50%)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(22,163,74,0.12), transparent)", transform: "translateY(50%)" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.3)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#0D9488" }} />
            <span className="text-sm font-semibold" style={{ color: "#0D9488", fontFamily: "'Sora', sans-serif" }}>
              Next Cohort Enrolling Now
            </span>
          </div>

          <h2 className="mb-6" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15 }}>
            Start Your Journey to Becoming an{" "}
            <span style={{ background: "linear-gradient(135deg, #0D9488, #16A34A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI-Enabled Professional
            </span>
          </h2>

          <p className="text-xl mb-10" style={{ color: "#94A3B8", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Join the next cohort and begin integrating AI into your daily work. Save hours every week, stay ahead, and transform how you work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#programs" className="btn-amber flex items-center gap-2" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Join the Program <ArrowRight size={16} />
            </a>
            <a href="#lead-magnet" className="btn-outline-white flex items-center gap-2" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              <Download size={16} />
              Download Free Guide
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              "No prior AI experience needed",
              "Practical from day one",
              "Join 1,000+ professionals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#64748B", fontFamily: "'DM Sans', sans-serif" }}>
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(13,148,136,0.2)" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
