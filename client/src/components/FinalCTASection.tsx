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
    <section id="final-cta" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#F7F8FA" }}>


      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(56,181,74,0.12)", border: "1px solid rgba(56,181,74,0.3)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#38B54A" }} />
            <span className="text-sm font-semibold" style={{ color: "#38B54A", fontFamily: "'Poppins', sans-serif" }}>
              Next Cohort Enrolling Now
            </span>
          </div>

          <h2 className="mb-6" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1C1C1C", lineHeight: 1.15 }}>
            Start Your Journey to Becoming an{" "}
            <span style={{ color: "#38B54A" }}>
              AI-Enabled Professional
            </span>
          </h2>

          <p className="text-xl mb-10" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Join the next cohort and begin integrating AI into your daily work. Save hours every week, stay ahead, and transform how you work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#programs" className="btn-primary flex items-center gap-2" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Explore Programs <ArrowRight size={16} />
            </a>
            <a href="#community" className="btn-outline flex items-center gap-2" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Join Community
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              "No prior AI experience needed",
              "Practical from day one",
              "Join 1,000+ professionals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
                <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(56,181,74,0.15)" }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="#38B54A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
