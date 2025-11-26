// src/components/StickyConsultationButton.jsx
import React from "react";

/**
 * Floating CTA button that matches Footer gradient and opens an email client.
 *
 * Why: Using a <button> for keyboard semantics and to control focus styles,
 * while invoking a mailto: keeps it accessible and consistent across browsers.
 */
export default function StickyConsultationButton({
  label = "Book Your Free Consultation",
  email = "info@tech-bridgegroup.com",
  offset = { bottom: "1.25rem", right: "1.25rem" }, // 20px
  className = "",
}) {
  const handleClick = () => {
    // Why: window.location ensures default mail client without new tab pop blockers.
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{ bottom: offset.bottom, right: offset.right }}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={label}
        className={[
          // Layout
          "pointer-events-auto flex items-center justify-center",
          "px-5 py-3 rounded-2xl",
          // Footer gradient match
          "bg-gradient-to-b from-sky-200 via-cyan-200 to-blue-300",
          // Depth/outline
          "shadow-lg ring-1 ring-sky-900/10",
          // Text
          "text-slate-900 font-semibold",
          // Interactions
          "transition-transform duration-150 ease-out hover:translate-y-[-1px] active:translate-y-0",
          // Focus
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40",
          // Prevent overlap on very small screens
          "max-w-[90vw]",
          className,
        ].join(" ")}
      >
        {label}
      </button>
    </div>
  );
}
