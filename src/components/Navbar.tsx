"use client";

import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-[#07080A]/70 backdrop-blur-md border-b border-hairline py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green-glow/20 border border-brand-green-accent/30 group-hover:border-brand-green-accent transition-smooth">
            <Shield className="w-4.5 h-4.5 text-brand-green-accent" />
            <div className="absolute inset-0 rounded-lg bg-brand-green-accent/10 opacity-0 group-hover:opacity-100 blur transition-opacity" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-brand-green-accent transition-smooth">
            LifeProof
          </span>
        </button>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "How it Works", id: "how-it-works" },
            { label: "Features", id: "differentiators" },
            { label: "Security", id: "security" },
            { label: "FAQ", id: "faq" }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-gray-400 hover:text-white cursor-pointer transition-smooth font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => scrollToSection("join-waitlist")}
            className="px-4.5 py-2 rounded-lg bg-panel-bg hover:bg-brand-green-glow/20 text-white hover:text-brand-green-accent border border-hairline hover:border-brand-green-accent/50 text-xs font-semibold font-heading transition-smooth active:scale-95 cursor-pointer"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </motion.header>
  );
}
