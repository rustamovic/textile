import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Typography from "@material-ui/core/Typography";
import { withTranslation } from "react-i18next";
export class Typo extends Component {
  render() {
    const { t } = this.props;
    return (
      <MDBContainer>
        <div style={{ paddingTop: "110px" }}>
          <div id="wordsss" className="py-4">
            <Typography variant="h4">{t("Home.8")}</Typography>
          </div>
          <div class="elfsight-app-43eeafc7-ffb1-4d2f-8d40-4ddfd46ba0ff"></div>
        </div>
      </MDBContainer>
    );
  }
}

export default withTranslation()(Typo);
