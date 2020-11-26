import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Komp from "../../../../Assets/tools/boshqa/trfgnf1.jpg";
import { withTranslation } from "react-i18next";
class Company extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("Policy.1")}</h3>
          <p>{t("Policy.2")}</p>
          <p>{t("Policy.3")}</p>
        </div>
        <MDBContainer className="py-3 my-5">
          <img id="MDBCC" src={Komp} className="img-fluid hoverable" alt="" />
          <div id="me">
            <h3>{t("Policy.4")}</h3>
            <p>{t("Policy.5")}</p>
            <p>{t("Policy.6")}</p>
            <p>{t("Policy.7")}</p>
          </div>
          <div id="me">
            <h3>{t("Policy.8")}</h3>
            <p>{t("Policy.9")}</p>
            <p>{t("Policy.10")}</p>
            <p>{t("Policy.12")}</p>
          </div>
          <h3>{t("Policy.13")}</h3>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Company);
