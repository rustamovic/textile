import React, { Component } from "react";
import { MDBContainer, MDBCardImage, MDBIcon } from "mdbreact";
import $ from "jquery";
import Person from "../../Assets/men.jpg";
import { withTranslation } from "react-i18next";
import "./Leadership.css";
import Photo from "../../Assets/Personnel/03.JPG";
import Photo1 from "../../Assets/Personnel/SJ.jpg";
import Photo2 from "../../Assets/Personnel/49.jpg";
import Photo3 from "../../Assets/Personnel/01.JPG";
import Photo4 from "../../Assets/Personnel/03.JPG";
import Photo5 from "../../Assets/Personnel/t.jpg";

class Leadership extends Component {
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
                  <span>{t("Staff.Names.6")}</span>
                  <strong>{t("Staff.8")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Person} alt="" />
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
                    href="https://api.whatsapp.com/send?phone=99893 188 00 00"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:davut_surucu@hotmail.com"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+99893 188 00 00"
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
                  <span>{t("Staff.Names.1")}</span>
                  <strong>{t("Staff.2")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo1} alt="" />
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="mc-footer">
                  <h4>{t("Header.7")}</h4>

                  <a
                    href="https://t.me/JSH202APA/"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998935000595"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:jahongir@konteks.uz"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998935000595"
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
                  <span>{t("Staff.Names.2")}</span>
                  <strong>{t("Staff.3")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo2} alt="" />
                  </div>
                  {/* <div className="mc-description">{t("Staff.7")}</div> */}
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
                    href="https://api.whatsapp.com/send?phone=998901676272"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:dilshod-konteks@mail.ru"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998901676272"
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
                  <span>{t("Staff.Names.3")}</span>
                  <strong>{t("Staff.4")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo4} alt="" />
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="mc-footer">
                  <h4>{t("Header.7")}</h4>

                  <a
                    href="https://t.me/shezauz"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998945600705"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:sherzodbek@konteks.uz"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998945600705"
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
                  <span>{t("Staff.Names.4")}</span>
                  <strong>{t("Staff.5")}</strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <MDBCardImage className="img-fluid" src={Photo5} alt="" />
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars"></i>
                </a>
                <div className="mc-footer">
                  <h4>{t("Header.7")}</h4>

                  <a
                    href="https://t.me/tonyporque"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998972730735"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:tahir@konteks.uz"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998972730735"
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
                  <span>{t("Staff.Names.5")}</span>
                  <strong>{t("Staff.6")}</strong>
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
                    href="https://t.me/Zokir_Haydarov"
                    className="fa fa-fw"
                    alt="Telegram Messenger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" fab icon="telegram" size="1x" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=998945600712"
                    className="fa fa-fw"
                    alt="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" fab icon="whatsapp-square" size="1x" />
                  </a>
                  <a
                    href="mailto:zokirjon@konteks.uz"
                    className="fa fa-fw"
                    alt="E-Mail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" fas icon="envelope" size="1x" />
                  </a>
                  <a
                    href="tel:+998945600712"
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

export default withTranslation()(Leadership);
