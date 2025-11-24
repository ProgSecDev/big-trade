// src/components/FooterCTA.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";

function cn(...xs) {
  return xs.filter(Boolean).join(" ");
}

export default function FooterCTA({
  heading = "Get In Touch",
  ctaTitle = "Ready to transform your IT infrastructure?",
  ctaSubtitle = "Contact us to discuss your technology needs.",
  email = "info@tech-bridgegroup.com",
  tagline = "Innovate, Connect, Build",
  className,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer
      className={cn(
        "relative isolate overflow-hidden",
        // tighter vertical spacing
        "pt-16 pb-10 sm:pt-20 sm:pb-12",
        "bg-[#08121c]",
        className
      )}
    >
      {/* Background (Mission parity) */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 60rem at 10% 10%, rgba(0, 213, 255, 0.15), transparent 60%), radial-gradient(40rem 40rem at 85% 30%, rgba(0, 255, 170, 0.10), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
        </div>

        {/* Glass CTA card */}
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : undefined}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "mx-auto mt-10 max-w-4xl rounded-[28px] p-[2px]", // mt-12 -> mt-10
            "bg-gradient-to-br from-teal-400/60 via-cyan-400/30 to-teal-500/60"
          )}
        >
          <div
            className={cn(
              "rounded-[26px] bg-slate-900/80 backdrop-blur-xl ring-1 ring-white/10",
              "px-6 py-12 sm:px-10 sm:py-14 text-center"
            )}
          >
            <p className="text-xl sm:text-2xl font-semibold text-white">
              {ctaTitle}
            </p>
            <p className="mt-2 text-base text-white/70">{ctaSubtitle}</p>

            <div className="mt-5 inline-flex items-center gap-2 text-teal-300">
              <Mail className="h-5 w-5" aria-hidden />
              <a
                href={`mailto:${email}`}
                className="text-lg underline decoration-teal-400/40 underline-offset-4 transition hover:text-teal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 rounded"
              >
                {email}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <p className="relative mt-6 text-center text-xl text-teal-300">
          {tagline}
        </p>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Tech Bridge Group. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a className="hover:text-white/80" href="#privacy">Privacy</a>
            <span aria-hidden>•</span>
            <a className="hover:text-white/80" href="#terms">Terms</a>
            <span aria-hidden>•</span>
            <a className="hover:text-white/80" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
