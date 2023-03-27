import React from "react";
import after_line from "../assets/image/png/after_line.png";
import twoboy from "../assets/image/png/sdas 1.png";
import Accordion from "react-bootstrap/Accordion";
import sh_img from "../assets/image/png/sh_img.png";
import image2 from "../assets/image/png/image2.png";

function Faq() {
  return (
    <>
      <section className=" position-relative bg_theme py-5">
        <img
          className="position-absolute start-0 d-md-block d-none z_index0"
          src={sh_img}
          alt="sh_img"
        />
        <img
          className=" position-absolute animation common_image_position d-lg-block d-none"
          src={image2}
          alt="image1"
        />
        <div className="container">
          <div className="d-flex justify-content-center align-items-center ">
            <img src={after_line} alt="after_line" />
            <p className="fs_xsm fw_regular mb-0 ps-2 ff_mont text_primary">
              Du hast noch Fragen?
            </p>
          </div>
          <h3
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="fs_xl fw_regular mt-2 text_strok text-white ff_poiret text-center"
          >
            Häufig gestellte<br></br> Fragen
          </h3>
          <div>
            {" "}
            <Accordion
              className="mt-md-5 mt-3 position-relative z_index_1"
              defaultActiveKey="0"
            >
              <Accordion.Item
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="common_accordion_width mx-auto"
                eventKey="0"
              >
                <Accordion.Header className=" fs_md fw_semibold ff_mont mt-4 text_primary text_strok">
                  Was unterscheidet euch von anderen Agenturen?
                </Accordion.Header>
                <Accordion.Body className="fs_xsm px-0 fw_regular ff_mont text_primary_color mb-0 pb-0">
                  Consaltex ist keine Agentur, sondern eine ganzheitliche
                  Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                  im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                  die Geschäftsprozesse in ihrem Zusammenhang und optimieren sie
                  von Grund auf. Das bedeutet: Wir verstehen uns als Partner,
                  nicht als Dienstleister und laufen nicht nur die extra Meile,
                  sondern wenn nötig einen ganzen Marathon, damit dein
                  Unternehmen zu einer echten Umsatzmaschine wird!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="common_accordion_width mx-auto"
                eventKey="1"
              >
                <div className="border_solid mt-4"></div>
                <Accordion.Header className=" fs_md fw_semibold ff_mont mt-4 text_primary text_strok">
                  Brauche ich eure Hilfe?
                </Accordion.Header>
                <Accordion.Body className="fs_xsm fw_regular px-0 ff_mont text_primary_color mb-0 pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="common_accordion_width mx-auto"
                eventKey="2"
              >
                <div className="border_solid mt-4"></div>
                <Accordion.Header className=" fs_md fw_semibold ff_mont mt-4 text_primary text_strok">
                  Wie könnt ihr mir helfen?
                </Accordion.Header>
                <Accordion.Body className="fs_xsm px-0 fw_regular ff_mont text_primary_color mb-0 pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="common_accordion_width mx-auto"
                eventKey="3"
              >
                <div className="border_solid mt-4"></div>
                <Accordion.Header className=" fs_md fw_semibold ff_mont mt-4 text_primary text_strok">
                  Kann man im Internet noch neue Kunden gewinnen?
                </Accordion.Header>
                <Accordion.Body className="fs_xsm px-0 fw_regular ff_mont text_primary_color mb-0 pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="common_accordion_width mx-auto"
                eventKey="4"
              >
                <div className="border_solid mt-4"></div>
                <Accordion.Header className=" fs_md fw_semibold ff_mont mt-4 text_primary text_strok">
                  Gibt es eine eins-zu-eins Betreuung?
                </Accordion.Header>
                <Accordion.Body className="fs_xsm px-0 fw_regular ff_mont text_primary_color mb-0 pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="row justify-content-center mt-5">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="col-sm-8 col-md-6"
            >
              <img className="w-100" src={twoboy} alt="twoboy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
