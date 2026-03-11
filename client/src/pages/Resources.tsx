/**
 * Resources Page — UpskillinTech
 * Design: Modern Professional — teal/green/amber palette, Sora + DM Sans
 * 10 sections matching the wireframe blueprint
 */

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen, Download, ArrowRight, Search, Play, Calendar,
  Users, Building2, Church, Zap, FileText, Workflow,
  BarChart3, Lightbulb, Target, ChevronRight, Star,
  Clock, Tag, ExternalLink, Mail, CheckCircle2, Video,
  BrainCircuit, Layers, TrendingUp, MessageSquare
} from "lucide-react";

/* ─── Animated counter ─── */
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const duration = 1800;
      const step = Math.ceil(end / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else setCount(start);
      }, 16);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Section label ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />
      <span className="text-xs font-semibold tracking-widest uppercase text-teal-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {text}
      </span>
    </div>
  );
}

/* ─── 1. HERO ─── */
function ResourcesHero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 40%, #f0fdfa 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #0D9488, transparent)" }} />
        <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #16A34A, transparent)" }} />
        {/* Floating icons */}
        {[
          { icon: BookOpen, top: "15%", left: "8%", delay: "0s" },
          { icon: BrainCircuit, top: "25%", right: "12%", delay: "0.4s" },
          { icon: Workflow, bottom: "30%", left: "5%", delay: "0.8s" },
          { icon: BarChart3, top: "60%", right: "8%", delay: "1.2s" },
        ].map(({ icon: Icon, delay, ...pos }, i) => (
          <div key={i} className="absolute w-10 h-10 rounded-xl flex items-center justify-center opacity-20"
            style={{ ...pos as any, background: "linear-gradient(135deg, #0D9488, #16A34A)", animationDelay: delay, animation: "float 4s ease-in-out infinite" }}>
            <Icon size={18} color="white" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <SectionLabel text="Resources" />
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Insights, Guides, and{" "}
              <span style={{ color: "#0D9488" }}>Practical Tools</span>{" "}
              for the AI-Enabled World
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Explore articles, guides, workflows, and case studies that help professionals, leaders, and organizations integrate AI into real work and decision-making.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#ai-guides" className="btn-primary flex items-center gap-2">
                Explore AI Guides <ArrowRight size={16} />
              </a>
              <a href="#community" className="btn-outline flex items-center gap-2">
                <Users size={16} /> Join Community
              </a>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FileText, value: 50, suffix: "+", label: "AI Guides & Articles", color: "#0D9488" },
              { icon: Workflow, value: 20, suffix: "+", label: "Workflow Templates", color: "#16A34A" },
              { icon: Video, value: 15, suffix: "+", label: "Webinar Recordings", color: "#D97706" },
              { icon: Users, value: 1000, suffix: "+", label: "Community Members", color: "#7C3AED" },
            ].map(({ icon: Icon, value, suffix, label, color }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}15` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. FEATURED RESOURCES ─── */
function FeaturedResources() {
  const resources = [
    {
      icon: BookOpen,
      tag: "Guide",
      tagColor: "#0D9488",
      title: "AI Productivity Guide",
      desc: "Learn how professionals save hours every week using AI workflows. A step-by-step framework for integrating AI into daily work.",
      cta: "Read Guide",
      ctaStyle: "btn-primary",
      badge: "Most Popular",
      badgeColor: "#D97706",
    },
    {
      icon: MessageSquare,
      tag: "Library",
      tagColor: "#16A34A",
      title: "50 AI Prompts Library",
      desc: "Curated prompts for research, writing, strategy, and decision-making. Ready to use in ChatGPT, Claude, and other AI tools.",
      cta: "Download Free",
      ctaStyle: "btn-amber",
      badge: "Free Download",
      badgeColor: "#16A34A",
    },
    {
      icon: Workflow,
      tag: "Playbook",
      tagColor: "#7C3AED",
      title: "AI Workflow Playbook",
      desc: "Real-world examples of AI productivity systems used by professionals across industries. Includes templates and step-by-step guides.",
      cta: "Explore Playbook",
      ctaStyle: "btn-outline",
      badge: "New",
      badgeColor: "#7C3AED",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel text="Featured Resources" />
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Start With Our Best Resources
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Hand-picked guides and tools that professionals use most to integrate AI into their daily work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map(({ icon: Icon, tag, tagColor, title, desc, cta, ctaStyle, badge, badgeColor }) => (
            <div key={title} className="relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col group">
              {/* Badge */}
              <div className="absolute -top-3 left-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: badgeColor, fontFamily: "'DM Sans', sans-serif" }}>
                  {badge}
                </span>
              </div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mt-2" style={{ background: `${tagColor}15` }}>
                <Icon size={24} style={{ color: tagColor }} />
              </div>
              {/* Tag */}
              <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: tagColor, fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              <a href="#lead-magnet" className={`${ctaStyle} flex items-center gap-2 justify-center text-sm`}>
                {cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 3. BLOG CATEGORIES ─── */
function BlogSection() {
  const categories = [
    { icon: Zap, color: "#0D9488", title: "AI Productivity", desc: "Learn how AI improves efficiency and saves time across different professional roles.", count: 12 },
    { icon: Workflow, color: "#16A34A", title: "AI Workflows", desc: "Discover structured AI-powered workflows for real-world professional use cases.", count: 8 },
    { icon: Layers, color: "#D97706", title: "AI Tools", desc: "Explore tools that improve productivity and decision-making in your daily work.", count: 15 },
    { icon: Target, color: "#7C3AED", title: "AI Leadership", desc: "Understand how leaders use AI to support communication and strategic decisions.", count: 6 },
    { icon: TrendingUp, color: "#0EA5E9", title: "AI Strategy", desc: "Explore the future of AI and organizational transformation across industries.", count: 9 },
  ];

  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <SectionLabel text="Blog" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Explore Practical Insights
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Practical insights on how AI is transforming work, leadership, and innovation.
            </p>
          </div>
          <a href="#" className="btn-outline flex items-center gap-2 self-start lg:self-auto whitespace-nowrap">
            View All Articles <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, color, title, desc, count }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${color}12` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: `${color}12`, color, fontFamily: "'DM Sans', sans-serif" }}>
                  {count} articles
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color }}>
                View Articles <ChevronRight size={14} />
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #0D9488, #16A34A)" }}>
            <div>
              <BookOpen size={28} color="white" className="mb-4 opacity-80" />
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Want to contribute?</h3>
              <p className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Share your AI productivity story with our community of professionals.
              </p>
            </div>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors">
              Submit Article <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. AI GUIDES ─── */
function AIGuidesSection() {
  const guides = [
    {
      icon: MessageSquare,
      color: "#0D9488",
      title: "AI Prompts Library",
      desc: "Curated prompts for real-world use cases — research, writing, strategy, and decision-making. 50+ ready-to-use prompts.",
      cta: "Explore Library",
      tags: ["ChatGPT", "Claude", "Gemini"],
    },
    {
      icon: Zap,
      color: "#16A34A",
      title: "AI Productivity Guide",
      desc: "Frameworks for integrating AI into daily workflows. Step-by-step guide to saving 5+ hours every week with AI.",
      cta: "Download Guide",
      tags: ["Productivity", "Workflows", "Time-saving"],
    },
    {
      icon: Layers,
      color: "#D97706",
      title: "AI Tools Guide",
      desc: "A curated overview of the most useful AI tools for professionals. Includes ratings, use cases, and getting-started tips.",
      cta: "Read Guide",
      tags: ["Tools", "Comparison", "Reviews"],
    },
  ];

  return (
    <section id="ai-guides" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Intro */}
          <div className="lg:sticky lg:top-24">
            <SectionLabel text="AI Guides" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              Structured Learning{" "}
              <span style={{ color: "#0D9488" }}>Materials</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Practical guides designed to help individuals and organizations integrate AI into everyday activities — from prompting to full workflow automation.
            </p>
            {/* Lead capture mini-form */}
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={18} className="text-teal-600" />
                <span className="text-sm font-semibold text-teal-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>Get All Guides Free</span>
              </div>
              <p className="text-xs text-slate-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Enter your email to receive all AI guides in one bundle.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-sm px-3 py-2 rounded-lg border border-teal-200 focus:outline-none focus:border-teal-400 bg-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                <button className="btn-primary text-sm px-4">Send</button>
              </div>
            </div>
          </div>

          {/* Right: Guide cards */}
          <div className="flex flex-col gap-5">
            {guides.map(({ icon: Icon, color, title, desc, cta, tags }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                      ))}
                    </div>
                    <a href="#lead-magnet" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color }}>
                      {cta} <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. CASE STUDIES ─── */
function CaseStudiesSection() {
  const cases = [
    {
      icon: Users,
      color: "#0D9488",
      audience: "Professional Use Cases",
      title: "How a Consultant Saved 8 Hours/Week with AI",
      desc: "Examples of individuals integrating AI into their work — from research automation to client reporting and communication.",
      stats: [{ label: "Hours saved/week", value: "8+" }, { label: "Tasks automated", value: "12" }],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop",
    },
    {
      icon: Building2,
      color: "#16A34A",
      audience: "Organizational AI Adoption",
      title: "How a Team of 50 Implemented AI Productivity Systems",
      desc: "How teams implement AI productivity systems — from strategy to execution, including change management and training.",
      stats: [{ label: "Productivity increase", value: "40%" }, { label: "Team members trained", value: "50" }],
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
    },
    {
      icon: Church,
      color: "#D97706",
      audience: "Ministry AI Applications",
      title: "How a Church Used AI for Administration & Outreach",
      desc: "Using AI to support teaching, communication, and administration — practical examples from faith communities.",
      stats: [{ label: "Admin time saved", value: "60%" }, { label: "Reach increased", value: "3x" }],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
            <span className="text-xs font-semibold tracking-widest uppercase text-teal-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>Case Studies</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Real-World AI Impact
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Real examples of how professionals, organizations, and ministries use AI to improve productivity and deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ icon: Icon, color, audience, title, desc, stats, image }) => (
            <div key={title} className="rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-300 group" style={{ background: "rgba(255,255,255,0.04)" }}>
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.8), transparent)" }} />
                <div className="absolute bottom-3 left-4">
                  <div className="flex items-center gap-1.5">
                    <Icon size={14} style={{ color }} />
                    <span className="text-xs font-semibold" style={{ color, fontFamily: "'DM Sans', sans-serif" }}>{audience}</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-bold text-white mb-2 leading-snug" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  {stats.map(({ label, value }) => (
                    <div key={label}>
                      <div className="text-lg font-bold" style={{ color, fontFamily: "'Sora', sans-serif" }}>{value}</div>
                      <div className="text-xs text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
                    </div>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                  View Case Study <ChevronRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. WEBINARS ─── */
function WebinarsSection() {
  const webinars = [
    {
      type: "Past",
      icon: Play,
      color: "#0D9488",
      title: "How to Build Your First AI Workflow",
      date: "Feb 14, 2026",
      duration: "58 min",
      attendees: "320+",
    },
    {
      type: "Past",
      icon: Play,
      color: "#0D9488",
      title: "AI Tools for Business Leaders",
      date: "Jan 22, 2026",
      duration: "45 min",
      attendees: "280+",
    },
    {
      type: "Upcoming",
      icon: Calendar,
      color: "#D97706",
      title: "AI Prompts Masterclass: Research & Strategy",
      date: "Mar 25, 2026",
      duration: "60 min",
      attendees: "Register",
    },
    {
      type: "Upcoming",
      icon: Calendar,
      color: "#D97706",
      title: "AI for Nonprofit & Ministry Leaders",
      date: "Apr 8, 2026",
      duration: "45 min",
      attendees: "Register",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <SectionLabel text="Webinars" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>
              Learn From Live Sessions
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Live and recorded sessions exploring practical AI applications for professionals and organizations.
            </p>
          </div>
          <a href="#" className="btn-amber flex items-center gap-2 self-start lg:self-auto whitespace-nowrap">
            <Calendar size={16} /> Register for Next Webinar
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {webinars.map(({ type, icon: Icon, color, title, date, duration, attendees }) => (
            <div key={title} className="rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 p-5 group cursor-pointer">
              {/* Type badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${color}15`, color, fontFamily: "'DM Sans', sans-serif" }}>
                  {type === "Past" ? "Recording" : "Upcoming"}
                </span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
                  <Icon size={14} style={{ color }} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 leading-snug" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar size={11} /> {date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={11} /> {duration}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Users size={11} /> {attendees} {type === "Past" ? "attended" : ""}
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color }}>
                {type === "Past" ? "Watch Now" : "Register Free"} <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. AI WORKFLOW LIBRARY ─── */
function WorkflowLibrary() {
  const workflows = [
    {
      icon: BrainCircuit,
      color: "#0D9488",
      title: "Project Management",
      steps: ["Meeting", "AI Summary", "Action Items", "Follow-up"],
      saves: "2 hrs/week",
      desc: "Transform every meeting into structured, actionable outcomes automatically.",
    },
    {
      icon: Search,
      color: "#16A34A",
      title: "Research Workflows",
      steps: ["Research Question", "AI Insights", "Structured Report"],
      saves: "3 hrs/week",
      desc: "Go from a research question to a polished structured report in minutes.",
    },
    {
      icon: FileText,
      color: "#D97706",
      title: "Content Creation",
      steps: ["Idea", "AI Draft", "Editing", "Publication"],
      saves: "4 hrs/week",
      desc: "Produce high-quality content faster with AI-assisted drafting and editing.",
    },
    {
      icon: Target,
      color: "#7C3AED",
      title: "Leadership Workflows",
      steps: ["Strategic Question", "AI Analysis", "Decision Framework"],
      saves: "3 hrs/week",
      desc: "Turn strategic questions into clear decision frameworks with AI analysis.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0fdf4 100%)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel text="AI Workflow Library" />
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Practical AI Workflows for Real Work
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Discover practical AI workflows used in real professional environments. Each workflow is ready to adapt and implement today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {workflows.map(({ icon: Icon, color, title, steps, saves, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>{title}</h3>
                    <span className="text-xs font-semibold" style={{ color, fontFamily: "'DM Sans', sans-serif" }}>Saves {saves}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              {/* Workflow diagram */}
              <div className="flex items-center gap-2 flex-wrap mb-5">
                {steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ background: `${color}12`, color, fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="w-4 h-4 rounded-full text-white flex items-center justify-center text-xs" style={{ background: color, fontSize: "9px" }}>{i + 1}</span>
                      {step}
                    </div>
                    {i < steps.length - 1 && <ChevronRight size={12} className="text-slate-300 flex-shrink-0" />}
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color }}>
                Explore Workflow <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8. RESOURCE SEARCH ─── */
function ResourceSearch() {
  const [query, setQuery] = useState("");
  const popularTopics = ["AI Productivity", "AI Prompts", "AI Workflows", "AI Strategy", "AI Tools", "Leadership AI", "AI for Business", "Prompt Engineering"];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <SectionLabel text="Search Resources" />
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
          Find Exactly What You Need
        </h2>
        <p className="text-slate-500 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Search articles, guides, workflows, and webinars.
        </p>
        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for AI productivity, workflows, prompts..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm bg-slate-50"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary text-sm px-4 py-2">
            Search
          </button>
        </div>
        {/* Popular topics */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Popular Topics</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTopics.map(topic => (
              <button
                key={topic}
                onClick={() => setQuery(topic)}
                className="text-sm px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. LEAD MAGNET ─── */
function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const features = [
    "Research & Analysis prompts",
    "Strategy & Decision-making",
    "Writing & Communication",
    "Data interpretation",
    "Meeting & Planning",
    "Client & Stakeholder comms",
  ];

  return (
    <section id="lead-magnet" className="py-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Guide preview */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold" style={{ background: "rgba(13,148,136,0.2)", color: "#5EEAD4", fontFamily: "'DM Sans', sans-serif" }}>
              <Star size={12} /> Free Resource
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              50 AI Prompts Every Professional Should Know
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Learn powerful prompts used for research, strategy, writing, and decision-making. Used by 1,000+ professionals.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={48} className="text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Check your inbox!</h3>
                <p className="text-slate-500 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Your free guide is on its way. Check your email in the next few minutes.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0D9488, #16A34A)" }}>
                    <Download size={22} color="white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Free Download</div>
                    <div className="text-base font-bold text-slate-900" style={{ fontFamily: "'Sora', sans-serif" }}>50 AI Prompts Guide</div>
                  </div>
                </div>
                <div className="h-px bg-slate-100 my-5" />
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1.5 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>Your Name</label>
                    <input type="text" placeholder="First name" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-teal-400" style={{ fontFamily: "'DM Sans', sans-serif" }} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1.5 block" style={{ fontFamily: "'DM Sans', sans-serif" }}>Work Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-teal-400"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <button type="submit" className="btn-primary flex items-center justify-center gap-2 w-full py-3">
                    <Download size={16} /> Download Free Guide
                  </button>
                </form>
                <p className="text-xs text-slate-400 text-center mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>No spam. Unsubscribe anytime.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 10. FINAL CTA ─── */
function ResourcesFinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: "linear-gradient(135deg, #ecfdf5, #f0fdfa)", color: "#0D9488", border: "1px solid #99f6e4" }}>
          <Lightbulb size={14} /> Ready to Go Beyond Articles?
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
          Turn Knowledge Into{" "}
          <span style={{ color: "#0D9488" }}>Real AI Skills</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          UpskillinTech programs teach professionals how to integrate AI into real work and productivity systems — not just read about it.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="/" className="btn-primary flex items-center gap-2">
            Explore Programs <ArrowRight size={16} />
          </a>
          <a href="#community" className="btn-outline flex items-center gap-2">
            <Users size={16} /> Join Community
          </a>
        </div>
        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {["No prior AI experience needed", "Practical from day one", "Join 1,000+ professionals"].map(item => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-teal-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ASSEMBLY ─── */
export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ResourcesHero />
        <FeaturedResources />
        <BlogSection />
        <AIGuidesSection />
        <CaseStudiesSection />
        <WebinarsSection />
        <WorkflowLibrary />
        <ResourceSearch />
        <LeadMagnetSection />
        <ResourcesFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
