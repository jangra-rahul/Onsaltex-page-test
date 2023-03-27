import React from "react";
import after_line from "../assets/image/png/after_line.png";
import { myvideo } from "./Mymap";
import sh_img2 from "../assets/image/png/sh_img2.png";
import green_culb from "../assets/image/png/green-cueb.png";
import position from "../assets/image/png/position.png";
import Carousel from "react-bootstrap/Carousel";
import arrowpng from "../assets/image/png/arrow.png";
import { Container } from "react-bootstrap";

function Videos() {
  return (
    <>
      <section className=" position-relative bg_theme py-5 pt-sm-5 pt-4">
        <img
          className=" shadow6_position d-md-block d-none z_index0"
          src={sh_img2}
          alt="sh_img"
        />
        <img
          className="green_culb animation d-md-block d-none z_index0"
          src={green_culb}
          alt="sh_img"
        />
        <img
          className=" position-absolute d-md-block d-none common_position"
          src={position}
          alt="position"
        />
        <Container className=" pb-md-0 pb-xxl-0">
          <div className="d-flex justify-content-center align-items-center ">
            <img src={after_line} alt="after_line" />
            <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
              Videos
            </p>
          </div>
          <h3
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fs_xl fw_regular mt-2 text_strok text-white ff_poiret text-center"
          >
            Aktuelle Themen
          </h3>
          <div className="row d-sm-flex d-none position-relative z_index_1 justify-content-center mt-sm-5 mt-2">
            {myvideo.map((data) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="col-md-4 mb-3 col-sm-6 mt-4 mt-md-0"
                >
                  <div className="box">
                    <img className="w-100" src={data.image} alt="image" />
                    <div className="p-3">
                      <i className=" fs_xsm fw_regular ff_mont text_primary_color">
                        {data.p}
                      </i>
                      <h3 className="fs_md mt-1 fw_semibold ff_mont text-white">
                        {data.h3}
                      </h3>
                      <h4 className=" fs_md pt-4 fw_semibold ff_mont text_tertiary">
                        {data.h4}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <Carousel className="d-sm-none d-flex mt-sm-3">
              <Carousel.Item>
                {myvideo.slice(0, 1).map((data) => {
                  return (
                    <div
                      // data-aos="zoom-in"
                      // data-aos-duration="1500"
                      className="col-md-4 mb-3 col-sm-6 mt-4 mt-md-0"
                    >
                      <div className="box">
                        <img className="w-100" src={data.image} alt="image" />
                        <div className="p-3">
                          <i className=" fs_xsm fw_regular ff_mont text_primary_color">
                            {data.p}
                          </i>
                          <h3 className="fs_md mt-1 fw_semibold ff_mont text-white">
                            {data.h3}
                          </h3>
                          <h4 className=" fs_md pt-4 fw_semibold ff_mont text_tertiary">
                            {data.h4}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel.Item>
              <Carousel.Item>
                {myvideo.slice(1, 2).map((data) => {
                  return (
                    <div
                      // data-aos="zoom-in"
                      // data-aos-duration="1500"
                      className="col-md-4 mb-3 col-sm-6 mt-4 mt-md-0"
                    >
                      <div className="box">
                        <img className="w-100" src={data.image} alt="image" />
                        <div className="p-3">
                          <i className=" fs_xsm fw_regular ff_mont text_primary_color">
                            {data.p}
                          </i>
                          <h3 className="fs_md mt-1 fw_semibold ff_mont text-white">
                            {data.h3}
                          </h3>
                          <h4 className=" fs_md pt-4 fw_semibold ff_mont text_tertiary">
                            {data.h4}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel.Item>
              <Carousel.Item>
                {myvideo.slice(2, 3).map((data) => {
                  return (
                    <div
                      // data-aos="zoom-in"
                      // data-aos-duration="1500"
                      className="col-md-4 mb-3 col-sm-6 mt-4 mt-md-0"
                    >
                      <div className="box">
                        <img className="w-100" src={data.image} alt="image" />
                        <div className="p-3">
                          <i className=" fs_xsm fw_regular ff_mont text_primary_color">
                            {data.p}
                          </i>
                          <h3 className="fs_md mt-1 fw_semibold ff_mont text-white">
                            {data.h3}
                          </h3>
                          <h4 className=" fs_md pt-4 fw_semibold ff_mont text_tertiary">
                            {data.h4}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="d-flex justify-content-center mt-sm-5 mt-3">
            <a className="common_button" href="#">
              <a
                className=" fs_xsm fw_regular pe-3 ff_poiret text_primary"
                href="#"
              >
                Mehr ansehen
              </a>
              <img src={arrowpng} alt="arrow" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Videos;
