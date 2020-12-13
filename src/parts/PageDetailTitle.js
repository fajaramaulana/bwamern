import React from "react";
import Fade from "react-reveal/Fade";
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-lg col-sm-12">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-lg-auto col-sm-12 text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col details-penunjang"></div>
        </div>
      </Fade>
    </section>
  );
}
