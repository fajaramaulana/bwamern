import React from "react";
import Star from "elements/star";
import TestimoniAccent from "../assets/images/frame.png";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Testimoni({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" stlye={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimoniAccent}
                alt="Testimonial"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h4 className="testimoni-nama" style={{ marginBottom: 40 }}>
              {data.name}
            </h4>
            <div className="testimoni-stars">
              <Star value={data.rate} width={35} height={35} spacing={4} />
            </div>
            <h5 className="testimoni-content h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="testimoni-dari text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div className="testimoni-dari">
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
