import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Photo from "../../Assets/tools/five.jpg";
import { withTranslation } from "react-i18next";
class FeaturesPage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {t("Dilers.22")}
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          {t("Dilers.23")}
        </p>

        <MDBRow id="row">
          <MDBCol lg="5" className="text-center text-lg-left">
            <img className="img-fluid" src={Photo} alt="" />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{t("Dilers.24")}</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{t("Dilers.25")}</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{t("Dilers.26")}</h5>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{t("Dilers.27")}</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{t("Dilers.28")}</h5>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

export default withTranslation()(FeaturesPage);
