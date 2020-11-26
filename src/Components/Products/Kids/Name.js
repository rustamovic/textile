import React, { Component } from "react";
import { withTranslation } from "react-i18next";
class name extends Component {
  render() {
    const { t } = this.props;
    return (
      <div id="words">
        <h3>{t("Home.3")}</h3>
        <p>{t("Type.3")}</p>
      </div>
    );
  }
}
export default withTranslation()(name);
