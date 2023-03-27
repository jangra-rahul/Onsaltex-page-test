import React from "react";
import Footer from "./Footer";
import Header_section from "./Header_section";
import Kundenstimmen from "./Kundenstimmen";
import Mainnav from "./Mainnav";
import Mynavbar from "./Mynavbar";

function Testimonialsfile() {
  return (
    <>
      <Mynavbar display={"d-none"} />
      <div className="bg_theme">
        <Mainnav />
        <Header_section />
      </div>
      <Kundenstimmen />
      <Footer />
    </>
  );
}

export default Testimonialsfile;
