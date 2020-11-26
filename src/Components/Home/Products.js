import React from "react";
import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBLink,
} from "mdbreact";
import men from "../../Assets/special/men/sp.png";
import women from "../../Assets/special/women/10.1.png";
import kid from "../../Assets/special/kids/1.png";
import { withTranslation } from "react-i18next";
class Products extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    const { t } = this.props;
    return (
      <div>
        <MDBContainer fluid className="pb-4">
          <MDBRow>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={men} className="img-fluid" alt="" />
                <MDBMask className="flex-center">
                  <MDBLink to="/clothes/men" onClick={this.scrollToTop}>
                    <MDBBtn className="white-text">{t("Type.1")}</MDBBtn>
                  </MDBLink>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={women} className="img-fluid" alt="" />
                <MDBMask className="flex-center">
                  <MDBLink to="/clothes/women" onClick={this.scrollToTop}>
                    <MDBBtn className="white-text">{t("Type.2")}</MDBBtn>
                  </MDBLink>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={kid} className="img-fluid" alt="" />
                <MDBMask className="flex-center">
                  <MDBLink to="/clothes/kids" onClick={this.scrollToTop}>
                    <MDBBtn className="white-text">{t("Type.3")}</MDBBtn>
                  </MDBLink>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Products);
