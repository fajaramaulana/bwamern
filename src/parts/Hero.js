import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/img-hero.png";
import ImageHero_ from "assets/images/img-hero-frame.png";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTravelers from "assets/images/icons/ic_traveler.svg";
import IconsTreasure from "assets/images/icons/ic_treasure.svg";
import FormatNumber from "utils/formatNumber";
import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    // <p> This is The Page Content!</p>
    <Fade bottom>
      <section className="container pt-1">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-5"
            style={{ width: 500 }}
          >
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTravelers}
                  alt={`${props.data} Travelers`}
                />
                <h6 className="mt-3">
                  {FormatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-wight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 20 }}>
                <img
                  width="36"
                  height="36"
                  src={IconsTreasure}
                  alt={`${props.data} Treasure`}
                />
                <h6 className="mt-3">
                  {FormatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-wight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data} Cities`}
                />
                <h6 className="mt-3">
                  {FormatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-wight-light">Cities</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10 col-xs-6">
            <div className="img-hero-content">
              <img
                src={ImageHero}
                alt="Room With Couches"
                className="img-fluid position-absolute img-hero"
                style={{ zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room With Couches Frame"
                className="img-hero-frame img-fluid position-absolute"
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
