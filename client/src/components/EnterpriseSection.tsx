/**
 * EnterpriseSection — UpskillinTech v2
 * Light gray background, split layout: text left, illustration right
 */
import { CheckCircle } from "lucide-react";

const ENTERPRISE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/enterprise-team-v2-aZoXmPod4boNqVvUisQdn4.webp";

const benefits = [
  "Train teams in AI productivity",
  "Design AI workflows",
  "Develop AI strategy",
];

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-20" style={{ background: "#F7F8FA" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-3">Enterprise Solutions</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
              AI Transformation for Organizations
            </h2>
            <p className="text-lg mb-6" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
              UpskillinTech helps organizations:
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: "#38B54A", flexShrink: 0 }} />
                  <span style={{ color: "#1C1C1C", fontFamily: "'Inter', sans-serif" }}>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#programs" className="btn-primary">Enterprise Solutions</a>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ maxWidth: 480, width: "100%", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
            >
              <img src={ENTERPRISE_IMG} alt="Team using AI dashboard" className="w-full h-auto" style={{ display: "block" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
