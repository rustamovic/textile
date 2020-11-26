import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Line1.css";
import { withTranslation } from "react-i18next";
class Line1 extends Component {
  componentDidMount() {
    $(".menu-collapsed").click(function () {
      $(this).toggleClass("menu-expanded");
    });
  }
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <div id="divv">
        <div className="menu-collapsed">
          <div className="bar"></div>
          <nav>
            <ul>
              <li>
                <Link to="/production" onClick={this.scrollToTop}>
                  <a>{t("Header.1")}</a>
                </Link>
              </li>
              <li>
                <Link to="/production/about" onClick={this.scrollToTop}>
                  <a>{t("Header.2")}</a>
                </Link>
              </li>
              <li>
                <Link to="/production/personnel" onClick={this.scrollToTop}>
                  <a>{t("Header.20")}</a>
                </Link>
              </li>
              <li>
                <Link to="/production/gallery" onClick={this.scrollToTop}>
                  <a>{t("Header.19")}</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Line1);
