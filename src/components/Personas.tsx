"use client";

import React, { useRef } from "react";
import { User, ShieldAlert, Workflow, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Personas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      icon: <User className="w-5 h-5 text-brand-green-accent" />,
      title: "The Crypto Custodian",
      persona: "Emeka, 38 — Software Engineer, Lagos",
      challenge: "Holds significant digital assets (BTC, stablecoins) across cold wallets. He is concerned that a sudden accident would render his private keys permanently inaccessible to his family.",
      solution: "LifeProof Vault holds his credentials in a sharded split, ready to be reconstructed only after a verified liveness timeout."
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-green-accent" />,
      title: "The Non-Technical Spouse",
      persona: "Ngozi, 35 — Emeka's Wife",
      challenge: "Needs to manage family expenses but has no interest in command lines or private key mechanics. She requires a fully guided, human-assisted inheritance flow.",
      solution: "Our Simplicity Layer converts crypto terminology into plain actions, while Vault Concierge supports her through the claim process."
    },
    {
      icon: <Workflow className="w-5 h-5 text-brand-green-accent" />,
      title: "The Business Founder",
      persona: "Adaeze, 45 — Fintech Founder",
      challenge: "Needs a secure contingency plan for company registry files, domain assets, and multisig credentials to ensure operational business continuity in a crisis.",
      solution: "Utilizes our multi-party role-based release, requiring multiple custodians to sign off before corporate assets are released."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-brand-green-accent" />,
      title: "The Family Manager",
      persona: "Blessing, 52 — Mother of Three, Port Harcourt",
      challenge: "Wants a digital 'family safe' for land deeds, insurance policies, and pension logins, without dealing with complex crypto protocols.",
      solution: "Uses LifeProof solely for document vaults and credentials, setting trusted family members as simple, non-custodial emergency contacts."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3">
            Target Scenarios
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Built for how life actually happens.
          </h2>
          <p className="text-sm text-gray-400 font-body mt-4 max-w-xl">
            LifeProof is built to serve different needs—whether protecting millions in digital assets or coordinating a plain-language family estate plan.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.persona}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl bg-panel-bg/25 border border-hairline flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-glow/10 border border-brand-green-accent/20 flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-heading font-semibold text-brand-green-accent uppercase tracking-wider">
                      {profile.title}
                    </h3>
                    <p className="text-sm font-heading font-bold text-white">
                      {profile.persona}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-heading font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-body">
                      {profile.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-heading font-semibold text-brand-green-accent/60 uppercase tracking-wide mb-1">Resolution</p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                      {profile.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
