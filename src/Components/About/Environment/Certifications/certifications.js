import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import Komp from "../../../../Assets/Sertifications/2015.jpg";
import Komp1 from "../../../../Assets/Sertifications/2016.jpg";
import Komp2 from "../../../../Assets/Sertifications/austria.jpg";
import Komp3 from "../../../../Assets/Sertifications/USA.jpg";
import Komp4 from "../../../../Assets/Sertifications/sedex.jpg";
import Komp5 from "../../../../Assets/Sertifications/ico.png";
import Komp6 from "../../../../Assets/Sertifications/konteks-tashkent3.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { withTranslation } from "react-i18next";
class Company extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <MDBContainer fluid className="mb-5">
          <div id="words">
            <h3>{t("About.Environ.4")}</h3>
            <p>{t("About.6")}</p>
          </div>
          <MDBContainer>
            <img
              id="MDBCC"
              src={Komp6}
              className="img-fluid hoverable my-4"
              alt=""
            />
          </MDBContainer>
          <MDBCol>
            <MDBRow>
              <MDBCol md="4" lg="4">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={Komp5}
                    className="img-fluid"
                  />
                </Zoom>
              </MDBCol>
              <MDBCol md="4" lg="4">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={Komp4}
                    className="img-fluid"
                  />
                </Zoom>
              </MDBCol>
              <MDBCol md="4" lg="4">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={Komp3}
                    className="img-fluid"
                  />
                </Zoom>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="4" lg="4">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={Komp1}
                    className="img-fluid"
                  />
                </Zoom>
              </MDBCol>
              <MDBCol md="4" lg="4">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={Komp2}
                    className="img-fluid"
                  />
                </Zoom>
              </MDBCol>
              <MDBCol md="4" lg="4">
                <Zoom>
                  <img
                    alt="that wanaka tree"
                    src={Komp}
                    className="img-fluid"
                  />
                </Zoom>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </div>
    );
  }
}
export default withTranslation()(Company);
