"use client";

import React, { useRef } from "react";
import { FolderHeart, Sparkles, HelpCircle, HardDriveDownload } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Differentiators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FolderHeart className="w-5 h-5 text-brand-green-accent" />,
      title: "Document Vault",
      tagline: "Wills, deeds, and credentials in one place.",
      description: "Upload encrypted PDF folders of wills, trust deeds, identity documents, and life insurance policies alongside digital wallet credentials."
    },
    {
      icon: <HardDriveDownload className="w-5 h-5 text-brand-green-accent" />,
      title: "Emergency Export Pack",
      tagline: "Zero platform dependency, fully off-grid.",
      description: "Generate a PIN-protected local recovery card containing cryptographically-masked instructions. If our platform is ever offline, your family can still rebuild your estate."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-green-accent" />,
      title: "Family Vault Network",
      tagline: "Collaborative safety, complete privacy.",
      description: "Provide spouses or children with independently encrypted sub-vaults, establishing shared custody links while maintaining total user sovereignty."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-brand-green-accent" />,
      title: "Simplicity Layer & Concierge",
      tagline: "Human-assisted guide for non-technical heirs.",
      description: "No tech jargon. Plain English terms paired with dedicated, human-assisted Vault Concierge support to guide grieving beneficiaries through recovery."
    }
  ];

  return (
    <section id="differentiators" className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3">
            Core Differentiators
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Engineered for legacy, not just storage.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-xl bg-panel-bg/30 border border-hairline hover:border-brand-green-accent/20 hover:bg-panel-bg/50 transition-smooth group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green-glow/5 blur-[50px] pointer-events-none group-hover:bg-brand-green-glow/10 transition-smooth" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-brand-green-accent group-hover:border-brand-green-accent/30 transition-smooth">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-brand-green-accent/80 font-heading font-medium tracking-wide">
                    {feature.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
