import React from "react";
import KarriereHeader from "./KarriereHeader";
import Footer from "./Footer";
import Mainnav from "./Mainnav";
import Mynavbar from "./Mynavbar";

function Karriere() {
  return (
    <>
      <Mynavbar display={"d-none"} />
      <div className=" bg_header_image">
        <Mainnav />
        <KarriereHeader />
      </div>
      <Footer />
    </>
  );
}

export default Karriere;
