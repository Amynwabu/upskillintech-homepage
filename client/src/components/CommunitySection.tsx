/**
 * CommunitySection — UpskillinTech v2
 * Soft yellow gradient background #FFF7D6, community benefits list
 */
import { CheckCircle } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/community-networking-foQRzPoSFZJMPVfXMtbbZA.webp";

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

          {/* Right: Community photo */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ maxWidth: 480, width: "100%", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
            >
              <img src={COMMUNITY_IMG} alt="Diverse professionals at a community networking event" className="w-full h-auto" style={{ display: "block" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
