import React, { Component } from "react";

import SideDrawer from "parts/sidedrawer/SideDrawer";
import Header from "parts/Header/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero.js";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Backdrop from "parts/Backdrop/Backdrop";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
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
    return (
      <div style={{ height: "100%" }}>
        <Header
          drawerClickHandler={this.drawerToggleClickHandler}
          {...this.props}
        ></Header>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main>
          <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
          <MostPicked
            refMostPicked={this.refMostPicked}
            data={landingPage.mostPicked}
          />
          <Categories data={landingPage.categories} />
        </main>
      </div>
    );
  }
}
