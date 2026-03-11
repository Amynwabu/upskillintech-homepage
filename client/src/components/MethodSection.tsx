/**
 * MethodSection — UpskillinTech v2
 * Light background, yellow arrow progress system, 4 stages
 */
const steps = [
  { label: "AI Curiosity", desc: "Understand what AI is and how it applies to your work." },
  { label: "AI Confidence", desc: "Build practical skills using AI tools in real scenarios." },
  { label: "AI Productivity", desc: "Integrate AI into daily workflows to save hours every week." },
  { label: "AI Transformation", desc: "Lead AI adoption in your team, organization, or community." },
];

export default function MethodSection() {
  return (
    <section className="py-20" style={{ background: "#F7F8FA" }}>
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
            The UpskillinTech Method
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
            We don't just teach AI tools.{" "}
            <span style={{ color: "#38B54A", fontWeight: 600 }}>We help you integrate AI into real work.</span>
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden lg:flex items-start gap-0 justify-center mb-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-start">
              <div className="flex flex-col items-center" style={{ width: 200 }}>
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3"
                  style={{ background: i === 0 ? "#38B54A" : i === 1 ? "#6B9E2A" : i === 2 ? "#8B9E1A" : "#E6B800", color: i === 3 ? "#1C1C1C" : "#ffffff", fontFamily: "'Poppins', sans-serif", boxShadow: i === 3 ? "0 4px 16px rgba(230,184,0,0.35)" : "0 4px 16px rgba(56,181,74,0.3)" }}
                >
                  {i + 1}
                </div>
                <div className="text-center px-2">
                  <div className="font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C", fontSize: "0.95rem" }}>{step.label}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>{step.desc}</div>
                </div>
              </div>
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex items-center mt-6 mx-1" style={{ color: "#E6B800", fontSize: "1.8rem", fontWeight: 700 }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden flex flex-col gap-0 max-w-sm mx-auto">
          {steps.map((step, i) => (
            <div key={step.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: "#38B54A", fontFamily: "'Poppins', sans-serif" }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 2, flex: 1, background: "#E6B800", minHeight: 32, margin: "4px 0" }} />
                )}
              </div>
              <div className="pb-8">
                <div className="font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>{step.label}</div>
                <div className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
