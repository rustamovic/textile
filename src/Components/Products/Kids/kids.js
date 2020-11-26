import React from "react";
import { MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import f1 from "../../../Assets/kids/1.jpg";
import f2 from "../../../Assets/kids/2.jpg";
import f3 from "../../../Assets/kids/3.jpg";
import f4 from "../../../Assets/kids/4.jpg";
import f5 from "../../../Assets/kids/5.jpg";
import f6 from "../../../Assets/kids/6.jpg";
import f7 from "../../../Assets/kids/7.jpg";
import f8 from "../../../Assets/kids/8.jpg";
import f9 from "../../../Assets/kids/9.jpg";
import f10 from "../../../Assets/kids/10.jpg";
import f11 from "../../../Assets/kids/11.jpg";
import f12 from "../../../Assets/kids/12.jpg";
import f13 from "../../../Assets/kids/13.jpg";
import f14 from "../../../Assets/kids/14.jpg";
import f15 from "../../../Assets/kids/15.jpg";
class Products extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer fluid className="py-4">
          <MDBRow>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f1} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f2} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f3} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f4} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f5} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f6} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f7} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f8} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f9} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f10} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f11} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f12} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f13} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f14} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="4">
              <MDBView zoom>
                <img src={f15} className="img-fluid" alt="" />
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Products;
