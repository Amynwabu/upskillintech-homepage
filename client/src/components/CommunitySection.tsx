/**
 * CommunitySection — UpskillinTech v2
 * Soft yellow gradient background #FFF7D6, community benefits list
 */
import { CheckCircle } from "lucide-react";

const benefits = ["Monthly masterclasses", "Workflow sharing", "Networking", "Events"];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20" style={{ background: "#FFF7D6" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-3">Community</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
              Join the UpskillinTech Community
            </h2>
            <p className="text-lg mb-6" style={{ color: "#4B5563", fontFamily: "'Inter', sans-serif" }}>
              Learn, share workflows, and collaborate with professionals exploring AI.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle size={20} style={{ color: "#38B54A", flexShrink: 0 }} />
                  <span style={{ color: "#1C1C1C", fontFamily: "'Inter', sans-serif" }}>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#community" className="btn-primary">Join Community</a>
          </div>

          {/* Right: Stats / highlight box */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "linear-gradient(135deg, #8B9E1A 0%, #E6B800 100%)", boxShadow: "0 16px 48px rgba(139,158,26,0.30)" }}
          >
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
              Stay Ahead in the AI Era
            </h3>
            <p className="mb-6" style={{ color: "rgba(0,0,0,0.70)", fontFamily: "'Inter', sans-serif" }}>
              Subscribe to the UpskillinTech newsletter for AI insights, workflows, and strategies.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg px-4 py-3 text-sm outline-none"
                style={{ fontFamily: "'Inter', sans-serif", border: "none", color: "#1C1C1C" }}
              />
              <button
                className="btn-yellow shrink-0"
                style={{ padding: "0.75rem 1.25rem" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
