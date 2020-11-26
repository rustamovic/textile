import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import "./Alert.css";
import Covid from "../Assets/covid.png";
import { withTranslation } from "react-i18next";
class jumbotron extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <MDBRow id="row">
          <MDBCol md="6">
            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
              {t("AlertOpen.1")}
            </MDBCardTitle>
            <div className="mx-5 mb-5">
              <h3 className="h3-responsive">{t("AlertOpen.2")}</h3>
              <hr />
              <strong>{t("AlertOpen.3")}</strong>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <img src={Covid} alt="" className="img-fluid" />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default withTranslation()(jumbotron);
