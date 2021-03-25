import React, { Component } from "react";
import { connect } from "react-redux";

import SideDrawer from "parts/sidedrawer/SideDrawer";
import Header from "parts/Header/Header";

import Hero from "parts/Hero.js";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";
import Backdrop from "parts/Backdrop/Backdrop";
import styled, { keyframes } from "styled-components";

import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  state = {
    sideDrawerOpen: false,
  };

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(`/landing-page`, "landingPage");
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("landingPage"))
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

    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Header
          drawerClickHandler={this.drawerToggleClickHandler}
          {...this.props}
        ></Header>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main>
          <Hero
            refMostPicked={this.refMostPicked}
            data={page.landingPage.hero}
          />
          <MostPicked
            refMostPicked={this.refMostPicked}
            data={page.landingPage.mostPicked}
          />
          <Categories data={page.landingPage.category} />
          <Testimoni data={page.landingPage.testimonial} />
          <Footer />
        </main>
      </div>
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

export default connect(mapStateToProps, { fetchPage })(LandingPage);
