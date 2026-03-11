/**
 * UpskillinTech Homepage — Main Page
 * Design: Modern Professional — Clean Conversion-Focused Landing Page
 * Colors: Teal/Green primary, Amber CTAs, Slate dark sections
 * Typography: Sora (headlines) + DM Sans (body)
 * Sections: Nav, Hero, Problem, Solution, Who It's For, Flagship Program,
 *           Workflow Examples, Social Proof, Ecosystem, Lead Magnet, Final CTA, Footer
 */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AudienceSection from "@/components/AudienceSection";
import ProgramSection from "@/components/ProgramSection";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EcosystemSection from "@/components/EcosystemSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AudienceSection />
      <ProgramSection />
      <WorkflowSection />
      <TestimonialsSection />
      <EcosystemSection />
      <LeadMagnetSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
