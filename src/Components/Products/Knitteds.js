import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBAnimation,
  MDBMask,
  MDBView,
} from "mdbreact";
// import "./Companies.css";
import iplik from "../../Assets/knits/ich iplik.jpg";
import ikki from "../../Assets/knits/ikki iplik.jpg";
import interlok from "../../Assets/knits/interlok.jpg";
import kashkorse from "../../Assets/knits/kashkorse.jpg";
import kulirnaya from "../../Assets/knits/kulirnaya glad.jpg";
import podvyazy from "../../Assets/knits/podvyazy.jpg";
import ribana from "../../Assets/knits/ribana.jpg";
import selenik from "../../Assets/knits/selanik.jpg";
import vilyur from "../../Assets/knits/vilyur.jpg";
import { withTranslation } from "react-i18next";
class Companies extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    const { t } = this.props;
    return (
      <div className="pb-5">
        <div id="words">
          <h1>{t("Header.8")}</h1>
        </div>
        <MDBContainer fluid>
          <MDBRow id="categories">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={iplik}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.5")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.11")}</h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInDown">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={ikki}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.4")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.10")}</h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={interlok}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.7")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.15")}</h6>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow id="categories">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={kashkorse}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.1")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.13")}</h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeIn">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={kulirnaya}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.5")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.16")}</h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={podvyazy}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.3")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.18")}</h6>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow id="categories">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={selenik}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.9")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.17")}</h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard className="my-3">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={ribana}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.2")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.12")}</h6>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={vilyur}
                    />
                    <MDBMask className="flex-center" overlay="blue-strong">
                      <p className="white-text text-center">{t("Knitted.6")}</p>
                    </MDBMask>
                  </MDBView>
                </MDBCard>
                <h6 className="title">{t("Knitted.14")}</h6>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Companies);
