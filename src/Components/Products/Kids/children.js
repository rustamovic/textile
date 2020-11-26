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
import pic from "../../../Assets/special/kids/1.png";
import pic2 from "../../../Assets/special/kids/1.1.png";
import pic3 from "../../../Assets/special/kids/1.2.png";
import pic4 from "../../../Assets/special/kids/1.3.png";
import pic5 from "../../../Assets/special/kids/1.4.png";
import pic6 from "../../../Assets/special/kids/1.5.png";

import pic7 from "../../../Assets/special/kids/2.png";
import pic8 from "../../../Assets/special/kids/2.1.png";
import pic9 from "../../../Assets/special/kids/2.2.png";
import pic10 from "../../../Assets/special/kids/2.3.png";
import pic11 from "../../../Assets/special/kids/5.png";
import pic12 from "../../../Assets/special/kids/5.2.png";
import pic13 from "../../../Assets/special/kids/5.3.png";
import pic14 from "../../../Assets/special/kids/5.4.png";
import pic15 from "../../../Assets/special/kids/5.1.png";

import pic16 from "../../../Assets/special/kids/3.png";
import pic17 from "../../../Assets/special/kids/3.1.png";
import pic18 from "../../../Assets/special/kids/3.2.png";
import pic19 from "../../../Assets/special/kids/4.png";
import pic20 from "../../../Assets/special/kids/4.1.png";
import pic21 from "../../../Assets/special/kids/7.png";
import pic22 from "../../../Assets/special/kids/8.png";
import pic23 from "../../../Assets/special/kids/6.png";

class Products extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer fluid className="py-4">
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
                        src={pic2}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic3}
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
                        src={pic4}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic5}
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
                        src={pic6}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic}
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
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic8}
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
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
            <MDBCol md="4">
              <MDBCarousel
                activeItem={1}
                length={5}
                showControls
                showIndicators
                className="z-depth-1"
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={pic11}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic12}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={pic13}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="4">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic14}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="5">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={pic15}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCol>
          </MDBRow>
          <MDBRow className="pb-4">
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
                        src={pic16}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic17}
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic18}
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
                        src={pic19}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic20}
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
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={pic21}
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView zoom>
                      <img
                        className="d-block w-100"
                        src={pic22}
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
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
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Products;
