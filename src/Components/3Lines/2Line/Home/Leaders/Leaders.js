import React, { Component } from "react";
import { MDBContainer, MDBCardImage, MDBIcon } from "mdbreact";
import { withTranslation } from "react-i18next";
import $ from "jquery";
import { Link } from "react-router-dom";
import Person from "../../../../../Assets/men.jpg";
import Photo from "../../../../../Assets/Personnel/17.JPG";
import Photo2 from "../../../../../Assets/Personnel/19.JPG";
import Photo3 from "../../../../../Assets/Personnel/21.JPG";
class Leaders extends Component {
  componentDidMount() {
    $(function () {
      $(".material-card > .mc-btn-action").click(function () {
        var card = $(this).parent(".material-card");
        var icon = $(this).children("i");
        icon.addClass("fa-spin-fast");

        if (card.hasClass("mc-active")) {
          card.removeClass("mc-active");

          window.setTimeout(function () {
            icon
              .removeClass("fa-arrow-left")
              .removeClass("fa-spin-fast")
              .addClass("fa-bars");
          }, 800);
        } else {
          card.addClass("mc-active");

          window.setTimeout(function () {
            icon
              .removeClass("fa-bars")
              .removeClass("fa-spin-fast")
              .addClass("fa-arrow-left");
          }, 800);
        }
      });
    });
  }
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <div className="pb-5" style={{ paddingTop: "100px" }}>
        <div id="wordsss" className="py-4">
          <h3>{t("Staff.1")}</h3>
        </div>
        <MDBContainer>
          <div className="row active-with-click">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Grey">
                <h2>
                  <span>{t("Knitting.Names.1")}</span>
                  <strong>{t("Knitting.1")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo} alt="" />
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="mc-footer">
                  <h4>{t("Header.7")}</h4>

                  <a
                    href="https://t.me/"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998999176180"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:example@mail.com"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998999176180"
                    className="fa fa-fw"
                    alt="Phone number"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon3" fas icon="phone" size="1x" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Grey">
                <h2>
                  <span>{t("Knitting.Names.2")}</span>
                  <strong>{t("Knitting.2")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo2} alt="" />
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="mc-footer">
                  <h4>{t("Header.7")}</h4>

                  <a
                    href="https://t.me/"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998934250754"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:example@mail.com"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998934250754"
                    className="fa fa-fw"
                    alt="Phone number"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon3" fas icon="phone" size="1x" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Grey">
                <h2>
                  <span>{t("Knitting.Names.3")}</span>
                  <strong>{t("Knitting.3")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo3} alt="" />
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="mc-footer">
                  <h4>{t("Header.7")}</h4>

                  <a
                    href="https://t.me/"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998973467475"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:example@mail.com"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998973467475"
                    className="fa fa-fw"
                    alt="Phone number"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon3" fas icon="phone" size="1x" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Leaders);
