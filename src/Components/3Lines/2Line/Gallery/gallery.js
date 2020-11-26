import React, { Component } from "react";
import $ from "jquery";
import { withTranslation } from "react-i18next";
import Photo1 from "../../../../Assets/ish/knitting/1.jpg";
import Photo2 from "../../../../Assets/ish/knitting/2.jpg";
import Photo3 from "../../../../Assets/ish/knitting/3.jpg";
import Photo4 from "../../../../Assets/ish/knitting/4.jpg";
import Photo5 from "../../../../Assets/ish/knitting/5.jpg";
import Photo6 from "../../../../Assets/ish/knitting/6.jpg";
import Photo7 from "../../../../Assets/ish/knitting/7.jpg";
import Photo8 from "../../../../Assets/ish/knitting/8.jpg";
import Photo9 from "../../../../Assets/ish/knitting/9.jpg";
import Photo10 from "../../../../Assets/ish/knitting/10.jpg";
import Photo11 from "../../../../Assets/ish/knitting/11.jpg";
import Photo12 from "../../../../Assets/ish/knitting/12.jpg";
import Photo13 from "../../../../Assets/ish/knitting/17.jpg";
import Photo14 from "../../../../Assets/ish/knitting/18.jpg";
import Photo15 from "../../../../Assets/ish/knitting/19.jpg";
import Photo16 from "../../../../Assets/ish/knitting/20.jpg";
class gallery extends Component {
  componentDidMount() {
    $(document).ready(function () {
      /* Hero Case study images */

      $(".case-study-name:nth-child(1)").on("mouseenter", function () {
        $(".case-study-name.active").removeClass("active");
        $(".case-study-images li.show").removeClass("show");
        $(".case-study-images li:nth-child(1)").addClass("show");
        $(".case-study-name:nth-child(1)").addClass("active");
      });
      $(".case-study-name:nth-child(2)").on("mouseenter", function () {
        $(".case-study-name.active").removeClass("active");
        $(".case-study-images li.show").removeClass("show");
        $(".case-study-images li:nth-child(2)").addClass("show");
        $(".case-study-name:nth-child(2)").addClass("active");
      });
      $(".case-study-name:nth-child(3)").on("mouseenter", function () {
        $(".case-study-name.active").removeClass("active");
        $(".case-study-images li.show").removeClass("show");
        $(".case-study-images li:nth-child(3)").addClass("show");
        $(".case-study-name:nth-child(3)").addClass("active");
      });
      $(".case-study-name:nth-child(4)").on("mouseenter", function () {
        $(".case-study-name.active").removeClass("active");
        $(".case-study-images li.show").removeClass("show");
        $(".case-study-images li:nth-child(4)").addClass("show");
        $(".case-study-name:nth-child(4)").addClass("active");
      });
      $(".case-study-name:nth-child(1)").trigger("mouseenter");
    });
  }
  render() {
    const { t } = this.props;
    return (
      <div id="ggg">
        <div class="section">
          <ul class="case-study-wrapper">
            <li class="case-study-name">
              <a href="#" class="hover-target">
                {t("GallName.1")}
              </a>
            </li>
            <li class="case-study-name">
              <a href="#" class="hover-target">
                {t("GallName.2")}
              </a>
            </li>
            <li class="case-study-name">
              <a href="#" class="hover-target">
                {t("GallName.3")}
              </a>
            </li>
            <li class="case-study-name">
              <a href="#" class="hover-target">
                {t("GallName.4")}
              </a>
            </li>
          </ul>
          <ul class="case-study-images">
            <li>
              <div class="img-hero-background">
                <span>
                  <img src={Photo1} alt="" />
                </span>
                <span>
                  <img src={Photo2} alt="" />
                </span>
                <span>
                  <img src={Photo3} alt="" />
                </span>
                <span>
                  <img src={Photo4} alt="" />
                </span>
              </div>
              <div class="hero-number-back">01</div>
              <div class="hero-number">01</div>
              <div class="hero-number-fixed">05</div>
            </li>
            <li>
              <div class="img-hero-background">
                <span>
                  <img src={Photo5} alt="" />
                </span>
                <span>
                  <img src={Photo6} alt="" />
                </span>
                <span>
                  <img src={Photo7} alt="" />
                </span>
                <span>
                  <img src={Photo8} alt="" />
                </span>
              </div>
              <div class="hero-number-back">02</div>
              <div class="hero-number">02</div>
            </li>
            <li>
              <div class="img-hero-background">
                <span>
                  <img src={Photo9} alt="" />
                </span>
                <span>
                  <img src={Photo10} alt="" />
                </span>
                <span>
                  <img src={Photo11} alt="" />
                </span>
                <span>
                  <img src={Photo12} alt="" />
                </span>
              </div>
              <div class="hero-number-back">03</div>
              <div class="hero-number">03</div>
            </li>
            <li>
              <div class="img-hero-background">
                <span>
                  <img src={Photo13} alt="" />
                </span>
                <span>
                  <img src={Photo14} alt="" />
                </span>
                <span>
                  <img src={Photo15} alt="" />
                </span>
                <span>
                  <img src={Photo16} alt="" />
                </span>
              </div>
              <div class="hero-number-back">04</div>
              <div class="hero-number">04</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withTranslation()(gallery);
