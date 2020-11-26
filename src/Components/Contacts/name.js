import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./Contacts.css";
class name extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div className="text-center py-5" id="con">
          <h2>{t("Contacts.1")}</h2>
          {/* <p>{t("Contacts.2")}</p> */}
        </div>
      </div>
    );
  }
}
export default withTranslation()(name);
