import React, { useState } from "react";
import { Container } from "react-bootstrap";
import face from "../assets/image/png/face.png";
import muc from "../assets/image/png/muc.png";
import in_img from "../assets/image/png/in_img.png";
import insta from "../assets/image/png/insta.png";
import you from "../assets/image/png/you.png";
import { Link } from "react-router-dom";
import img from "../assets/image/png/img.png";
import logo from "../assets/image/png/Logo.png";
import box from "../assets/image/png/box.png";
import arrow from "../assets/image/png/arrow.png";
import sh_img1 from "../assets/image/png/sh_img1.png";

function Mainnav() {
  const [name, setName] = useState(false);
  if (name) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className=" z_index_1 py-2 position-relative">
        <img
          className=" nav_position animation d-lg-block d-none"
          src={box}
          alt="box"
        />
        <Container>
          <nav className="">
            <div className="container px-0">
              <div className="d-flex pb-0 align-items-center position-relative z_index justify-content-between">
                <div className="d-md-flex  gap-2  align-items-center">
                  <a className="me-3" href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div
                  onClick={() => setName(true)}
                  className="navdot d-md-none pt-2"
                >
                  <div className="navmanu"></div>
                  <div className="navmanu my-2"></div>
                  <div className="navmanu"></div>
                </div>
                <ul className="d-md-flex gap-3 d-none align-items-center ps-0 mb-0">
                  <Link to="/">
                    <li className="">
                      <a
                        className="text-decoration-none pe-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                        href="#Toke"
                      >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/about">
                    {" "}
                    <li className="">
                      <a
                        className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                        href="#Toke"
                      >
                        Kundenrezensionen
                      </a>
                    </li>
                  </Link>
                  <Link to="/Hiring">
                    <li className="">
                      <a
                        className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                        href="#Toke"
                      >
                        Karriere
                      </a>
                    </li>
                  </Link>
                </ul>{" "}
                <ul className="d-md-flex  d-none gap-3 align-items-center ps-0 mb-0">
                  <div className="d-flex common_button px-0 py-0 align-items-center">
                    <a
                      className=" fs_xsm text_hover common_padding fw_regular pe-2 ff_poiret text_primary"
                      href="#"
                    >
                      Jetzt Erstgespräch vereinbaren
                    </a>
                    <a className="pe-3 " href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                </ul>
              </div>
              <div className={`${name ? "show_nav" : "hide"}`}>
                <a
                  onClick={() => setName(false)}
                  className="d-md-none text-decoration-none d-flex justify-content-end me-3 "
                  href="#"
                >
                  <img className="arrow-position" src={img} alt="img" />
                </a>
                <ul className=" d-md-none d-flex flex-column justify-content-center min-vh-100 align-items-center ps-0  gap-4">
                  <Link to="/">
                    <li className="">
                      <a
                        className="text-decoration-none pe-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                        href="#Toke"
                      >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/about">
                    {" "}
                    <li className="">
                      <a
                        className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                        href="#Toke"
                      >
                        Kundenrezensionen
                      </a>
                    </li>
                  </Link>
                  <Link to="/Hiring">
                    <li className="">
                      <a
                        className="text-decoration-none me-2 ff_poiret text_primary_color fs_xsm fw_regular nav_text_hover"
                        href="#Toke"
                      >
                        Karriere
                      </a>
                    </li>
                  </Link>
                  <div className="d-flex common_button px-0 py-0 align-items-center">
                    <a
                      className=" fs_xsm text_hover common_padding fw_regular pe-2 ff_poiret text_primary"
                      href="#"
                    >
                      Jetzt Erstgespräch vereinbaren
                    </a>
                    <a className="pe-3 " href="#">
                      <img src={arrow} alt="arrow" />
                    </a>
                  </div>
                  <div className="d-md-none d-block justify-content-center mt-2 mt-md-0 justify-content-md-start align-items-center">
                    <a href="#">
                      <img className="me-3" src={face} alt="face" />
                    </a>
                    <a href="#">
                      <img className="me-3" src={muc} alt="muc" />
                    </a>
                    <a href="#">
                      <img className="me-3" src={in_img} alt="in_img" />
                    </a>
                    <a href="#">
                      <img className="me-3" src={insta} alt="insta" />
                    </a>
                    <a href="#">
                      <img src={you} alt="you" />
                    </a>
                  </div>
                </ul>
              </div>
            </div>{" "}
          </nav>
        </Container>
      </section>
    </>
  );
}

export default Mainnav;
