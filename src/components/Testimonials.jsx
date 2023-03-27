import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import col_img from "../assets/image/png/col-img.png";
import vido from "../assets/image/png/vido.png";
import after_line from "../assets/image/png/after_line.png";
import arrow from "../assets/image/png/arrow.png";
import left_arrow from "../assets/image/png/left_arrow.png";
import right_arrow from "../assets/image/png/right_arrow.png";
import position from "../assets/image/png/position.png";
import sh_img2 from "../assets/image/png/sh_img2.png";
import arrowpng from "../assets/image/png/arrow.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const btnslider = useRef();

  return (
    <section className="Testimonials position-relative  bg_theme py-5 overflow-hidden">
      <img
        className=" shadow3_position d-md-block d-none z_index0"
        src={sh_img2}
        alt="sh_img"
      />
      <img
        className=" position-absolute d-md-block d-none end-0 top-50 translate-middle-y"
        src={position}
        alt="position"
      />
      <div className="container pb-lg-5">
        <div className="row flex-column-reverse flex-md-row justify-con tent-center  ">
          <div className="col-md-8 h-100">
            <div className="row">
              <Slider ref={btnslider} {...settings}>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="col-md-6 px-0 px-sm-2 col-sm-6 mt-4 py-0 p-3 mt-md-0"
                >
                  <div className="box">
                    <div className="position-relative ">
                      <img className="w-100" src={col_img} alt="col_img" />
                      <a href="#">
                        <img
                          className=" position-absolute top-50 start-50 translate-middle mt-3"
                          src={vido}
                          alt="vido"
                        />
                      </a>
                    </div>
                    <div className="p-3">
                      <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="col-md-6 px-0 px-sm-2 col-sm-6 p-3 py-0 mt-4 mt-md-0"
                >
                  <div className="box">
                    <div className="position-relative">
                      <img className="w-100" src={col_img} alt="col_img" />
                      <a href="#">
                        <img
                          className=" position-absolute top-50 start-50 translate-middle mt-3"
                          src={vido}
                          alt="vido"
                        />
                      </a>
                    </div>
                    <div className="p-3">
                      <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="col-md-6 px-0 px-sm-2 col-sm-6 p-3 py-0 mt-4 mt-md-0"
                >
                  <div className="box">
                    <div className="position-relative">
                      <img className="w-100" src={col_img} alt="col_img" />
                      <a href="#">
                        <img
                          className=" position-absolute top-50 start-50 translate-middle mt-3"
                          src={vido}
                          alt="vido"
                        />
                      </a>
                    </div>
                    <div className="p-3">
                      <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                        Die Metarec GmbH unterstützt unter der Leitung des
                        Geschäftsführers Christian Schmitt kleine- und
                        Mittelständische Unternehmen beim Gewinnen von
                        qualifizierten Fachkräfte zur beseitigung des
                        Fachkräftemangels
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="col-md-4 col-sm-6  d-md-block d-none position-relative"
          >
            <div className="d-flex align-items-center ">
              <img src={after_line} alt="after_line" />
              <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
                Das sagen unsere Kunden
              </p>
            </div>{" "}
            <h2 className=" fs_xl text_strok mt-3 fw_regular ff_poiret text-white">
              Testimonials
            </h2>{" "}
            <p className="fs_xsm mb-0 mb-4 pb-2 fw_regular ff_mont text_primary_color">
              Unsere Kunden berichten über die Zusammenarbeit
            </p>
            <a className="common_button" href="#">
              <a
                className=" fs_xsm fw_regular pe-3 ff_poiret text_primary"
                href="#"
              >
                Mehr ansehen
              </a>
              <img src={arrowpng} alt="arrow" />
            </a>
            <div className="d-flex gap-2 align-items-end position-absolute bottom-0 start-0 ms-2">
              <a>
                <img
                  onClick={() => btnslider.current.slickPrev()}
                  src={left_arrow}
                  alt="left_arrow"
                />
              </a>{" "}
              <a>
                <img
                  onClick={() => btnslider.current.slickNext()}
                  src={right_arrow}
                  alt="left_arrow"
                />
              </a>{" "}
            </div>
          </div>
          <div className="col-md-4 col-sm-6 pt-md-0 mt-md-0 d-md-none d-block">
            <div className="d-flex align-items-center ">
              <img src={after_line} alt="after_line" />
              <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
                Das sagen unsere Kunden
              </p>
            </div>{" "}
            <h2 className=" fs_xl text_strok fw_regular ff_poiret text-white">
              Testimonials
            </h2>{" "}
            <p className="fs_xsm mb-0 mb-4 pb-2 fw_regular ff_mont text_primary_color">
              Unsere Kunden berichten über die Zusammenarbeit
            </p>{" "}
            <a className="common_button" href="#">
              <a
                className=" fs_xsm fw_regular pe-3 ff_poiret text_primary"
                href="#"
              >
                Mehr ansehen
              </a>
              <img src={arrowpng} alt="arrow" />
            </a>
            <div className="d-flex gap-2 align-items-end mt-sm-4 pt-2 mt-4 ">
              <a>
                <img
                  onClick={() => btnslider.current.slickPrev()}
                  src={left_arrow}
                  alt="left_arrow"
                />
              </a>{" "}
              <a>
                <img
                  onClick={() => btnslider.current.slickNext()}
                  src={right_arrow}
                  alt="left_arrow"
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
