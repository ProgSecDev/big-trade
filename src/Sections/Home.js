import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage from "../assets/Banners/bannerBG.jpg";
import logo from "../assets/Logos and Favicons/LogoNoBG.png";
import "../Style/Home.css";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex h-screen overflow-hidden min-h-screen justify-center items-center" id="home">
      {/* Background Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        // interval={5000}
        // transitionTime={2000}
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

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Logo on background */}
      <div
        className={`home-logo-container`}
      >
        <img src={logo} alt="Logo" className="home-logo-image" />
      </div>
    </div>
  );
}

export default Home;
