/**
 * NewsletterSection — UpskillinTech v2
 * Green gradient background (same as hero), white text, name + email + subscribe
 */
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're subscribed! Check your inbox for a confirmation.");
    setName("");
    setEmail("");
  };

  return (
    <section id="lead-magnet" className="py-20" style={{ background: "linear-gradient(135deg, #38B54A 0%, #0B5E34 100%)" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Stay Ahead in the AI Era
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.88)", fontFamily: "'Inter', sans-serif" }}>
            Subscribe to the UpskillinTech newsletter for AI insights, workflows, and strategies.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 rounded-lg px-4 py-3 text-sm outline-none"
              style={{ fontFamily: "'Inter', sans-serif", border: "none", color: "#1C1C1C" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg px-4 py-3 text-sm outline-none"
              style={{ fontFamily: "'Inter', sans-serif", border: "none", color: "#1C1C1C" }}
            />
            <button type="submit" className="btn-yellow shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
