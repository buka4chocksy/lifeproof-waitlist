"use client";

import React, { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is LifeProof a crypto exchange or wallet?",
      a: "No. LifeProof does not hold, trade, or custody your actual cryptocurrencies or funds. We are a digital-legacy estate system. We store encrypted access credentials, seed phrases, and files that are released only when a death or incapacity event is verified."
    },
    {
      q: "Can LifeProof staff view my stored passwords or keys?",
      a: "No. Everything is secured via client-side zero-knowledge encryption (AES-256-GCM). The encryption key is derived on your computer and immediately split using Shamir's Secret Sharing. Since we never see the master key, no administrator or third-party can ever inspect your raw data."
    },
    {
      q: "What if I change my mind or want to edit my setup?",
      a: "You retain full control over your vault at all times. You can edit your credentials, add or replace beneficiaries, adjust the heartbeat interval length, or delete your entire vault instantly from your secure dashboard."
    },
    {
      q: "What happens if LifeProof as a company shuts down?",
      a: "Our architecture is non-custodial and decentralized by design. During setup, you generate an offline, PIN-protected Emergency Export Pack. This document contains zero raw credentials, but stores the sharded metadata. Your heirs can combine these shards off-grid with an open-source tool, independently of our servers."
    },
    {
      q: "When does LifeProof launch?",
      a: "We are currently operating as an internal draft MVP, preparing for a private beta release across the UK, Nigeria, and Australia. Joining our waitlist secures your early priority access, founding member updates, and priority support during our roll-out."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#07080A]">
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold font-heading tracking-widest text-brand-green-accent uppercase mb-3">
            Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-hairline rounded-xl bg-panel-bg/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-bold text-sm sm:text-base text-white hover:text-brand-green-accent transition-smooth cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="shrink-0 ml-4 w-6 h-6 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-400 group-hover:text-white transition-smooth">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed font-body border-t border-hairline/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
