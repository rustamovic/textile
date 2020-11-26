import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Vid2 from "../../../Assets/tools/konteks-tashkent1.jpg";
import "./Company.css";
import { withTranslation } from "react-i18next";
class Company extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("About.Company.1")}</h3>
          <p>{t("About.Company.2")}</p>
          <p>{t("About.Company.3")}</p>
        </div>
        <MDBContainer className="py-3 my-5">
          <img id="MDBCC" src={Vid2} className="img-fluid hoverable" alt="" />
          <div id="me">
            <h3>{t("About.Company.4")}</h3>
            <p>{t("About.Company.5")}</p>
            <p>{t("About.Company.6")}</p>
            <p>{t("About.Company.7")}</p>
          </div>
          <div id="me">
            <h3>{t("About.Company.8")}</h3>
            <p>{t("About.Company.9")}</p>
            <p>{t("About.Company.10")}</p>
            <p>{t("About.Company.11")}</p>
            <p>{t("About.Company.12")}</p>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Company);
