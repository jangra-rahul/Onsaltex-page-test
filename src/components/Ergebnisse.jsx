import React from "react";
import image8 from "../assets/image/png/image8.png";
import sh_img from "../assets/image/png/sh_img.png";
import box1 from "../assets/image/png/box1.png";
import arrowpng from "../assets/image/png/arrow.png";

function Ergebnisse() {
  return (
    <>
      <section className=" position-relative bg_theme py-5">
        <img
          className="shadow4_position d-md-block d-none z_index0"
          src={sh_img}
          alt="sh_img"
        />
        <img
          className="pink_cube animation d-md-block d-none bottom-0 start-0 d-lg-block d-none"
          src={box1}
          alt="box"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fs_xl  position-relative z_index_1 fw_regular text_strok ff_poiret text-white ">
                Wir liefern Ergebnisse
              </h2>
              <p className="fs_xsm  position-relative z_index_1 fw_regular mt-3 ff_mont mb-0 text_primary_color">
                Wir sind vielleicht nicht der größte Player in der Branche, aber
                auf dem Weg dorthin. Aber vor allem sind wir hungrig darauf,
                gemeinsam mit Unternehmern wie dir Erfolgsgeschichten zu
                schreiben.
              </p>
              <p className="fs_xsm fw_regular  position-relative z_index_1 ff_mont mb-0 mt-2 text_primary_color">
                Wenn andere aufgeben, werden wir erst richtig warm. Wir sind der
                Ansprechpartner für umkämpfte Märkte, komplizierte Kunden,
                erklärungsbedürftige Services und scheinbar aussichtslose Fälle.
                Wir sind das Spezialeinsatzkommando für Agenturen.
              </p>
              <p className="fs_xsm fw_regular  position-relative z_index_1 mb-md-4 mb-lg-5 mb-4 ff_mont mb-0 mt-2 text_primary_color">
                Unser Herz schlägt für den Underdog: David gegen Goliath -
                Marketing, Vertrieb, interne Prozesse: Unser Team gibt für dich
                110 Prozent - weil dein Erfolg unsere Motivation ist.
              </p>
              <a className="common_button position-relative z_index_1" href="#">
                <a
                  className=" fs_xsm fw_regular pe-3 ff_poiret text_primary"
                  href="#"
                >
                  Jetzt Erstgespräch vereinbaren
                </a>
                <img src={arrowpng} alt="arrow" />
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="col-md-5 mt-4  position-relative z_index_1 mt-md-0"
            >
              <img className="w-100" src={image8} alt="image8" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ergebnisse;
