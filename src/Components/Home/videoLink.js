import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";
import { withTranslation } from "react-i18next";
class videoLink extends Component {
  state = {
    modal11: false,
  };

  toggle = (nr) => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    const { t } = this.props;
    const { modal11 } = this.state;
    return (
      <div>
        <MDBBtn className="white-text" onClick={this.toggle(11)}>
          {t("Header.10")}
        </MDBBtn>
        <MDBModal size="lg" isOpen={modal11} toggle={this.toggle(11)}>
          <MDBModalBody className="mb-0 p-0">
            <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe
                title="youtube"
                className="embed-responsive-item"
                header="This is a unique title"
                src="https://www.youtube.com/embed/o87h2BRu_0c"
                allowFullScreen
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              href="https://www.facebook.com/KonteksLLC/"
              tag="a"
              size="sm"
              floating
              social="fb"
              target="_blank"
            >
              <MDBIcon fab icon="facebook" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              size="sm"
              floating
              social="tw"
              href="https://instagram.com/konteksuz/"
              target="_blank"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              size="sm"
              floating
              social="gplus"
              href="https://twitter.com/konteksuz/"
              target="_blank"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              size="sm"
              floating
              social="li"
              href="https://linkedin.com/company/konteks-uz/"
              target="_blank"
            >
              <MDBIcon fab icon="linkedin" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              size="sm"
              floating
              social="fb"
              href="https://t.me/k0nteksuz/"
              target="_blank"
            >
              <MDBIcon fab icon="telegram" />
            </MDBBtn>
            <MDBBtn
              color="secondary"
              outline
              rounded
              size="md"
              className="ml-4"
              onClick={this.toggle(11)}
            >
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
export default withTranslation()(videoLink);
