import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import Story from "./AboutUs";
import MissionSection from "./Mission";
import VisionSection from "./Vision";
import Solutions from "./Solutions";
import Footer from "./Footer";

const BigTradePage = () => (
  <>
    <Element name="home"><Home /></Element>
    <Element name="story"><Story /></Element>
    <Element name="mission"><MissionSection /></Element>
    <Element name="vision"><VisionSection /></Element>
    <Element name="solutions"><Solutions /></Element>
    <Element name="footer"><Footer /></Element>
  </>
);

export default BigTradePage;
