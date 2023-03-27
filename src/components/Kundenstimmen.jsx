import React from "react";
import { Video_box } from "./Mymap";
import Cube from "../assets/image/png/Cube.png";
import sh_img from "../assets/image/png/sh_img.png";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

function Kundenstimmen() {
  return (
    <>
      <section className="position-relative bg_theme py-5 pt-md-5 pt-0">
        <img
          className=" shadow_circle1_position d-md-block d-none z_index0"
          src={sh_img}
          alt="sh_img"
        />
        <img
          className="position-absolute d-md-block d-none bottom-0 start-0"
          src={Cube}
          alt="Cube"
        />
        <Container className="pb-md-5">
          <h3 className="fs_xl  position-relative z_index_1 fw_regular text_strok text-white ff_poiret">
            Kundenstimmen
          </h3>
          <div className="row d-sm-flex d-none justify-content-center mt-1 pb-md-5 mb-md-5">
            {Video_box.map((data) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="col-md-4 col-sm-6 mt-4"
                >
                  <div className="box  position-relative z_index_1">
                    <div className="position-relative">
                      <img className="w-100" src={data.image_1} alt="image_1" />
                      <img
                        className="position-absolute top-50 start-50 translate-middle mt-3"
                        src={data.image_2}
                        alt="image_1"
                      />
                    </div>
                    <div className="p-3">
                      <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                        {data.p}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Carousel className="d-sm-none d-flex mt-sm-3">
            <Carousel.Item>
              {Video_box.slice(0, 1).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(1, 2).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(2, 3).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(3, 4).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(4, 5).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(5, 6).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(6, 7).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(7, 8).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(8, 9).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
            <Carousel.Item>
              {Video_box.slice(9, 10).map((data) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="col-md-4 col-sm-6 mt-4"
                  >
                    <div className="box  position-relative z_index_1">
                      <div className="position-relative">
                        <img
                          className="w-100"
                          src={data.image_1}
                          alt="image_1"
                        />
                        <img
                          className="position-absolute top-50 start-50 translate-middle mt-3"
                          src={data.image_2}
                          alt="image_1"
                        />
                      </div>
                      <div className="p-3">
                        <p className="fs_xsm mb-0 fw_regular ff_mont text_primary_color">
                          {data.p}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default Kundenstimmen;
