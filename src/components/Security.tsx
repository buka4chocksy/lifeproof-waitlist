"use client";

import React, { useRef } from "react";
import { ShieldCheck, HelpCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    {
      term: "Zero-Knowledge Architecture",
      glossary: "We hold your encrypted files, but the decryption key is derived solely on your device. We can never decrypt your records.",
      detail: "All data is encrypted client-side with AES-256-GCM. We never transmit or store raw master passwords, key hashes, or unencrypted assets."
    },
    {
      term: "Shamir's Secret Sharing",
      glossary: "An algorithm that splits a secret key into mathematical pieces (shards). It requires a threshold number of shards to rebuild the original key.",
      detail: "Your vault key is split into multiple shards. Release requires reconstructive threshold consensus from separate secure nodes."
    },
    {
      term: "FIPS 140-2 L3 HSM Escrow",
      glossary: "A specialized physical computer chip (Hardware Security Module) that safely guards and executes cryptographic keys in compliance with federal FIPS standards.",
      detail: "LifeProof's escrow shard is sealed in Hardware Security Modules, protecting keys against unauthorized extraction or administrative overrides."
    },
    {
      term: "FIDO2 & WebAuthn biometrics",
      glossary: "Standard secure login technology using your device's fingerprint or face ID (e.g. Apple FaceID, Windows Hello) instead of typed passwords.",
      detail: "Eliminates phone-number porting and SMS-OTP hacks. Your dashboard is protected by biometric passkeys and physical security keys."
    },
    {
      term: "SOC 2 Type II & Data Compliance",
      glossary: "A rigid third-party audit proving that a company's systems securely protect sensitive user data across operational processes.",
      detail: "Built from the ground up targeting SOC 2 Type II controls. Aligned with strict GDPR and NDPR data protection frameworks."
    }
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3">
            Security Posture
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand-green-accent" />
            Zero-Trust. Cryptographically Verified.
          </h2>
          <p className="text-sm text-gray-400 font-body mt-4 max-w-xl">
            We don't ask for your trust. We prove security mathematically. Hover over the question marks below to explore a plain-language glossary of our stack.
          </p>
        </div>

        {/* Security Specs List */}
        <div className="space-y-4 max-w-4xl">
          {points.map((pt, index) => (
            <motion.div
              key={pt.term}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-panel-bg/30 border border-hairline flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-brand-green-accent/25 transition-smooth"
            >
              <div className="flex items-center gap-2 shrink-0">
                <h3 className="text-sm sm:text-base font-heading font-bold text-white">
                  {pt.term}
                </h3>
                
                {/* Tooltip Wrapper */}
                <div className="relative group/tooltip inline-block cursor-help">
                  <HelpCircle className="w-4 h-4 text-gray-500 hover:text-brand-green-accent transition-smooth" />
                  
                  {/* Tooltip bubble */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg bg-panel-bg border border-brand-green-accent/30 shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-smooth pointer-events-none z-50">
                    <p className="text-[11px] text-gray-300 font-body font-medium leading-relaxed">
                      {pt.glossary}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-panel-bg" />
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 font-body max-w-xl md:text-right">
                {pt.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
