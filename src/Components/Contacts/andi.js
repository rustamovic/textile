import React, { Component } from "react";
import { MDBCol, MDBRow, MDBIframe, MDBContainer } from "mdbreact";
import { withTranslation } from "react-i18next";
import Name from "./name";
export class BahtTex extends Component {
  render() {
    const { t } = this.props;
    return (
      <div style={{ paddingTop: "100px" }}>
        <MDBContainer fluid>
          <Name />
          <MDBRow>
            <MDBCol id="con" md="5">
              <div>
                <h5>{t("Contacts.7")}</h5>
                <p>{t("Adresses.1")}</p>
              </div>
              <div>
                <p>
                  <a id="gr" href="tel:+99893 500 0595">
                    {" "}
                    +99893 500 0595
                  </a>
                </p>
                <p>
                  <a id="gr" href="tel:+99899 855 0595">
                    {" "}
                    +99899 855 0595
                  </a>
                </p>
                <div>
                  <h5>{t("Contacts.6")}</h5>
                  <p>
                    <a id="gr" href="tel:+998945600636">
                      {" "}
                      +998 97 273 0735 - {t("Adresses.2")}
                    </a>
                  </p>
                  <p>
                    <a id="gr" href="tel:+998945600712">
                      {" "}
                      +998 94 560 0712 - {t("Adresses.3")}
                    </a>
                  </p>
                </div>
                <p>
                  <a
                    id="gr"
                    href="mailto:info@konteks.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    info@konteks.uz
                  </a>
                </p>
              </div>
              <div>
                <h5>{t("Contacts.3")}</h5>
                <p>{t("Contacts.4")}</p>
                <p>9.00 - 18.00</p>
              </div>
              <div>
                <p>{t("Contacts.5")}</p>
                <p>9.00 - 17.00</p>
              </div>
            </MDBCol>
            <MDBCol md="7">
              <div className="map-container rounded z-depth-1-half ">
                <MDBIframe
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d386349.8564921727!2d71.73172561249999!3d40.84205761709229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9b7f36213289431!2sKRAVTEKS%20KONTEKS!5e0!3m2!1sru!2s!4v1598329483666!5m2!1sru!2s"
                ></MDBIframe>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default withTranslation()(BahtTex);
