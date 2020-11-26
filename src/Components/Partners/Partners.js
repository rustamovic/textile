import React, { Component } from "react";
import {
  MDBContainer,
  MDBJumbotron,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import Logos from "./Logos/Logos";
import Photo from "../../Assets/tools/branding.jpg";
import Testominals from "./Testominals/Testominals";
import { withTranslation } from "react-i18next";
class Partners extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <Logos />
        <Testominals />
        <MDBContainer>
          <MDBJumbotron
            className="text-center"
            style={{ backgroundColor: "white", boxShadow: "none" }}
          >
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>{t("Partners.4")}</strong>
            </MDBCardTitle>
            <MDBCardImage src={Photo} className="img-fluid" />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                {t("Partners.6")}
              </MDBCardTitle>
              <MDBCardText>{t("Partners.5")}</MDBCardText>

              <p className="lead">
                <MDBBtn color="primary">{t("Partners.6")}</MDBBtn>
              </p>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Partners);
