import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import Photo from "../../../Assets/tools/Diler.jpg";
import { withTranslation } from "react-i18next";
class FeaturesPage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {t("Dilers.12")}
        </h2>
        <MDBContainer fluid>
          <MDBRow id="row" style={{ marginRight: "none", marginLeft: "none" }}>
            <MDBCol md="6" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2">
                  <MDBIcon icon="share" size="2x" className="blue-text" />
                </MDBCol>
                <MDBCol lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">{t("Dilers.13")}</h4>
                  <p className="grey-text">{t("Dilers.14")}</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2">
                  <MDBIcon icon="share" size="2x" className="pink-text" />
                </MDBCol>
                <MDBCol lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">{t("Dilers.15")}</h4>
                  <p className="grey-text">{t("Dilers.16")}</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2">
                  <MDBIcon icon="share" size="2x" className="purple-text" />
                </MDBCol>
                <MDBCol lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">{t("Dilers.17")}</h4>
                  <p className="grey-text">{t("Dilers.18")}</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6" className="md-0 mb-5">
              <MDBRow>
                <MDBCol lg="2" md="3" size="2">
                  <MDBIcon icon="share" size="2x" className="red-text" />
                </MDBCol>
                <MDBCol lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">{t("Dilers.19")}</h4>
                  <p className="grey-text">{t("Dilers.20")}</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBRow id="row">
            <MDBCol md="6">
              <img src={Photo} className="img-fluid" alt="" />
            </MDBCol>
            <MDBCol md="6">
              <p className="lead grey-text w-responsive text-left mb-5">
                {t("Dilers.21")}
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default withTranslation()(FeaturesPage);
