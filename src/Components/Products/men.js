import React from "react";
import {
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdbreact";
import man from "../../Assets/special/men/11.1.png";
import man2 from "../../Assets/special/men/11.2.png";
import man5 from "../../Assets/special/men/11.png";
import Casual from "../../Assets/special/men/11.3.png";

import soldr from "../../Assets/special/men/6.1.png";
import soldr2 from "../../Assets/special/men/6.png";

import fut1 from "../../Assets/special/men/12.png";
import fut2 from "../../Assets/special/men/12.1.png";
import fut3 from "../../Assets/special/men/12.2.png";
import fut4 from "../../Assets/special/men/12.3.png";
import fut5 from "../../Assets/special/men/12.4.png";
import fut6 from "../../Assets/special/men/12.5.png";
import fut7 from "../../Assets/special/men/12.6.png";
import fut8 from "../../Assets/special/men/12.7.png";

import futt1 from "../../Assets/special/men/9.1.png";
import futt2 from "../../Assets/special/men/9.png";
import futt3 from "../../Assets/special/men/9.3.png";
import futt4 from "../../Assets/special/men/9.2.png";
import futt5 from "../../Assets/special/men/10.1.png";
import futt6 from "../../Assets/special/men/10.png";
import futt7 from "../../Assets/special/men/5.1.png";
import futt8 from "../../Assets/special/men/5.png";

import man3 from "../../Assets/special/men/2.png";
import man4 from "../../Assets/special/men/2.1.png";
import men from "../../Assets/special/men/2.2.png";
import man7 from "../../Assets/special/men/7.png";
import man71 from "../../Assets/special/men/7.1.png";
import men72 from "../../Assets/special/men/7.2.png";
import men73 from "../../Assets/special/men/7.3.png";
import { withTranslation } from "react-i18next";
class Products extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("Home.3")}</h3>
          <p>{t("Type.1")}</p>
        </div>
        <MDBContainer fluid className="py-4">
          <MDBRow>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={4}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={man}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={man2}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={man5}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={Casual}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={4}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut1}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut2}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut3}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut4}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={4}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={fut5}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut6}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut7}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={fut8}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-4">
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={2}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={soldr}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={soldr2}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={man3}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={man4}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={men}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={4}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={man7}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={man71}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={men72}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={men73}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-4">
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={2}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt5}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt6}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={4}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt1}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt2}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt3}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt4}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={2}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={futt7}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={futt8}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Products);
