/**
 * Navbar — UpskillinTech v2
 * Design: White bg, #1C1C1C nav text, #38B54A CTA button (hover #0B5E34)
 * Font: Poppins
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/upskillintech-logo-transparent-cropped-BzNYJKBMWcXVCyFbBhJqhL.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "#programs" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#footer" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 #E5E7EB" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="UpskillinTech"
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#1C1C1C",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38B54A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1C1C1C")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a href="#programs" className="btn-primary text-sm px-5 py-2.5">
              Join Program
            </a>
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
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-2"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#1C1C1C", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#programs" className="btn-primary text-sm mt-2" onClick={() => setMenuOpen(false)}>
              Join Program
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
