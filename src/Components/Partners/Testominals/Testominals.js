import React, { Component } from "react";
import "./Testominals.css";
import Photo from "../../../Assets/1-1.png";
import Photo2 from "../../../Assets/2-1.jpg";
import { withTranslation } from "react-i18next";
class Testominals extends Component {
  render() {
    const { t } = this.props;
    return (
      <div id="testom">
        <div className="testimonials">
          <div className="testimonial-inner">
            <h1>{t("Partners.3")}</h1>
            <div className="border"></div>

            <div className="rowww">
              <div className="colll">
                <div className="testimonial">
                  <img
                    src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <div className="name">{t("Partners.8")}</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="colll">
                <div className="testimonial">
                  <img src={Photo} alt="" />
                  <div className="name">{t("Partners.7")}</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="colll">
                <div className="testimonial">
                  <img src={Photo2} alt="" />
                  <div className="name">{t("Partners.9")}</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Testominals);
