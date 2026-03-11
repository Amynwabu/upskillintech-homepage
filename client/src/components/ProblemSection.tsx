/**
 * ProblemSection — UpskillinTech v2
 * White background, 4 icon cards, green + yellow icon accents
 */
import { Settings, GitBranch, FlaskConical, TrendingDown } from "lucide-react";

const problems = [
  { icon: Settings, color: "#38B54A", title: "Too Many Tools", desc: "Thousands of AI tools but no clear starting point." },
  { icon: GitBranch, color: "#E6B800", title: "No Clear Workflow", desc: "People experiment without structured systems." },
  { icon: FlaskConical, color: "#38B54A", title: "Random Experimentation", desc: "AI becomes trial-and-error instead of productivity." },
  { icon: TrendingDown, color: "#E6B800", title: "No Real Productivity Gains", desc: "AI should save time, not create confusion." },
];

export default function ProblemSection() {
  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
            Why Most Professionals Struggle With AI
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
            We don't just teach AI tools. We help you integrate AI into real work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl p-6 text-center transition-all duration-200"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(56,181,74,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${p.color}18` }}>
                  <Icon size={28} style={{ color: p.color }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a href="#programs" className="btn-primary">Explore Programs</a>
        </div>
      </div>
    </section>
  );
}
