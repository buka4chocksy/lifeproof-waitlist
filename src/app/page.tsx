"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Differentiators from "@/components/Differentiators";
import Security from "@/components/Security";
import Personas from "@/components/Personas";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#07080A] relative selection:bg-brand-green-glow selection:text-white">
      {/* Global Material Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-noise mix-blend-overlay" />

      {/* Global Interactive Mouse Glow Spotlight */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-500 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.02), transparent 80%)`,
          }}
        />
      )}

      {/* Ambient background particles (drifting shards) */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {/* Particle 1 */}
        <div 
          className="absolute top-[15%] right-[5%] w-6 h-6 border border-brand-green-accent/20 rounded-md rotate-12 bg-brand-green-glow/5 animate-float-slow"
          style={{ animationDuration: "12s" }}
        />
        {/* Particle 2 */}
        <div 
          className="absolute top-[45%] left-[3%] w-8 h-8 border border-white/5 rounded-lg rotate-45 bg-white/[0.01] animate-float-slow"
          style={{ animationDuration: "16s", animationDelay: "2s" }}
        />
        {/* Particle 3 */}
        <div 
          className="absolute top-[75%] right-[8%] w-5 h-5 border border-brand-green-accent/15 rounded-full bg-brand-green-glow/5 animate-float-slow"
          style={{ animationDuration: "14s", animationDelay: "1s" }}
        />
        {/* Particle 4 */}
        <div 
          className="absolute top-[90%] left-[6%] w-7 h-7 border border-white/5 rounded-md -rotate-12 bg-white/[0.01] animate-float-slow"
          style={{ animationDuration: "18s", animationDelay: "3s" }}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero / Waitlist Entrance */}
        <Hero />

        {/* 2. Legacy dilemma and Lost BTC statistics */}
        <Problem />

        {/* 3. Horizontal Cryptographic Stepper */}
        <HowItWorks />

        {/* 4. Taxonomy Categories Grid */}
        <Categories />

        {/* 5. Product Differentiators */}
        <Differentiators />

        {/* 6. Technical Security Specs and tooltips */}
        <Security />

        {/* 7. Illustrative User Scenarios */}
        <Personas />

        {/* 8. Accordion FAQ */}
        <Faq />
      </main>

      {/* 9. Final CTA & Legal Footer */}
      <Footer />
    </div>
  );
}
