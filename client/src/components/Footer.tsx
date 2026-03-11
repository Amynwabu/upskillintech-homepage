/**
 * Footer — Navigation, social links, copyright
 * Design: Dark slate background, teal accent links
 */

import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  Programs: [
    { label: "AI-Enabled Professional", href: "#programs" },
    { label: "AI for Business", href: "#programs" },
    { label: "AI for Education", href: "#programs" },
    { label: "Enterprise Training", href: "#audience" },
  ],
  Community: [
    { label: "Join Community", href: "#ecosystem" },
    { label: "Events & Webinars", href: "#ecosystem" },
    { label: "AI Masterclasses", href: "#ecosystem" },
    { label: "Peer Network", href: "#ecosystem" },
  ],
  Resources: [
    { label: "Free AI Guide", href: "#lead-magnet" },
    { label: "AI Workflow Templates", href: "#lead-magnet" },
    { label: "Blog & Insights", href: "#" },
    { label: "Research", href: "#" },
  ],
  About: [
    { label: "About UpskillinTech", href: "#footer" },
    { label: "Our Approach", href: "#solution" },
    { label: "Contact Us", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#0A0F1A" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
        {/* Top: Logo + Description + Social */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/upskillintech-logo-official_bc57cbb5.png"
                alt="UpskillinTech"
                className="h-10 w-auto object-contain"
                style={{ height: "80px", maxWidth: "240px", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#64748B", fontFamily: "'DM Sans', sans-serif" }}>
              Helping professionals become AI-enabled. Not just AI-aware — AI productive and AI transformed.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#64748B" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0D9488"; (e.currentTarget as HTMLElement).style.background = "rgba(13,148,136,0.15)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748B"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm mb-4" style={{ fontFamily: "'Sora', sans-serif", color: "white" }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#64748B", fontFamily: "'DM Sans', sans-serif" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0D9488"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748B"; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-sm" style={{ color: "#334155", fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} UpskillinTech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "#334155", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0D9488"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#334155"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
