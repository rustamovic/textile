import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import photo from "../Assets/notfound.svg";
class NotFound extends Component {
  render() {
    return (
      <MDBContainer style={{ paddingTop: "105px" }}>
        <img
          src={photo}
          style={{ width: "100%", height: "60vh" }}
          alt="React Logo"
        />
      </MDBContainer>
    );
  }
}

export default NotFound;
