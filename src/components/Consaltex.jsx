import React from "react";
import after_line from "../assets/image/png/after_line.png";
import Mymap from "./Mymap";
import image1 from "../assets/image/png/image1.png";
import Carousel from "react-bootstrap/Carousel";

function Consaltex() {
  return (
    <>
      <section className=" position-relative bg_theme py-5">
        <img
          className=" position-absolute animation d-lg-block d-none top-0"
          src={image1}
          alt="image1"
        />
        <div className="container">
          <div className="d-flex justify-content-center align-items-center ">
            <img src={after_line} alt="after_line" />
            <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
              Das sagen unsere Kunden
            </p>
          </div>
          <h3
            data-aos="zoom-in"
            data-aos-duration="1500"
            className=" fs_xl fw_regular ff_poiret text_strok text-white text-center mt-2"
          >
            Unser Team
          </h3>
          <div className="row d-sm-flex mt-md-5 d-none position-relative z_index_1 justify-content-center">
            {Mymap.map((data) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className="col-md-4 col-sm-6 mt-sm-4 mt-3"
                >
                  <div className="box">
                    <img className="w-100" src={data.image} alt="" />
                    <div className="p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="mt-2">
                          <h2 className=" fs_lg fw_semibold mb-0 ff_mont text-white ">
                            {data.h3}
                          </h2>
                          <h2 className="fs_xsm fw_semibold ff_mont text-white mt-2">
                            {data.p}
                          </h2>
                        </div>
                        <a href="#">
                          {" "}
                          <img src={data.img} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <Carousel className="d-sm-none d-flex mt-sm-3 ">
              <Carousel.Item>
                {Mymap.slice(0, 1).map((data) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      className="col-md-4 col-sm-6 mt-4"
                    >
                      <div className="box">
                        <img className="w-100" src={data.image} alt="" />
                        <div className="p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="mt-2">
                              <h2 className=" fs_lg fw_semibold mb-0 ff_mont text-white ">
                                {data.h3}
                              </h2>
                              <h2 className="fs_xsm fw_semibold ff_mont text-white mt-2">
                                {data.p}
                              </h2>
                            </div>
                            <a href="#">
                              {" "}
                              <img src={data.img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel.Item>
              <Carousel.Item>
                {Mymap.slice(1, 2).map((data) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      className="col-md-4 col-sm-6 mt-4"
                    >
                      <div className="box">
                        <img className="w-100" src={data.image} alt="" />
                        <div className="p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="mt-2">
                              <h2 className=" fs_lg fw_semibold mb-0 ff_mont text-white ">
                                {data.h3}
                              </h2>
                              <h2 className="fs_xsm fw_semibold ff_mont text-white mt-2">
                                {data.p}
                              </h2>
                            </div>
                            <a href="#">
                              {" "}
                              <img src={data.img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel.Item>
              <Carousel.Item>
                {Mymap.slice(2, 3).map((data) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      className="col-md-4 col-sm-6 mt-4"
                    >
                      <div className="box">
                        <img className="w-100" src={data.image} alt="" />
                        <div className="p-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="mt-2">
                              <h2 className=" fs_lg fw_semibold mb-0 ff_mont text-white ">
                                {data.h3}
                              </h2>
                              <h2 className="fs_xsm fw_semibold ff_mont text-white mt-2">
                                {data.p}
                              </h2>
                            </div>
                            <a href="#">
                              {" "}
                              <img src={data.img} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Consaltex;
