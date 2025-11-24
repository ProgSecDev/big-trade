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
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none"
        src={VID1}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* overlay (keeps text legible over bright frames) */}
      <div className="absolute inset-0 bg-black opacity-20" />

      {/* Add any foreground hero content here */}
    </div>
  );
}

export default Home;
