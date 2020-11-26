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

import pic from "../../Assets/special/women/1.png";
import pic2 from "../../Assets/special/women/1.1.png";
import pic3 from "../../Assets/special/women/2.png";
import pic4 from "../../Assets/special/women/2.1.png";
import pic5 from "../../Assets/special/women/3.png";
import pic6 from "../../Assets/special/women/3.1.png";

import pic7 from "../../Assets/special/women/7.png";
import pic8 from "../../Assets/special/women/8.png";
import pic9 from "../../Assets/special/women/11.png";
import pic10 from "../../Assets/special/women/11.1.png";
import pic11 from "../../Assets/special/women/11.2.png";
import pic12 from "../../Assets/special/women/11.3.png";
import pic13 from "../../Assets/special/women/11.4.png";

import pic14 from "../../Assets/special/women/12.png";
import pic15 from "../../Assets/special/women/12.1.png";
import pic16 from "../../Assets/special/women/12.2.png";
import pic17 from "../../Assets/special/women/12.3.png";
import pic18 from "../../Assets/special/women/12.4.png";
import pic19 from "../../Assets/special/women/12.5.png";
import pic20 from "../../Assets/special/women/10.png";
import pic21 from "../../Assets/special/women/10.1.png";

import pic22 from "../../Assets/special/women/4.png";
import pic23 from "../../Assets/special/women/4.1.png";
import pic24 from "../../Assets/special/women/5.png";
import pic25 from "../../Assets/special/women/5.1.png";
import pic26 from "../../Assets/special/women/5.2.png";
import pic27 from "../../Assets/special/women/5.3.png";
import { withTranslation } from "react-i18next";

class Products extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("Home.3")}</h3>
          <p>{t("Type.2")}</p>
        </div>
        <MDBContainer fluid className="py-4 box-shadow-none">
          <MDBRow>
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
                        src={pic}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic2}
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
                        src={pic3}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic4}
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
                        src={pic5}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic6}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-4">
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
                        src={pic7}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic8}
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
                        src={pic9}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic10}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic11}
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
                        src={pic12}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic13}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-4">
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
                        className="d-block w-100 img-fluid"
                        src={pic15}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100 img-fluid"
                        src={pic19}
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
                        className="d-block w-100 img-fluid"
                        src={pic14}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100 img-fluid"
                        src={pic16}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100 img-fluid"
                        src={pic17}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100 img-fluid"
                        src={pic18}
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
                length={2}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView zoom>
                      <img
                        className="d-block w-100 img-fluid"
                        src={pic20}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100 img-fluid"
                        src={pic21}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow>
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
                        src={pic22}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic23}
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
                        src={pic24}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic25}
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
                        src={pic26}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic27}
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
