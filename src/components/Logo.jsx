import React from "react";
import after_line from "../assets/image/png/after_line.png";
import hgk from "../assets/image/png/hgk.png";
import trust from "../assets/image/png/trust.png";
import labxma from "../assets/image/png/labxma.png";
import fibeka from "../assets/image/png/fibeka.png";
import media from "../assets/image/png/media.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Logo() {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    initialSlide: 0,
    autoplayspped: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <>
      <section className=" bg_theme pt-5">
        <div className="container pt-5 pb-md-2">
          <div className="d-flex position-static z_index_1 pt-md-4 justify-content-center align-items-center ">
            <img src={after_line} alt="after_line" />
            <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
              Das sagen unsere Kunden
            </p>
          </div>

          <div className=" position-relative mt-3 z_index_1 justify-content-between justify-content-center mt-sm-4 align-items-center">
            <Slider {...settings}>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className=" d-flex justify-content-center"
              >
                <img className="logo1_image" src={hgk} alt="hgk" />{" "}
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className=" d-flex justify-content-center "
              >
                <img className="logo2_image" src={trust} alt="trust" />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className=" d-flex justify-content-center "
              >
                <img className="logo3_image" src={labxma} alt="labxma" />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className=" d-flex justify-content-center "
              >
                <img className="logo4_image" src={fibeka} alt="fibeka" />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className=" position-static mt-3 z_index_1 d-flex justify-content-center "
              >
                <img className="logo5_image" src={media} alt="media" />
              </div>{" "}
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className=" d-flex justify-content-center "
              >
                <img className="logo3_image" src={labxma} alt="labxma" />
              </div>
            </Slider>
          </div>
          {/* </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Logo;
