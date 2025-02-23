import React, { Component } from "react";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumblist = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumblist} />
          </div>
        </div>
      </div>
    );
  }
}
