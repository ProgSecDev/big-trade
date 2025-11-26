// src/pages/Home.js
import React, { useRef, useEffect } from "react";
import "../Style/Home.css";
import VID1 from "../assets/Vids/VID-1.mp4";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Why: some mobile browsers require an explicit play call even with muted+autoplay
    videoRef.current?.play?.().catch(() => {});
  }, []);

  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background video (decorative) */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none"
        src={VID1}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true" // decorative; avoid SR noise
      />

      {/* Overlay to keep text legible over bright frames */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground hero content */}
      <div className="relative z-10 px-6">
        <h1
          className="
            text-center font-extrabold tracking-tight
            text-white drop-shadow-xl
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            leading-tight
          "
        >
          Connecting Ideas. Building Technology. Empowering Growth.
        </h1>
      </div>
    </div>
  );
}

export default Home;
