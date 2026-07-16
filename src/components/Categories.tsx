"use client";

import React, { useRef } from "react";
import { 
  Coins, 
  Landmark, 
  TrendingUp, 
  Hourglass, 
  HeartHandshake, 
  Home, 
  Scale, 
  Briefcase, 
  CreditCard, 
  FileText, 
  Plus 
} from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { name: "Crypto & Blockchain", icon: <Coins className="w-4 h-4 text-brand-green-accent" />, desc: "Seed phrases, keys, API tokens" },
    { name: "Banking & Savings", icon: <Landmark className="w-4 h-4 text-brand-green-accent" />, desc: "Logins, account details, vaults" },
    { name: "Investments & Stocks", icon: <TrendingUp className="w-4 h-4 text-brand-green-accent" />, desc: "Trading access, portfolios" },
    { name: "Pension & Retirement", icon: <Hourglass className="w-4 h-4 text-brand-green-accent" />, desc: "Annuities, fund accounts" },
    { name: "Insurance Policies", icon: <HeartHandshake className="w-4 h-4 text-brand-green-accent" />, desc: "Life, health, asset coverage" },
    { name: "Property & Real Estate", icon: <Home className="w-4 h-4 text-brand-green-accent" />, desc: "Deeds, mortgages, valuations" },
    { name: "Tax & Government", icon: <Scale className="w-4 h-4 text-brand-green-accent" />, desc: "ID portals, tax records, filings" },
    { name: "Business & Continuity", icon: <Briefcase className="w-4 h-4 text-brand-green-accent" />, desc: "Domain credentials, company files" },
    { name: "Subscriptions", icon: <CreditCard className="w-4 h-4 text-brand-green-accent" />, desc: "Auto-bills, digital accounts" },
    { name: "Sensitive Documents", icon: <FileText className="w-4 h-4 text-brand-green-accent" />, desc: "Wills, trust deeds, letters" },
    { name: "Custom Entries", icon: <Plus className="w-4 h-4 text-brand-green-accent" />, desc: "Personal secrets, custom fields" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Title */}
        <div className="max-w-3xl mb-16 text-left">
          <p className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3">
            Coverage Taxonomy
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            What belongs in the Vault?
          </h2>
          <p className="text-sm text-gray-400 font-body mt-4 max-w-xl">
            A single, secure repository for all your material assets and digital existence. If it has value or holds access, it can be safely stored.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="p-5 rounded-xl bg-panel-bg/40 border border-hairline hover:border-brand-green-accent/30 hover:bg-panel-bg/70 transition-smooth group flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-green-glow/10 border border-brand-green-accent/15 flex items-center justify-center shrink-0 group-hover:bg-brand-green-glow/20 group-hover:border-brand-green-accent/40 transition-smooth">
                {cat.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-heading font-semibold text-white group-hover:text-brand-green-accent transition-smooth">
                  {cat.name}
                </h4>
                <p className="text-xs text-gray-500 font-body">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
