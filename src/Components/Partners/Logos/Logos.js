import React, { Component } from "react";
import Slider from "react-slick";
import { withTranslation } from "react-i18next";
import "./Logos.css";

import Slide1 from "../../../Assets/Clients/client-logo-1.png";
import Slide2 from "../../../Assets/Clients/client-logo-2.png";
import Slide3 from "../../../Assets/Clients/client-logo-3.png";
import Slide4 from "../../../Assets/Clients/client-logo-4.png";
import Slide5 from "../../../Assets/Clients/client-logo-5.png";
import Slide6 from "../../../Assets/Clients/client-logo-6.png";
import Slide7 from "../../../Assets/Clients/client-logo-7.png";
import Slide8 from "../../../Assets/Clients/client-logo-8.png";
import Slide10 from "../../../Assets/Clients/client-logo-10.png";
import Slide11 from "../../../Assets/Clients/client-logo-11.png";
import Slide12 from "../../../Assets/Clients/client-logo-12.png";
import Slide13 from "../../../Assets/Clients/client-logo-13.png";
import Slide14 from "../../../Assets/Clients/client-logo-14.png";
import Slide15 from "../../../Assets/Clients/client-logo-15.png";
import Slide16 from "../../../Assets/Clients/client-logo-16.png";
import Slide17 from "../../../Assets/Clients/client-logo-17.png";
import Slide18 from "../../../Assets/Clients/client-logo-18.png";
import Slide19 from "../../../Assets/Clients/client-logo-19.png";
class Logos extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1700,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("Partners.1")}</h3>
          <p>{t("Partners.2")}</p>
        </div>
        <Slider {...settings}>
          <div className="slide">
            <img src={Slide1} alt="" />
          </div>
          <div className="slide">
            <img src={Slide2} alt="" />
          </div>
          <div className="slide">
            <img src={Slide3} alt="" />
          </div>
          <div className="slide">
            <img src={Slide4} alt="" />
          </div>
          <div className="slide">
            <img src={Slide5} alt="" />
          </div>
          <div className="slide">
            <img src={Slide6} alt="" />
          </div>
          <div className="slide">
            <img src={Slide7} alt="" />
          </div>
          <div className="slide">
            <img src={Slide8} alt="" />
          </div>
          <div className="slide">
            <img src={Slide10} alt="" />
          </div>
          <div className="slide">
            <img src={Slide11} alt="" />
          </div>
          <div className="slide">
            <img src={Slide12} alt="" />
          </div>
          <div className="slide">
            <img src={Slide13} alt="" />
          </div>
          <div className="slide">
            <img src={Slide14} alt="" />
          </div>
          <div className="slide">
            <img src={Slide15} alt="" />
          </div>
          <div className="slide">
            <img src={Slide16} alt="" />
          </div>
          <div className="slide">
            <img src={Slide17} alt="" />
          </div>
          <div className="slide">
            <img src={Slide18} alt="" />
          </div>
          <div className="slide">
            <img src={Slide19} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default withTranslation()(Logos);
