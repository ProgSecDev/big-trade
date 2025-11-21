// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage from "../assets/Banners/bannerBG.jpg";
import logo from "../assets/Logos and Favicons/LogoNoBG.png";
import "../Style/Home.css";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative flex h-screen min-h-screen items-center justify-center overflow-hidden"
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="absolute inset-0"
        renderThumbs={() => null}
      >
        {[backgroundImage].map((bg, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          />
        ))}
      </Carousel>

      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-20" />

      {/* logo */}
      <div className="home-logo-container">
        <img
          src={logo}
          alt="Tech Bridge"
          className="home-logo-image"
          draggable="false"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default Home;
