import React, { Component } from "react";
import { MDBCol, MDBRow, MDBLink, MDBContainer, MDBAnimation } from "mdbreact";

import "./about.css";
import Vid from "../../Assets/tools/Kompaniya.jpg";
import Vid2 from "../../Assets/tools/konteks-tashkent1.jpg";
import policy from "../../Assets/tools/boshqa/trfgnf1.jpg";
import certify from "../../Assets/tools/about/0.jpg";
import { withTranslation } from "react-i18next";
class about extends Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    modal11: false,
  };

  toggle = (nr) => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("About.1")}</h3>
          <p>{t("About.2")}</p>
          <p>{t("About.3")}</p>
        </div>
        <MDBContainer className="py-3 my-5">
          <MDBRow>
            <MDBCol hover cascade top md="6" sm="12">
              <MDBLink onClick={this.scrollToTop} to="/about/comp">
                <MDBAnimation reveal type="fadeInLeft">
                  <img
                    id="MDBC"
                    src={Vid2}
                    className="img-fluid hoverable "
                    alt=""
                  />
                </MDBAnimation>
              </MDBLink>

              <h6 className="title pt-1">{t("About.4")}</h6>
            </MDBCol>

            <MDBCol md="6" sm="12">
              <MDBLink onClick={this.scrollToTop} to="/about/envi">
                <MDBAnimation reveal type="fadeInRight">
                  {" "}
                  <img
                    id="MDBC"
                    src={Vid}
                    className="img-fluid hoverable"
                    alt=""
                  />
                </MDBAnimation>
              </MDBLink>

              <h6 className="title pt-1">{t("About.Environ.1")}</h6>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {/* <MDBCol hover cascade top md="6" sm="12">
              <MDBLink onClick={this.scrollToTop} to="/about/policy">
                <MDBAnimation reveal type="fadeInUp">
                  <img
                    id="MDBC"
                    src={policy}
                    className="img-fluid hoverable "
                    alt=""
                  />
                </MDBAnimation>
              </MDBLink>

              <h6 className="title pt-1">{t("About.Environ.3")}</h6>
            </MDBCol> */}

            <MDBCol md="6 offset-md-3" sm="12">
              <MDBLink onClick={this.scrollToTop} to="/about/certifications">
                <MDBAnimation reveal type="fadeInUp">
                  {" "}
                  <img
                    id="MDBC"
                    src={certify}
                    className="img-fluid hoverable"
                    alt=""
                  />
                </MDBAnimation>
              </MDBLink>

              <h6 className="title pt-1">{t("About.Environ.4")}</h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default withTranslation()(about);
