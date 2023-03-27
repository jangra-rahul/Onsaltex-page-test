import React, { useState } from "react";

import after_line from "../assets/image/png/after_line.png";
import Vector from "../assets/image/png/Vector.png";
import sms from "../assets/image/png/sms.png";
import sh_img1 from "../assets/image/png/sh_img1.png";
import sh_img from "../assets/image/png/sh_img.png";
import image4 from "../assets/image/png/image4.png";
import box from "../assets/image/png/box.png";
import arrowpng from "../assets/image/png/arrow.png";
import { Container } from "react-bootstrap";

function KarriereHeader() {
  return (
    <>
      <section className=" position-relative d-flex flex-column min_vh_100 flex-grow-1 justify-content-center py-md-5 py-xl-0  pt-4 pb-3">
        <img className=" shadow_position z_index0" src={sh_img} alt="sh_img" />
        <img
          className=" shadow1_position z_index0"
          src={sh_img1}
          alt="sh_img"
        />{" "}
        <img
          className="position-absolute d-md-block d-none circle1_position z_index0"
          src={image4}
          alt="image3"
        />{" "}
        <Container className=" pb-5">
          <div className="d-flex justify-content-center align-items-center ">
            <img src={after_line} alt="after_line" />
            <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
              Initiativbewerbung | Consaltex
            </p>
          </div>
          <h3
            data-aos="zoom-in"
            data-aos-duration="1500"
            className=" fs_xl common_accordion_width mx-auto fw_regular ff_poiret text_strok text-white text-center mt-2"
          >
            Werde ein Teil unserer Erfolgsgeschichte
          </h3>
          <div className="row align-items-center justify-content-around mt-4">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="col-md-5"
            >
              <p className="fs_xsm mb-0 text-center text-md-start fw_regular ps-2 ff_mont pb-md-4 pb-3 text_primary_color">
                Wir suchen nach Menschen, die wissen, was sie wollen, wohin sie
                wollen und die ein klares Warum haben.
              </p>
              <a
                className="d-flex justify-content-center justify-content-md-start align-items-center mt-md-5 pt-md-5"
                href="#"
              >
                <img src={Vector} alt="Vector" />
                <p className="fs_xsm fw_regular ms-3 ff_mont text_primary_color mb-0">
                  22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                </p>
              </a>
              <a
                className="d-flex justify-content-center justify-content-md-start align-items-center mt-md-4 mt-2"
                href="#"
              >
                {" "}
                <img src={sms} alt="sms" />
                <p className="fs_xsm fw_regular ms-3 ff_mont text_primary_color mb-0">
                  info@consaltex.de
                </p>
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="col-md-5 mt-5"
            >
              <div className="form_box">
                <form action="">
                  <label
                    className="fs_xsm text_strok fw_regular ff_mont text_primary"
                    htmlFor="Vor- und Nachname"
                  >
                    Vor- und Nachname
                  </label>
                  <div className="mt-2">
                    <input
                      className="w-100 fs_xsm fw_regular ff_mont text_primary_color"
                      type="text"
                    />
                  </div>
                  <label
                    className="fs_xsm text_strok mt-4 fw_regular ff_mont text_primary"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      className="w-100 fs_xsm fw_regular ff_mont text_primary"
                      type="text"
                      placeholder="example@mail.com "
                    />
                  </div>
                  <label
                    className="fs_xsm text_strok mt-4 fw_regular ff_mont text_primary"
                    htmlFor="Erzähl uns von dir"
                  >
                    Erzähl uns von dir
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="w-100 fs_xsm fw_regular ff_mont text_primary p-3"
                      name=""
                      id=""
                      cols="50"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <a className="common_button" href="#">
                      <a
                        className=" fs_xsm fw_regular pe-5 ff_poiret text_primary"
                        href="#"
                      >
                        Absenden
                      </a>
                      <img src={arrowpng} alt="arrow" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default KarriereHeader;
