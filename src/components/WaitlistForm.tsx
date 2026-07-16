"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  compact?: boolean;
}

export default function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [holdsCrypto, setHoldsCrypto] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Honeypot field (hidden from users)
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // 1. Basic client-side validation
    if (!email.trim()) {
      setErrorMessage("Email address is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          holdsCrypto,
          username: honeypot, // Honeypot
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
        setHoldsCrypto(false);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center text-center p-6 border border-brand-green-accent/30 bg-brand-green-glow/10 rounded-xl"
          >
            <CheckCircle2 className="w-12 h-12 text-brand-green-accent mb-3 animate-bounce" />
            <h4 className="text-lg font-heading font-semibold text-white mb-1">You're on the list</h4>
            <p className="text-sm text-gray-400">
              We've reserved your spot. We will notify you when early access begins.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            layout
          >
            {/* Honeypot field (strictly hidden from screen readers & visual layouts) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="username"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  disabled={isLoading}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-panel-bg/90 border border-hairline rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-green-accent focus:ring-1 focus:ring-brand-green-accent disabled:opacity-50 transition-smooth text-sm font-body"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-brand-green-accent hover:bg-brand-green-hover text-background font-semibold font-heading rounded-lg flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer transition-smooth group shrink-0 active:scale-95 text-sm"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-background" />
                ) : (
                  <>
                    Request Early Access
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Crypto assets segment question */}
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id={`holds-crypto-${compact ? 'compact' : 'full'}`}
                checked={holdsCrypto}
                onChange={(e) => setHoldsCrypto(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-hairline bg-panel-bg text-brand-green-accent focus:ring-brand-green-accent focus:ring-offset-background cursor-pointer"
              />
              <label 
                htmlFor={`holds-crypto-${compact ? 'compact' : 'full'}`}
                className="text-xs text-gray-400 select-none cursor-pointer"
              >
                Optional: I currently hold digital / crypto assets.
              </label>
            </div>

            {/* Inline validation feedback */}
            {errorMessage && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-400 mt-1 pl-1"
              >
                {errorMessage}
              </motion.p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
