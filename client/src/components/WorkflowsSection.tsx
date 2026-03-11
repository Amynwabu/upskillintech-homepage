/**
 * WorkflowsSection — UpskillinTech v2
 * White bg, workflow diagram rows with yellow arrows and green nodes
 */
const workflows = [
  { steps: ["Meeting", "AI Summary", "Action Plan"] },
  { steps: ["Research", "AI Insights", "Report"] },
  { steps: ["Idea", "AI Draft", "Final Content"] },
  { steps: ["Strategy", "AI Analysis", "Decision"] },
];

export default function WorkflowsSection() {
  return (
    <section className="py-20" style={{ background: "#F7F8FA" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
            How Professionals Use AI
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
            Real AI workflows used in professional environments — ready to adapt and implement today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {workflows.map((wf, wi) => (
            <div
              key={wi}
              className="rounded-xl p-6"
              style={{ background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                {wf.steps.map((step, si) => (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                      style={{ background: "#38B54A", fontFamily: "'Poppins', sans-serif" }}
                    >
                      {step}
                    </div>
                    {si < wf.steps.length - 1 && (
                      <span style={{ color: "#E6B800", fontWeight: 700, fontSize: "1.3rem" }}>→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
