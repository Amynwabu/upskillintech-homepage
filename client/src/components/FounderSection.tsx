/**
 * FounderSection — UpskillinTech v2
 * White background, split layout: photo left, bio right
 */
export default function FounderSection() {
  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Photo placeholder */}
          <div className="flex justify-center">
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ width: 280, height: 320, background: "linear-gradient(135deg, #38B54A18, #0B5E3418)", border: "2px solid #38B54A30" }}
            >
              <div className="text-center px-6">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ background: "linear-gradient(135deg, #38B54A, #0B5E34)", fontFamily: "'Poppins', sans-serif" }}
                >
                  DA
                </div>
                <div className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>Dr. Amaka Adiuku</div>
                <div className="text-sm mt-1" style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>Founder, UpskillinTech</div>
              </div>
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
              AI Researcher | Robotics Specialist | Educator
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
