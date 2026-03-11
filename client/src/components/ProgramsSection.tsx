/**
 * ProgramsSection — UpskillinTech v2
 * White cards, rounded corners, soft shadow, green top border, hover lift
 */
import { Briefcase, BookOpen, Users, Zap } from "lucide-react";

const programs = [
  { icon: Briefcase, title: "AI-Enabled Professional", desc: "Use AI in your daily work.", color: "#38B54A" },
  { icon: BookOpen, title: "AI Foundations", desc: "Start your AI journey.", color: "#0B5E34" },
  { icon: Users, title: "AI Leadership", desc: "AI for educators, pastors, and leaders.", color: "#38B54A" },
  { icon: Zap, title: "AI Automation & Workflows", desc: "Build AI-powered productivity systems.", color: "#E6B800" },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
            UpskillinTech Programs
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center gap-1 mb-4">
            <div style={{ width: 60, height: 4, background: "#38B54A", borderRadius: 2 }} />
            <div style={{ width: 30, height: 4, background: "#E6B800", borderRadius: 2 }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl p-6 transition-all duration-200"
                style={{
                  background: "#ffffff",
                  border: "1px solid #E5E7EB",
                  borderTop: `3px solid ${p.color}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(56,181,74,0.18)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${p.color}15` }}>
                  <Icon size={24} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C", fontSize: "1rem" }}>{p.title}</h3>
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
