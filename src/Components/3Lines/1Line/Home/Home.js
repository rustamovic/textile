import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slide from "./Slider/Slider";
import Leaders from "./Leaders/Leaders";
import Burger from "../Line1";
import Jumbatron from "./Jumbatron";
import Gallery from "../../Gallery/Gallery";
import { withTranslation } from "react-i18next";
class Home extends Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <div id="htmlk">
        <Burger />
        <Slide />
        <Leaders />
        <div id="wordsss">
          <h3>{t("Header.19")}</h3>
          <Link to="/production/gallery" onClick={this.scrollToTop}>
            {t("Header.21")}
          </Link>
          <Gallery />
        </div>
        <Jumbatron />
      </div>
    );
  }
}

export default withTranslation()(Home);
