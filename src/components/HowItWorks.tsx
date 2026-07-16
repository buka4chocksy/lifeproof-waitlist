"use client";

import React, { useRef } from "react";
import { KeyRound, ShieldAlert, Cpu, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <KeyRound className="w-5 h-5 text-brand-green-accent" />,
      title: "1. Client-side encryption",
      subtitle: "AES-256-GCM Local Lock",
      description: "You encrypt credentials or PDFs directly on your browser. LifeProof's servers never see, handle, or store your unencrypted master password or files."
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-green-accent" />,
      title: "2. Cryptographic sharding",
      subtitle: "Shamir's Secret Sharing",
      description: "The encryption key is fragmented into shards distributed to: you, a beneficiary, a custodian, and our secure HSM escrow. No single shard can rebuild the key."
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-green-accent" />,
      title: "3. Heartbeat monitor",
      subtitle: "Incapacity Detection",
      description: "LifeProof checks in periodically. If you miss your heartbeat check, the state machine triggers a secure, multi-step verification protocol."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-brand-green-accent" />,
      title: "4. Cool-off & release",
      subtitle: "Verified Reassembly",
      description: "A mandatory 14-day dispute period starts. If no cancel trigger is raised, target shards are reassembled to release credentials to the beneficiary."
    }
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight"
          >
            A vault with no central master key.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-400 font-body max-w-xl mx-auto mt-4"
          >
            Combining AES-256 local credentials with Shamir's Secret Sharing to ensure no single entity—including us—can access your files alone.
          </motion.p>
        </div>

        {/* Cryptographic diagram */}
        <div className="mb-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-4xl p-6 sm:p-10 rounded-2xl bg-panel-bg/40 border border-hairline relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-glow/5 via-transparent to-brand-green-glow/5" />
            
            <h3 className="text-xs font-heading font-semibold text-center text-gray-400 uppercase tracking-wider mb-8 relative z-10">
              Visual trust model: Cryptographic Sharding Cycle
            </h3>

            {/* SVG Interactive Diagram */}
            <div className="relative w-full max-w-xl mx-auto z-10">
              <svg viewBox="0 0 400 240" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Gradients definitions */}
                <defs>
                  <linearGradient id="gradient-flow-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Connecting Lines */}
                <path d="M 50 120 L 140 120" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4" />
                
                {/* Animated active paths */}
                <path d="M 200 120 L 260 50" stroke="url(#gradient-flow-emerald)" strokeWidth="2" className="animate-flow-line" />
                <path d="M 200 120 L 260 95" stroke="url(#gradient-flow-emerald)" strokeWidth="2" className="animate-flow-line" />
                <path d="M 200 120 L 260 145" stroke="url(#gradient-flow-emerald)" strokeWidth="2" className="animate-flow-line" />
                <path d="M 200 120 L 260 190" stroke="url(#gradient-flow-emerald)" strokeWidth="2" className="animate-flow-line" />

                {/* Key Node */}
                <g className="animate-float-slow">
                  <circle cx="50" cy="120" r="22" fill="#0D0F12" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <text x="50" y="124" fill="#F5F5F0" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">KEY</text>
                </g>

                {/* Sharding Engine Node */}
                <g>
                  <rect x="140" y="95" width="60" height="50" rx="8" fill="#0D0F12" stroke="#10B981" strokeWidth="1.5" />
                  <text x="170" y="118" fill="#10B981" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">SHARD</text>
                  <text x="170" y="130" fill="#F5F5F0" fontSize="8" fontFamily="sans-serif" textAnchor="middle">ENGINE</text>
                </g>

                {/* Shard Nodes with independent delays for a staggered float feel */}
                <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '0s' }} className="animate-float-slow">
                  <circle cx="280" cy="50" r="14" fill="#0D0F12" stroke="#10B981" strokeWidth="1.2" />
                  <text x="280" y="53" fill="#10B981" fontSize="8" textAnchor="middle" fontWeight="bold">S1</text>
                  <text x="302" y="53" fill="#9CA3AF" fontSize="8" textAnchor="start">User Shard</text>
                </g>
                <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '1.5s' }} className="animate-float-slow">
                  <circle cx="280" cy="95" r="14" fill="#0D0F12" stroke="#10B981" strokeWidth="1.2" />
                  <text x="280" y="98" fill="#10B981" fontSize="8" textAnchor="middle" fontWeight="bold">S2</text>
                  <text x="302" y="98" fill="#9CA3AF" fontSize="8" textAnchor="start">Beneficiary</text>
                </g>
                <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '3s' }} className="animate-float-slow">
                  <circle cx="280" cy="145" r="14" fill="#0D0F12" stroke="#10B981" strokeWidth="1.2" />
                  <text x="280" y="148" fill="#10B981" fontSize="8" textAnchor="middle" fontWeight="bold">S3</text>
                  <text x="302" y="148" fill="#9CA3AF" fontSize="8" textAnchor="start">Trusted Contact</text>
                </g>
                <g style={{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: '4.5s' }} className="animate-float-slow">
                  <circle cx="280" cy="190" r="14" fill="#0D0F12" stroke="#10B981" strokeWidth="1.2" />
                  <text x="280" y="193" fill="#10B981" fontSize="8" textAnchor="middle" fontWeight="bold">S4</text>
                  <text x="302" y="193" fill="#9CA3AF" fontSize="8" textAnchor="start">Escrow HSM</text>
                </g>

                {/* Threshold info overlay */}
                <rect x="30" y="195" width="105" height="28" rx="4" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
                <text x="82.5" y="207" fill="#10B981" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">K-of-N Threshold</text>
                <text x="82.5" y="217" fill="#9CA3AF" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">Any 2 of 4 shards unlock</text>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Stepper Cards */}
        <div className="relative">
          {/* Stepper Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-hairline via-brand-green-glow to-hairline -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-start bg-panel-bg/30 p-6 rounded-xl border border-hairline relative hover:border-brand-green-accent/20 transition-smooth group"
              >
                {/* Stepper node */}
                <div className="w-12 h-12 rounded-lg bg-panel-bg border border-hairline flex items-center justify-center mb-5 text-brand-green-accent shadow-lg group-hover:border-brand-green-accent transition-smooth shrink-0">
                  {step.icon}
                </div>

                <h4 className="text-base font-heading font-bold text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-xs font-semibold text-brand-green-accent/80 tracking-wide uppercase mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
