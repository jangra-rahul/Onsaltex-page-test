import React, { useState } from "react";
import arrow from "../assets/image/png/arrow.png";
import after from "../assets/image/png/after_line.png";
import header_img from "../assets/image/png/header_img.png";
import sh_img from "../assets/image/png/sh_img.png";
import goll_img from "../assets/image/png/goll_img.png";
import image from "../assets/image/png/image.png";
import image1 from "../assets/image/png/image1.png";
import sh_img1 from "../assets/image/png/sh_img1.png";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <section className=" pt-md-5 pt-3 d-flex flex-column position-relative justify-content-center flex-grow-1 min_vh_100">
        <img
          className=" shadow_position d-md-block d-none z_index0"
          src={sh_img}
          alt="sh_img"
        />
        <img
          className=" shadow1_position d-md-block d-none z_index0"
          src={sh_img1}
          alt="sh_img"
        />
        <div className="">
          <img
            className=" position-absolute animation common_image d-lg-block d-none"
            src={image1}
            alt="image1"
          />
          <Container>
            <div className=" text-start ps-sm-4 ms-sm-2 ms-0 ms-md-0 ps-md-0 ms-lg-5 ps-lg-5 ms-xl-5 ps-xl-0">
              <div className=" d-inline-block ps-md-1 ps-xxl-5 d-flex align-items-center justify-content-center justify-content-sm-start mt-4">
                <img src={after} alt="after" />
                <p className="fs_xsm  fw_regular mb-0 ps-2  ff_mont text_primary ">
                  Wie Testosteron für deine Agentur
                </p>
              </div>
            </div>
            <h2 className="fs_2xl fw_regular mt-md-0 mt-2 mb-0 heading_strok text-center ff_poiret text-white">
              Wir verhelfen <span className="Agenturen_button">Agenturen</span>{" "}
            </h2>
            <p className="fs_2xl fw_regular mb-0 transform_translat_y heading_strok text-center ff_poiret text-white">
              {" "}
              zu Rekordumsätzen
            </p>
            <div className="row flex-column-reverse flex-md-row align- items-center ">
              <div className="col-md-7 position-relative">
                <img
                  className=" animation d-lg-block d-none position-absolute culd"
                  src={image}
                  alt="image"
                />
                <img
                  className="w-100 translate_middle"
                  src={header_img}
                  alt="header_img"
                />
              </div>
              <div className="col-md-5 position-relative mt-md-5 pt-md-5">
                <img
                  className=" position_image d-lg-block d-none"
                  src={goll_img}
                  alt="goll_img"
                />
                <p className=" text_primary pt-2 text-center pt-md-5 text-md-start mx-auto mx-md-0 common_width ff_mont fs_xsm fw_regular">
                  Zünde die Wachstumsrakete und katapultiere deinen Umsatz in
                  eine neue Dimension!
                </p>{" "}
                <div className="d-flex justify-content-center mt-3 justify-content-md-start">
                  {" "}
                  <a className="common_button" href="#">
                    <a
                      className=" fs_xsm fw_regular pe-3 ff_poiret text_primary"
                      href="#"
                    >
                      Sprich jetzt mit unserem Team
                    </a>
                    <img src={arrow} alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Header;
