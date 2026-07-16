"use client";

import React from "react";
import { ChevronDown, Lock } from "lucide-react";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      const offset = 80;
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
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Drifting gradient mesh elements */}
      <div className="absolute inset-0 -z-10 bg-[#07080A]">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Shard Glow 1 */}
        <div className="absolute top-[20%] left-[15%] w-72 md:w-96 h-72 md:h-96 rounded-full bg-brand-green-glow/15 blur-[80px] md:blur-[120px] animate-mesh-1" />

        {/* Shard Glow 2 */}
        <div className="absolute bottom-[25%] right-[15%] w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-emerald-950/15 blur-[90px] md:blur-[140px] animate-mesh-2" />

        {/* Accent light source */}
        <div className="absolute top-[10%] right-[30%] w-48 h-48 rounded-full bg-brand-green-accent/5 blur-[60px] animate-pulse" />

        {/* Radial Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/20 via-[#07080A]/80 to-[#07080A]" />

        {/* Breathing Shield Graphic - placed on top of vignette and glows */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [0.96, 1.04, 0.96],
              opacity: [0.04, 0.12, 0.04],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-brand-green-accent/30 shrink-0"
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[350px] sm:w-[500px] md:w-[680px] h-auto"
            >
              {/* Detailed SVG Shield outline */}
              <path
                d="M50 8 L15 22 C15 48, 30 78, 50 92 C70 78, 85 48, 85 22 Z"
                stroke="currentColor"
                strokeWidth="0.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner accent outline */}
              <path
                d="M50 14 L22 25 C22 47, 34 72, 50 84 C66 72, 78 47, 78 25 Z"
                stroke="currentColor"
                strokeWidth="0.2"
                strokeDasharray="2 2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Vertical line through shield */}
              <path
                d="M50 8 L50 92"
                stroke="currentColor"
                strokeWidth="0.1"
                strokeOpacity="0.5"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel-bg/80 border border-hairline mb-8 text-[11px] font-semibold font-heading tracking-wide text-brand-green-accent uppercase"
        >
          <Lock className="w-3 h-3 text-brand-green-accent" />
          Zero-Knowledge Digital Legacy
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6.5xl font-heading font-extrabold tracking-tight text-white leading-[1.05] max-w-4xl text-balance"
        >
          Your crypto and your family's future shouldn't be locked behind a password only you know.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 font-body max-w-2xl mt-6 mb-10 leading-relaxed text-balance"
        >
          Securing your private credentials in a time-locked, cryptographically-sharded vault—released safely to verified beneficiaries only when it matters most.
        </motion.p>

        {/* Waitlist Capture Inline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <WaitlistForm />
          
          <p className="text-[11px] text-gray-500 mt-3">
            Currently pre-launch. Be first to know when we open registration.
          </p>
        </motion.div>

        {/* Down Arrow / Secondary CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={scrollToHowItWorks}
          className="mt-16 sm:mt-24 text-gray-500 hover:text-white flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider group cursor-pointer transition-smooth"
        >
          <span>See How It Works</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform text-brand-green-accent animate-pulse" />
        </motion.button>
      </div>
    </section>
  );
}
