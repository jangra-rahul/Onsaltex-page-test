import React from "react";
import face from "../assets/image/png/face.png";
import muc from "../assets/image/png/muc.png";
import in_img from "../assets/image/png/in_img.png";
import insta from "../assets/image/png/insta.png";
import you from "../assets/image/png/you.png";

function Mynavbar(props) {
  return (
    <>
      <section>
        <div className=" bg_green d-sm-block d-none py-2">
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
              <div className="d-sm-flex justify-content-center justify-content-md-start align-items-center">
                <p className=" mb-0 me-2 fs_sm text-center text-md-start fw_regular ff_mont text_primary">
                  22143 Hamburg, Rahlstedter Bah nhofstraße 27-29{" "}
                </p>
                <div className="border_end d-sm-block d-none"></div>
                <p className="mb-0 ms-2 fs_sm text-center text-md-start fw_regular ff_mont text_primary">
                  info@consaltex.de
                </p>
              </div>
              <div className="d-md-block d-md-flex d-none justify-content-center mt-2 mt-md-0 justify-content-md-start align-items-center gap-3">
                <a className={props.display} href="#">
                  <img className="transform_scale" src={face} alt="face" />
                </a>
                <a className={props.display} href="#">
                  <img className="transform_scale" src={muc} alt="muc" />
                </a>
                <a className={props.display} href="#">
                  <img className="transform_scale" src={in_img} alt="in_img" />
                </a>
                <a className={props.display} href="#">
                  <img className="transform_scale" src={insta} alt="insta" />
                </a>
                <a className={props.display} href="#">
                  <img className="transform_scale" src={you} alt="you" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mynavbar;
