import React, { Component } from "react";
import { MDBJumbotron, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import "./Style.css";
class Jumbatron extends Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <div id="bot">
        <MDBRow id="row">
          <MDBCol>
            <MDBJumbotron
              className="text-center text-dark my-0"
              style={{ backgroundColor: "white" }}
            >
              <h2 className="h1-responsive">{t("Partners.4")}</h2>
              <hr className="my-2" />
              <p className="lead">{t("Partners.5")}</p>
              <p className="lead">
                <Link to="/contacts" onClick={this.scrollToTop}>
                  <MDBBtn color="green text-white">{t("Partners.6")}</MDBBtn>
                </Link>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default withTranslation()(Jumbatron);
