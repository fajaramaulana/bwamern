import React, { Component } from "react";
import Header from "parts/Header/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimonial from "parts/Testimoni";
import Footer from "parts/Footer";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

import SideDrawer from "parts/sidedrawer/SideDrawer";
import Backdrop from "parts/Backdrop/Backdrop";

import styled, { keyframes } from "styled-components";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
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
    const { page, match } = this.props;

    if (!page[match.params.id])
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                <DotWrapper>
                  <p className="h2 mr-2">Loading</p>
                  <Dot delay="0s" />
                  <Dot delay=".1s" />
                  <Dot delay=".2s" />
                </DotWrapper>
              </div>
            </div>
          </div>
        </div>
      );

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
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-s-12 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-lg-5 col-md-12 col-s-12">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>

        <Activities data={page[match.params.id].activityId} />
        <Testimonial data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
