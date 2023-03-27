import React, { useState, useEffect } from "react";
import Header from "./Header";
import Testimonials from "./Testimonials";
import Consaltex from "./Consaltex";
import Ergebnisse from "./Ergebnisse";
import About from "./About";
import Videos from "./Videos";
import Mynavbar from "./Mynavbar";
import Faq from "./Faq";
import Logo from "./Logo";
import Footer from "./Footer";
import Agentur from "./Agentur";
import Calendar from "./Calendar";
import Backtotop from "./Backtotop";
import AOS from "aos";
import "aos/dist/aos.css";
import Mainnav from "./Mainnav";

function Header_main() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Backtotop />
      <Mynavbar />
      <div className="bg_header_image">
        <Mainnav />
        <Header />
      </div>
      <Logo />
      <Agentur />
      <Testimonials />
      <Consaltex />
      <Ergebnisse />
      <About />
      <Videos />
      <Faq />
      <Calendar />
      <Footer />{" "}
    </>
  );
}

export default Header_main;
