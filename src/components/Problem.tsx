"use client";

import React, { useRef, useState } from "react";
import { AlertCircle, EyeOff, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <AlertCircle className="w-5 h-5 text-red-400" />,
      stat: "3.7 Million BTC",
      label: "Permanently Lost",
      description: "Roughly 20% of all circulating Bitcoin is forever inaccessible because owners passed away or became incapacitated without sharing seed phrases or keys."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-brand-green-accent" />,
      stat: "The Custody Gap",
      label: "Zero Mediation",
      description: "Traditional credentials require a binary choice: reveal your passwords today and risk immediate breach, or hide them forever and risk lockouts during emergencies."
    },
    {
      icon: <Users className="w-5 h-5 text-brand-green-accent" />,
      stat: "Locked Out Families",
      label: "Bureaucratic Dead Ends",
      description: "Standard password managers and simple 'inactive account' rules aren't designed for the complex, verified, multi-party estate release that crisis requires."
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3"
          >
            The Legacy Dilemma
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight"
          >
            Wealth doesn't survive if access dies.
          </motion.h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <CardWrapper key={index} index={index} isInView={isInView} card={card} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

// Separate component for mouse-hover-glow tracking in cards
function CardWrapper({ card, index, isInView }: { card: any; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        // Define standard CSS variables dynamically for Tailwind v4 compatibility
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`
      } as React.CSSProperties}
      className="relative flex flex-col justify-between p-8 rounded-xl bg-panel-bg/60 border border-hairline hover:border-brand-green-accent/30 hover:bg-panel-bg/85 group transition-smooth overflow-hidden"
    >
      {/* Light glow overlay on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(16,185,129,0.06),transparent_50%)]" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6">
          {card.icon}
        </div>

        {/* Statistic / Metric */}
        <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-tight mb-1">
          {card.stat}
        </h3>
        <p className="text-xs font-heading font-semibold text-brand-green-accent/80 tracking-wide uppercase mb-4">
          {card.label}
        </p>
      </div>

      <p className="relative z-10 text-sm text-gray-400 leading-relaxed font-body">
        {card.description}
      </p>
    </motion.div>
  );
}
