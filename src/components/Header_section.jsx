import React, { useState } from "react";
import img from "../assets/image/png/img.png";
import logo from "../assets/image/png/Logo.png";
import arrow from "../assets/image/png/arrow.png";
import col_img1 from "../assets/image/png/col-img1.png";
import vido from "../assets/image/png/vido.png";
import sh_img1 from "../assets/image/png/sh_img1.png";
import sh_img from "../assets/image/png/sh_img.png";
import image3 from "../assets/image/png/image4.png";

function Header_section() {
  return (
    <>
      <section className="bg_theme d-flex min_vh_100 flex-column justify-content-center  flex-grow-1 position-relative">
        <img
          className="position-absolute d-md-block d-none circle_position z_index0"
          src={image3}
          alt="image3"
        />
        <img
          className=" shadow_circle_position d-md-block d-none z_index0"
          src={sh_img}
          alt="sh_img"
        />
        <img
          className=" shadow1_position d-md-block d-none z_index0"
          src={sh_img1}
          alt="sh_img"
        />

        <div className="py-md-5">
          <div className="container ">
            <div className="box_cards">
              <div className="position-relative ">
                {" "}
                <img className="w-100" src={col_img1} alt="col_img" />
                <a href="#">
                  {" "}
                  <img
                    className=" position-absolute top-50 start-50 translate-middle mt-3"
                    src={vido}
                    alt="vido"
                  />
                </a>
              </div>
              <div className="p-3">
                <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                  Sit nec cras varius leo sit consectetur eros. Odio egestas
                  malesuada interdum scelerisque sed facilisis tincidunt arcu.
                  Ut scelerisque sodales senectus feugiat sem nec consequat. Sed
                  erat aliquet euismod sed pellentesque ut ornare integer risus.
                  Nam varius et scelerisque amet a suscipit felis. Amet odio
                  aliquam orci et et ac. Quam non neque condimentum consequat
                  augue odio malesuada. Est sit faucibus egestas pretium ipsum
                  elementum turpis ultrices lacus. Leo aliquam, orci, in
                  facilisis venenatis enim. Feugiat dictumst eget amet eget.
                  Molestie mollis risus porta a magna a. Pellentesque at enim
                  ultricies tortor enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header_section;
