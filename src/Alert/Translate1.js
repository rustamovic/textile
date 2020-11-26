import React, { Component } from "react";
import { withTranslation } from "react-i18next";
class Translate2 extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <strong> {t("AlertOpen.6")} </strong>
      </div>
    );
  }
}

export default withTranslation()(Translate2);
