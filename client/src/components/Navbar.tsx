/**
 * Navbar — Sticky top navigation
 * Design: Clean white with teal accent, amber CTA button
 * Scrolls: adds shadow on scroll
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Programs", href: "#programs" },
  { label: "Enterprise", href: "#audience" },
  { label: "Community", href: "#ecosystem" },
  { label: "Resources", href: "#lead-magnet" },
  { label: "About", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/93064684/acUjws9faR2fssir6ETEdK/upskillintech-logo-transparent-cropped_42de089d.png"
              alt="UpskillinTech"
              className="w-auto object-contain"
              style={{ height: "56px", maxWidth: "180px" }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#programs"
              className="btn-amber text-sm"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
            >
              Join Program
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-teal-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-teal-600 py-2 border-b border-slate-50"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a href="#programs" className="btn-amber text-sm mt-2 justify-center" onClick={() => setMobileOpen(false)}>
              Join Program
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
