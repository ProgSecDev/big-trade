import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Logos and Favicons/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("#182b38");
  const [textColor, setTextColor] = useState("text-white");
  const [textFont, setTextFont] = useState("text-3xl");
  const [logoSize, setLogoSize] = useState("h-40");
  const [isScreenMinimized, setIsScreenMinimized] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changeNavbarBg = () => {
    if (window.scrollY >= 50) {
      setNavbarBg("rgba(24, 43, 56, 1)");
      setTextColor("text-white");
      setTextFont("text-1xl");
      setLogoSize("h-32");
    } else {
      setNavbarBg("#182b38");
      setTextColor("text-white");
      setTextFont("text-2xl");
      setLogoSize("h-40");
    }
  };

  const handleResize = () => setIsScreenMinimized(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setIsMenuOpen(false);
  };

//   const handlePrivateLabelClick = () => {
//   if (location.pathname === "/" || location.pathname === "/spicy") {
//     scrollToSection("labels");
//   } else {
//     navigate("/");
//     setTimeout(() => {
//       scrollToSection("labels");
//     }, 300);
//   }
// };

  return (
    <nav
      className={`navbar p-4 ${textColor} fixed top-0 w-full z-30 transition-colors duration-500 ease-in-out`}
      style={{ backgroundColor: navbarBg }}
    >
      <div
        className="container mx-auto flex flex-col lg:flex-row justify-between items-center relative"
        style={{ fontFamily: "Bookman Old Style, serif", fontWeight: 100 }}
      >
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`lg:flex lg:space-x-8 lg:mt-0 mt-4 flex flex-col lg:flex-row items-center ${textFont} ${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:justify-center w-full nav-text`}
        >
          <div
            className="px-4 py-2 hover:text-cyan-500 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </div>
          <div
            className="px-4 py-2 hover:text-cyan-500 cursor-pointer"
            onClick={() => scrollToSection("story")}
          >
            About us
          </div>

          <div className="relative group px-4 py-2 cursor-pointer">
            <div
              className="hover:text-cyan-500 whitespace-nowrap"
              onClick={() => scrollToSection("product")}
            >
              Our Missions
            </div>
            <div className="absolute hidden group-hover:block mt-2 bg-[#6F6D39] text-white shadow-md rounded-md whitespace-nowrap">
              {/*<div className="px-4 py-2 hover:bg-[#C5713A] cursor-pointer" onClick={() => scrollToSection("grill")}>Grill Master</div>*/}
              {/*<div className="px-4 py-2 hover:bg-[#C5713A] cursor-pointer" onClick={() => scrollToSection("spicy")}>Spicy Food</div>*/}
            </div>
          </div>
        </div>

        {!isScreenMinimized && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mx-1">
            <img
              src={logo}
              alt="Logo"
              className={`nav-logo ${logoSize} transition duration-300 ease-in-out hidden`}
            />
          </div>
        )}

        <div
          className={`lg:flex lg:space-x-8 lg:mt-0 mt-4 flex flex-col lg:flex-row items-center ${textFont} ${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:justify-center w-full nav-text cursor-pointer`}
        >
          <div
              className="hover:text-cyan-500 whitespace-nowrap"
              onClick={() => scrollToSection("product")}
            >
              Our Vision
            </div>
          <div
              className="hover:text-cyan-500 whitespace-nowrap"
              onClick={() => scrollToSection("product")}
            >
              Our Solutions
            </div>
          <div
            className="px-4 py-2 hover:text-cyan-500 cursor-pointer"
            onClick={() => scrollToSection("footer")}
          >
            Contact Us
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;