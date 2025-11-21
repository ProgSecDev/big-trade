// src/components/MissionSection.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Mission section UI — variant without the left icon.
 * TailwindCSS required. Uses clip-path for the image card curve.
 * Drop-in for JS/JSX projects (no TypeScript types).
 */
const MissionSection = ({ 
  imageSrc = "/mnt/data/5d68695d-5aa1-4d12-883c-033263ee17c1.png", // local fallback
  className = "" 
}) => {
  return (
    <section
      className={[
        "relative isolate overflow-hidden",
        "bg-[#08121c]",
        "px-6 py-14 sm:px-10 md:py-20",
        "text-white",
        className,
      ].join(" ")}
      aria-label="Our Mission"
    >
      {/* Background grid glow (why: evokes tech vibe without heavy images) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 60rem at 10% 10%, rgba(0, 213, 255, 0.15), transparent 60%), radial-gradient(40rem 40rem at 85% 30%, rgba(0, 255, 170, 0.10), transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header label — left icon removed */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            OUR MISSION
          </span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Left: Headline */}
          <div>
            <p className="text-4xl font-extrabold sm:text-5xl">
              <span className="block leading-tight text-white/95">
                Everyday is
              </span>
              <span
                className="mt-3 block text-[46px] sm:text-7xl font-extrabold leading-[0.95]"
                style={{
                  color: "#6bffe6",
                  textShadow:
                    "0 0 20px rgba(0, 255, 200, 0.45), 0 0 40px rgba(0, 255, 200, 0.25)",
                }}
              >
                Technology
              </span>
            </p>

            {/* Bottom capsule paragraph */}
            <div className="mt-12 rounded-[2.5rem] border border-cyan-500/40 bg-white/5 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,255,0.15)]">
              <p className="text-sm leading-relaxed text-white/85">
                TO BRIDGE THE GAP BETWEEN TECHNOLOGY AND BUSINESS BY DELIVERING
                RELIABLE, SCALABLE, AND AFFORDABLE IT SOLUTIONS — EMPOWERING
                COMPANIES TO OPERATE SMARTER, SAFER, AND MORE EFFICIENTLY.
              </p>
            </div>
          </div>

          {/* Right: Tagline + Image card */}
          <div className="relative">
            {/* Tagline */}
            <div className="mb-5 max-w-md">
              <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">
                <span className="block">Making Life Easier,</span>
                <span className="block">One Gadget at a Time</span>
              </h2>
            </div>

            {/* Curved image card */}
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: "1.25rem",
                  clipPath:
                    "path('M16 0H720c8.837 0 16 7.163 16 16v300c-120 90-240 90-360 0H32c-8.837 0-16-7.163-16-16V16C16 7.163 23.163 0 32 0Z')",
                }}
              >
                {/* <img
                  src={imageSrc}
                  alt="Professional using a laptop in a modern workspace"
                  className="h-[260px] w-full object-cover md:h-[320px]"
                /> */}
              </div>

              {/* Halftone dots */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(currentColor 1px, transparent 1px)",
                  color: "rgba(0, 255, 255, 0.45)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MissionSection.propTypes = {
  imageSrc: PropTypes.string,
  className: PropTypes.string,
};

export default MissionSection;