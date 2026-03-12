/**
 * FounderSection — UpskillinTech v2
 * White background, split layout: photo left, bio right
 */
const FOUNDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/founder-portrait-g2gj6Gs4zs3JeXJbWqWTy7.webp";

export default function FounderSection() {
  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Founder photo */}
          <div className="flex justify-center">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ maxWidth: 320, width: "100%", boxShadow: "0 16px 48px rgba(56,181,74,0.18)", border: "3px solid #E6B80040" }}
            >
              <img src={FOUNDER_IMG} alt="Dr. Amaka Adiuku, Founder of UpskillinTech" className="w-full h-auto" style={{ display: "block" }} />
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <div className="section-label mb-3">About the Founder</div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>
              Built on Real AI Expertise
            </h2>
            <p className="text-base mb-2 font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: "#38B54A" }}>
              Dr. Amaka Adiuku
            </p>
            <p className="text-sm mb-4" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
              Lecturer in AI | Robotics Researcher | Educator
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#4B5563", fontFamily: "'Inter', sans-serif" }}>
              UpskillinTech combines AI research, industry collaboration, and practical workflow innovation to help professionals, organizations, and communities thrive in an AI-powered world.
            </p>
            <a href="#footer" className="btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
