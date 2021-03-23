import React, { Component } from "react";
import Header from "parts/Header/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimoni";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";

import SideDrawer from "parts/sidedrawer/SideDrawer";
import Backdrop from "parts/Backdrop/Backdrop";

import ItemDetails from "../json/itemDetails.json";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];
    return (
      <>
        <Header
          {...this.props}
          drawerClickHandler={this.drawerToggleClickHandler}
          {...this.props}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-s-12 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-lg-5 col-md-12 col-s-12">
              <BookingForm
                itemDetails={ItemDetails}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimonial data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailsPage);
