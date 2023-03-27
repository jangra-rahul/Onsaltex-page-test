import React from "react";
import logo from "../assets/image/png/Logo.png";

function Preloader() {
  return (
    <>
      <div className="min-vh-100 bg_footer loding_position loding_position">
        <h1 className="fs_90 fw_700 ff_poiret text_secondary animation_loding">
          <span className="span1 me-2"></span>
          <span className="span2 me-2"></span>
          <span className="span3"></span>
        </h1>
      </div>
    </>
  );
}

export default Preloader;
