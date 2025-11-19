import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Element, scroller } from "react-scroll";

import Nav from "./Components/Nav";
import "./App.css";
import Home from "./Sections/Home";
import Product from "./Sections/Product";
import Story from "./Sections/AboutUs";
import Footer from "./Sections/Footer";
import SpicyPage from "./Sections/SpicyPage";

const AppContent = () => {
  const location = useLocation();

  // Function to handle scrolling with a custom duration
  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <>
      {/* Conditionally render Nav */}
      {location.pathname !== "/recipes" && <Nav />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<SpicyPage />} />
        <Route path="/spicy" element={<SpicyPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
};

export default App;
