import React, { Component } from "react";
import Carousel from "./carousel/carousel";
import "./home.css";
import { MDBCol, MDBMask, MDBView, MDBContainer, MDBRow } from "mdbreact";
import VideoLink from "../Home/videoLink";
import GIF from "../../Assets/tools/kompaniya.gif";
import Products from "./Products";
import { withTranslation } from "react-i18next";
class home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="htmlk">
          <div id="bodyy">
            <Carousel />
          </div>
        </div>{" "}
        <div id="words1">
          <h3>{t("Home.1")}</h3>
          <p>{t("Home.2")}</p>
        </div>
        <MDBContainer>
          <MDBCol className="offset-md-2 offset-lg-2 pb-2" md="8" lg="8">
            <MDBView>
              <img src={GIF} className="img-fluid" alt="Gif" id="gif" />
              <MDBMask className="flex-center white-text">
                <VideoLink />
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBContainer>
        <div id="words1">
          <h3>{t("Home.3")}</h3>
          <p>{t("Home.4")}</p>
        </div>
        <Products />
        <div id="words1">
          <h3>{t("Home.5")}</h3>
          <p>{t("Home.6")}.</p>
        </div>
      </div>
    );
  }
}
export default withTranslation()(home);
