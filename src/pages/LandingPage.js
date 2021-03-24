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
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        "landingPage"
      );
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
    console.log(page);
    if (!page.hasOwnProperty("landingPage")) return null;

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

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
