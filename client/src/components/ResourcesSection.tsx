/**
 * ResourcesSection — UpskillinTech v2
 * White bg, 4 content cards with deep green (#0B5E34) accent
 */
import { BookOpen, FileText, BarChart2, Video } from "lucide-react";

const resources = [
  { icon: BookOpen, title: "Blog", desc: "AI insights and practical strategies.", color: "#0B5E34" },
  { icon: FileText, title: "AI Guides", desc: "Deep learning resources.", color: "#38B54A" },
  { icon: BarChart2, title: "Case Studies", desc: "Real-world AI adoption stories.", color: "#0B5E34" },
  { icon: Video, title: "Webinars", desc: "Live sessions and training.", color: "#38B54A" },
];

export default function ResourcesSection() {
  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
            UpskillinTech Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-xl p-6 transition-all duration-200"
                style={{ background: "#ffffff", border: "1px solid #E5E7EB", borderLeft: `4px solid ${r.color}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(11,94,52,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${r.color}15` }}>
                  <Icon size={22} style={{ color: r.color }} />
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>{r.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a href="/resources" className="btn-primary">Explore Resources</a>
        </div>
      </div>
    </section>
  );
}
