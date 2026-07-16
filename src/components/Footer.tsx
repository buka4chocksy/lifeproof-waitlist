"use client";

import React from "react";
import { Shield } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="join-waitlist" className="relative pt-24 pb-16 bg-[#07080A] overflow-hidden border-t border-hairline">
      {/* Subtle bottom mesh glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-green-glow/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Final CTA Container */}
        <div className="max-w-4xl mx-auto text-center mb-24 p-8 sm:p-16 rounded-2xl bg-panel-bg/40 border border-hairline relative">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green-glow/5 to-transparent rounded-2xl pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight mb-4 text-balance">
            Protect your legacy before it is needed.
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-body max-w-xl mx-auto mb-10 text-balance">
            Be first to secure early platform access, lock in founding member updates, and help define a new trust standard for legacy handovers.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm compact={true} />
          </div>
        </div>

        {/* Footer Base */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-hairline/50 text-xs text-gray-500">
          
          {/* Logo & Legal Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-brand-green-glow/10 border border-brand-green-accent/20">
                <Shield className="w-3.5 h-3.5 text-brand-green-accent" />
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-white">
                LifeProof
              </span>
            </div>
            <p className="max-w-xs text-center md:text-left leading-relaxed">
              Incapacity management and digital-legacy system. Built on zero-knowledge encryption and Shamir sharding.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#" className="hover:text-brand-green-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green-accent transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-brand-green-accent transition-smooth">Security Disclosures</a>
            <a href="#" className="hover:text-brand-green-accent transition-smooth">Contact</a>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 text-[10px] text-gray-600 border-t border-white/[0.01]">
          <span>
            © {currentYear} LifeProof Security Inc. All rights reserved.
          </span>
          <span className="text-center sm:text-right">
            Operating in compliance with GDPR & NDPR regulations. Pre-launch internal MVP status.
          </span>
        </div>

      </div>
    </footer>
  );
}
