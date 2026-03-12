/**
 * Navbar — UpskillinTech v2
 * Design: White bg, #1C1C1C nav text, #38B54A CTA button (hover #8B9E1A)
 * Font: Poppins
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, BookOpen, FileText, Briefcase, Video, Zap } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/upskillintech-logo-transparent-cropped-BzNYJKBMWcXVCyFbBhJqhL.webp";

const RESOURCE_LINKS = [
  { label: "Blog", desc: "Articles & insights", href: "/resources/blog", icon: <BookOpen size={16} style={{ color: "#38B54A" }} /> },
  { label: "AI Guides", desc: "Free downloadable guides", href: "/resources/ai-guides", icon: <FileText size={16} style={{ color: "#8B9E1A" }} /> },
  { label: "Case Studies", desc: "Real results & stories", href: "/resources/case-studies", icon: <Briefcase size={16} style={{ color: "#38B54A" }} /> },
  { label: "Webinars", desc: "Live & recorded sessions", href: "/resources/webinars", icon: <Video size={16} style={{ color: "#E6B800" }} /> },
  { label: "AI Workflows", desc: "Step-by-step templates", href: "/resources/workflows", icon: <Zap size={16} style={{ color: "#8B9E1A" }} /> },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/#programs" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Community", href: "/#community" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 #E5E7EB" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="UpskillinTech"
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#38B54A")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#1C1C1C")}
              >
                {link.label}
              </Link>
            ))}

            {/* Resources dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-150"
                style={{ fontFamily: "'Poppins', sans-serif", color: resourcesOpen ? "#38B54A" : "#1C1C1C", background: "none", border: "none" }}
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl overflow-hidden" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: "1px solid #E5E7EB" }}>
                  <div className="p-2">
                    <Link href="/resources" className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 text-sm font-bold" style={{ background: "linear-gradient(135deg, #38B54A12, #E6B80012)", color: "#38B54A", fontFamily: "'Poppins', sans-serif" }} onClick={() => setResourcesOpen(false)}>
                      All Resources →
                    </Link>
                    {RESOURCE_LINKS.map((r) => (
                      <Link
                        key={r.label}
                        href={r.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                        style={{ textDecoration: "none" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#F7F8FA")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                        onClick={() => setResourcesOpen(false)}
                      >
                        <div className="rounded-lg p-1.5" style={{ background: "#F0FDF4" }}>{r.icon}</div>
                        <div>
                          <div className="text-sm font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C" }}>{r.label}</div>
                          <div className="text-xs" style={{ color: "#9CA3AF" }}>{r.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/#programs" className="btn-primary text-sm px-5 py-2.5">
              Join Program
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "#1C1C1C" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "#E5E7EB" }}>
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-2.5 px-2 rounded-lg"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Resources section in mobile */}
            <div className="mt-1 mb-1">
              <p className="text-xs font-bold uppercase tracking-wider px-2 py-1" style={{ color: "#9CA3AF" }}>Resources</p>
              <Link href="/resources" className="text-sm font-semibold py-2 px-2 block rounded-lg" style={{ color: "#38B54A", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                All Resources
              </Link>
              {RESOURCE_LINKS.map((r) => (
                <Link key={r.label} href={r.href} className="flex items-center gap-2 text-sm py-2 px-2 rounded-lg" style={{ color: "#1C1C1C", textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                  {r.icon} {r.label}
                </Link>
              ))}
            </div>
            <Link href="/#programs" className="btn-primary text-sm mt-2 text-center" onClick={() => setMenuOpen(false)}>
              Join Program
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
