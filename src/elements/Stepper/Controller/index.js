import React from "react";
import Fade from "react-reveal/Fade";

export default function Controller(props) {
  return (
    <Fade>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            {props.children}
          </div>
        </div>
      </section>
    </Fade>
  );
}
