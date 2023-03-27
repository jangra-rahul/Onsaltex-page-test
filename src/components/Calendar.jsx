import React from "react";
import after_line from "../assets/image/png/after_line.png";
import Vector from "../assets/image/png/Vector.png";
import sms from "../assets/image/png/sms.png";
import arrow from "../assets/image/png/arrow.png";
import arrow1 from "../assets/image/png/arrow1.png";
import arrow_1 from "../assets/image/png/arrow.png";
import image3 from "../assets/image/png/image3.png";
import sh_img2 from "../assets/image/png/sh_img2.png";
import { Container } from "react-bootstrap";

function Calendar() {
  return (
    <>
      <section className="py-5  overflow-hidden position-relative bg_theme">
        <img
          className=" position-absolute top-0 start-0 d-lg-block d-none"
          src={image3}
          alt="image1"
        />{" "}
        <img
          className=" footer_shadow_position d-md-block d-none z_index0"
          src={sh_img2}
          alt="sh_img"
        />
        <Container className=" pb-md-5 position-relative z_index_1">
          <div className="row mt-md-3 justify-content-around">
            <div className="col-md-6 mt-md-4">
              {" "}
              <div className="d-flex align-items-center ">
                <img src={after_line} alt="after_line" />
                <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
                  Noch Fragen?
                </p>
              </div>
              <h3 className="fs_xl fw_regular mt-2 ff_poiret text_strok text-white ">
                Jetzt Erstgespräch vereinbaren
              </h3>
              <p className="fs_xsm fw_regular ff_mont text_primary_color mb-0 mt-2">
                Fülle das Formular aus und ein Experte aus unserem Team wird
                sich zum ausgewählten Zeitfenster bei dir melden.
              </p>
              <div className="border_bottom mx-auto mt-5"></div>
              <a className="d-flex align-items-center mt-4" href="#">
                <img src={Vector} alt="Vector" />
                <p className="fs_xsm fw_regular ms-3 ff_mont text_primary_color mb-0">
                  22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                </p>
              </a>
              <a className="d-flex align-items-center mt-4" href="#">
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
              className="col-md-5 px-lg-5 py-0 px-sm-3 mt-5 mt-md-0"
            >
              <div className="form_box">
                <div className="d-flex align-items-center justify-content-between">
                  <a href="#">
                    <img src={arrow1} alt="arrow1" />
                  </a>
                  <a
                    className=" fs_xsm fw_regular ff_mont text_primary mb-0"
                    href="#"
                  >
                    October
                  </a>
                  <a href="#">
                    {" "}
                    <img src={arrow} alt="arrow" />
                  </a>{" "}
                </div>
                <table className="mt-4 d-flex justify-content-between w-100 text-center">
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm fw_regular ff_mont text_primary">
                      Sun
                    </th>
                    <td className="table_text_hover fs_xsm mt-3 fw_regular ff_mont table_text_color">
                      25
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      02
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      09
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      16
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      23
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      30
                    </td>
                  </tr>
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm  fw_regular ff_mont text_primary">
                      Mon
                    </th>
                    <td className="fs_xsm table_text_hover mt-3 fw_regular ff_mont table_text_color">
                      26
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      03
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      10
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      17
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      24
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      31
                    </td>
                  </tr>
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm  fw_regular ff_mont text_primary">
                      Tue
                    </th>
                    <td className="fs_xsm table_text_hover mt-3 fw_regular ff_mont table_text_color">
                      27
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      04
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      11
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      18
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      25
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont table_text_color">
                      01
                    </td>
                  </tr>
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm  fw_regular ff_mont text_primary">
                      Wed
                    </th>
                    <td className="fs_xsm table_text_hover mt-3 fw_regular ff_mont table_text_color">
                      28
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      05
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      12
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      19
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      26
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont table_text_color">
                      02
                    </td>
                  </tr>
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm  fw_regular ff_mont text_primary">
                      Thu
                    </th>
                    <td className="fs_xsm table_text_hover mt-3 fw_regular ff_mont table_text_color">
                      29
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      06
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      13
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      20
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont text_primary">
                      27
                    </td>
                    <td className="fs_xsm table_text_hover mt-2 fw_regular ff_mont table_text_color">
                      03
                    </td>
                  </tr>
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm  fw_regular ff_mont text_primary">
                      Fri
                    </th>
                    <td className="fs_xsm px-1 table_text_hover mt-3 fw_regular ff_mont table_text_color">
                      30
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      07
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      14
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      21
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      28
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont table_text_color">
                      04
                    </td>
                  </tr>
                  <tr className=" d-flex flex-column">
                    <th className="fs_xsm  fw_regular ff_mont text_primary">
                      Sat
                    </th>
                    <td className="fs_xsm px-1 table_text_hover mt-3 fw_regular ff_mont text_primary">
                      01
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      08
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      15
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      22
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont text_primary">
                      29
                    </td>
                    <td className="fs_xsm px-1 table_text_hover mt-2 fw_regular ff_mont table_text_color">
                      05
                    </td>
                  </tr>
                </table>
                <h2 className="fs_xsm fw_semibold mt-4 pt-2 mb-3 ff_mont text-center text-white">
                  Timings
                </h2>
                <div className="row p-2">
                  <div className="col-6 p-1">
                    <button className="w-100 fs_xsm fw_regular text_primary table_button">
                      1.00 PM-2.00 PM
                    </button>
                  </div>
                  <div className="col-6 p-1">
                    <button className="w-100 fs_xsm fw_regular text_primary table_button">
                      3.00 PM-4.00 PM
                    </button>
                  </div>{" "}
                  <div className="col-6 p-1">
                    <button className="w-100 fs_xsm fw_regular text_primary table_button">
                      6.00 PM-8.00 PM
                    </button>
                  </div>
                </div>
                <div className="row justify-content-center mt-2 ">
                  {" "}
                  <div className="col-6">
                    <div className="d-flex justify-content-between common_button px-0 py-0 align-items-center">
                      <a
                        className=" fs_xsm text_hover common_padding fw_regular ff_poiret text_primary"
                        href="#"
                      >
                        Submit
                      </a>
                      <a className=" pe-3" href="#">
                        <img src={arrow_1} alt="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>{" "}
      </section>
    </>
  );
}

export default Calendar;
