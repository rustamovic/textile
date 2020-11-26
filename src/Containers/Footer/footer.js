import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { withTranslation } from "react-i18next";
import "./footer.css";
import Logon from "../../Assets/logon.png";
class Footer extends Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <MDBFooter className="font-small">
        <MDBContainer fluid className="py-4 text-center text-md-left fooot">
          <MDBRow className="m-0">
            <MDBCol md="4">
              <h5 className="title">{t("Footer.1")}</h5>
              <h6>
                {" "}
                <MDBIcon icon="map-marker" size="lg" className="ml-2" />
                <Link to="/contacts" id="gr" onClick={this.scrollToTop}>
                  Altinkul Dist.,Chinobod №1
                </Link>
              </h6>
              <h6>
                {" "}
                <MDBIcon icon="phone" size="1x" className="ml-2" />
                <a id="gr" href="tel:+99893 500 0595">
                  {" "}
                  +99893 500 0595
                </a>
              </h6>
              <h6>
                {" "}
                <MDBIcon icon="envelope" size="1x" className="ml-2" />{" "}
                <a
                  id="gr"
                  href="mailto:info@konteks.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  info@konteks.uz
                </a>
              </h6>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">{t("Footer.2")}</h5>
              <div>
                <span>
                  <a
                    href="https://www.linkedin.com/company/konteks-uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" brand icon="linkedin" size="2x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://twitter.com/konteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" brand icon="twitter" size="2x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://instagram.com/konteksuz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon3" brand icon="instagram" size="2x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/konteksLLC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon4" brand icon="facebook" size="2x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://t.me/k0nteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" brand icon="telegram" size="2x" />
                  </a>
                </span>
              </div>
            </MDBCol>
            <MDBCol className="offset-md-3" md="1" id="go-top">
              <a className="smoothScroll" title="Back to Top" href="#home">
                <div className="elevator">
                  <svg
                    className="sweet-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 100 100"
                    xmlSpace="preserve"
                    height="100px"
                    width="100px"
                  >
                    <path d="M70,47.5H30c-1.4,0-2.5,1.1-2.5,2.5v40c0,1.4,1.1,2.5,2.5,2.5h40c1.4,0,2.5-1.1,2.5-2.5V50C72.5,48.6,71.4,47.5,70,47.5z   M47.5,87.5h-5v-25h5V87.5z M57.5,87.5h-5v-25h5V87.5z M67.5,87.5h-5V60c0-1.4-1.1-2.5-2.5-2.5H40c-1.4,0-2.5,1.1-2.5,2.5v27.5h-5  v-35h35V87.5z" />
                    <path d="M50,42.5c1.4,0,2.5-1.1,2.5-2.5V16l5.7,5.7c0.5,0.5,1.1,0.7,1.8,0.7s1.3-0.2,1.8-0.7c1-1,1-2.6,0-3.5l-10-10  c-1-1-2.6-1-3.5,0l-10,10c-1,1-1,2.6,0,3.5c1,1,2.6,1,3.5,0l5.7-5.7v24C47.5,41.4,48.6,42.5,50,42.5z" />
                  </svg>
                  Back to Top
                </div>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBRow
          color="unique-color-dark"
          className="text-center border-top pt-2 m-0 foooot"
        >
          <MDBCol>
            <p>
              {t("Footer.4")} &copy;
              {new Date().getFullYear()} KONTEKS-TASHKENT LLC - Group of
              Companies
            </p>
            <p>
              <a
                id="author"
                href="https://linkedin.com/in/rustamovic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="logo" src={Logon} height="80" className="pb-1" />
                <br />
                {t("Footer.3")}
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBFooter>
    );
  }
}
export default withTranslation()(Footer);
