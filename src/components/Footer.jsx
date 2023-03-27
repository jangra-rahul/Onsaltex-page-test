import React from "react";
import logo from "../assets/image/png/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className=" position-relative z_index_1 bg_footer pt-md-5 pt-3">
        <div className="container">
          <div className="row align-items-center">
            <ul className=" d-flex flex-sm-column col-sm-3 col-md-2 text-center justify-content-center justify-content-md-start  gap-sm-1 gap-4 align-items-center text-sm-start align-items-sm-start">
              <Link to="/">
                <li className="mt-sm-1">
                  <a
                    className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                    href="#Toke"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li className="mt-sm-1">
                  <a
                    className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                    href="#Toke"
                  >
                    Kundenrezensionen
                  </a>
                </li>
              </Link>
              <Link to="/Hiring">
                <li className="mt-sm-1">
                  <a
                    className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                    href="#Toke"
                  >
                    We´re hiring!
                  </a>
                </li>
              </Link>
            </ul>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className=" col-sm-8 text-center"
            >
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
              <p className="fs_xsm ff_mont fw_regular text_primary_color mb-0 mt-2">
                Der Sparringspartner für die Skalierung<br></br> deines
                Unternehmens.
              </p>
            </div>
          </div>
        </div>
        <div className="border_line mt-md-5 mt-4"></div>
        <p className="fs_xsm ff_mont fw_regular text_primary_color mb-0  py-4 text-center ">
          Impressum | Datenschutz | AGBS
        </p>
      </section>
    </>
  );
}

export default Footer;
