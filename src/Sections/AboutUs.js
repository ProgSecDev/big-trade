// src/components/AboutTechBridge.jsx
import React, { useEffect, useRef } from "react";

/**
 * Why: We use a clipped layer to replicate the dark right-angled wedge visible in the design.
 * Why: IntersectionObserver avoids heavy animation libs and only animates once in view.
 */
export default function AboutTechBridge() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-4");
            el.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_600px_at_0%_0%,#0f2534_0%,#0c2130_35%,#0a1c28_60%,#081824_100%)]" />

      {/* Soft diagonal wash to match screenshot tone */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40"
           style={{
             background:
               "linear-gradient(130deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.0) 100%)",
           }}
      />

      {/* Right dark angled wedge */}
      <div
        aria-hidden
        className="absolute right-0 top-0 h-full w-[55vw] max-w-[900px] -z-10"
        style={{
          background: "linear-gradient(180deg, #0b1b27 0%, #091521 100%)",
          clipPath: "polygon(65% 0%, 100% 0%, 100% 100%, 35% 100%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24 md:py-28">
        <div
          ref={sectionRef}
          className="transform-gpu opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          {/* Heading */}
          <h2
            className="text-center font-extrabold tracking-tight text-[clamp(28px,5vw,48px)]"
            style={{ color: "#49dcc1" }}
          >
            About TechBridge Group
          </h2>

          {/* Aqua underline bar */}
          <div className="mx-auto mt-4 h-1 w-40 rounded-sm"
               style={{ backgroundColor: "#49dcc1" }}
          />

          {/* Lead paragraph */}
          <p className="mx-auto mt-10 max-w-4xl text-[17px] leading-8 text-slate-300">
            TechBridge Group bridges the gap between technology challenges and
            business opportunities. We provide comprehensive IT solutions — from
            network design and infrastructure to ongoing support and consultancy —
            ensuring your technology works as hard as you do.
          </p>

          {/* Bullets */}
          <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-[17px] leading-8 text-slate-300">
            <li>
              • Tailored IT infrastructure and support
            </li>
            <li>
              • Expertise in networking, virtualization, cloud, and open-source systems
            </li>
            <li>
              • Trusted by organizations across Lebanon and the region
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
