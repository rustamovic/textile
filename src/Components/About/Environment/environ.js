import React, { Component } from "react";
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBAnimation,
  MDBView,
  MDBCard,
  MDBCardImage,
} from "mdbreact";
import Vid from "../../../Assets/showrum/main.jpg";

import Vid1 from "../../../Assets/showrum/showrum/99.jpg";
import Vid2 from "../../../Assets/showrum/showrum/98.jpg";
import Vid3 from "../../../Assets/showrum/showrum/97.jpg";
import Vid4 from "../../../Assets/showrum/showrum/96.jpg";
import Vid5 from "../../../Assets/showrum/showrum/95.jpg";
import Vid6 from "../../../Assets/showrum/showrum/94.jpg";
import Vid7 from "../../../Assets/showrum/showrum/91.jpg";
import Vid8 from "../../../Assets/showrum/showrum/93.jpg";
import Vid9 from "../../../Assets/showrum/showrum/92.jpg";
import Vid10 from "../../../Assets/showrum/showrum/90.jpg";
import Vid11 from "../../../Assets/showrum/showrum/12.jpg";
import Vid12 from "../../../Assets/showrum/showrum/13.jpg";
import Vid13 from "../../../Assets/showrum/showrum/11.jpg";
import Vid14 from "../../../Assets/showrum/showrum/10.jpg";
import Vid15 from "../../../Assets/showrum/showrum/9.jpg";
import Vid16 from "../../../Assets/showrum/showrum/8.jpg";
import Vid17 from "../../../Assets/showrum/showrum/14.jpg";
import Vid18 from "../../../Assets/showrum/showrum/87.jpg";
import Vid19 from "../../../Assets/showrum/showrum/88.jpg";
import Vid21 from "../../../Assets/showrum/showrum/89.jpg";
import Vid22 from "../../../Assets/showrum/showrum/1.jpg";
import Vid23 from "../../../Assets/showrum/showrum/2.jpg";
import Vid24 from "../../../Assets/showrum/showrum/3.jpg";
import { withTranslation } from "react-i18next";

class Environ extends Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("About.Environ.1")}</h3>
        </div>
        <MDBContainer className="py-3 my-5">
          <MDBView zoom hover>
            <img
              id="MDBCC"
              cascade
              src={Vid}
              className="img-fluid grey lighten-4"
              alt=""
            />
          </MDBView>

          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid1}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid2}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid3}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid4}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid5}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid6}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid7}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid8}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid9}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid10}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid11}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid12}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid13}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid14}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid15}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid16}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage cascade className="img-fluid" src={Vid17} />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage cascade className="img-fluid" src={Vid18} />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow id="categories">
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid19}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="6">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid21}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow id="categories">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid23}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid22}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInUp">
                <MDBCard cascade className="my-3 grey lighten-4">
                  <MDBView zoom hover>
                    <MDBCardImage
                      id="MDBC"
                      cascade
                      className="img-fluid"
                      src={Vid24}
                    />
                  </MDBView>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default withTranslation()(Environ);
