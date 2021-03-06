import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import "./Slide.css";
import Photo from "../../../../../Assets/ish/printing/10.jpg";
import Photo2 from "../../../../../Assets/ish/printing/14.jpg";
import Photo3 from "../../../../../Assets/ish/printing/1.jpg";
class Slider extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls
          showIndicators
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  id="homeee"
                  className="d-block w-100 img-fluid"
                  src={Photo}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  id="homeee"
                  className="d-block w-100 img-fluid"
                  src={Photo2}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  id="homeee"
                  className="d-block w-100 img-fluid"
                  src={Photo3}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default Slider;
