import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBJumbotron } from "mdbreact";
import { withTranslation } from "react-i18next";
import Rus from "../../../Assets/Rus.png";
class CardExample extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div id="words">
          <h3>{t("Dilers.1")}</h3>
        </div>

        <MDBJumbotron
          fluid
          style={{
            backgroundColor: "#fff",
            marginBottom: 0,
          }}
        >
          <MDBContainer fluid>
            <MDBRow id="row">
              <MDBCol md="2" sm="3">
                <img src={Rus} className="img-fluid" alt="" />
              </MDBCol>
              <MDBCol md="10" sm="8">
                {/* <h6>{t("Dilers.5")}</h6>
                <p className="lead">{t("Dilers.6")}</p>
                <ul>
                  <li>
                    <a id="gr" href="https://www.uzcotton.ru/">
                      www.uzcotton.ru
                    </a>
                  </li>
                  <li>
                    <a id="gr" href="mailto:sale@uzcotton.ru">
                      sale@uzcotton.ru
                    </a>
                  </li>
                  <li>
                    <a id="gr" href="tel:+7 499 4080509">
                      +7 (499) 408-05-09
                    </a>
                  </li>
                </ul>
                <hr /> */}
                <h6>{t("Dilers.7")}</h6>
                <p className="lead">{t("Dilers.8")}</p>
                <ul>
                  <li>
                    <a id="gr" href="http://www.vivezza.ru/">
                      www.vivezza.ru
                    </a>
                  </li>
                  <li>
                    <a id="gr" href="mailto:vivezza@ya.ru">
                      vivezza@ya.ru
                    </a>
                  </li>
                  <li>
                    <a id="gr" href="mailto:zakaz@vivezza.ru">
                      zakaz@vivezza.ru
                    </a>
                  </li>
                  <li>
                    <a id="gr" href="tel:+8 499 390 97 86">
                      +8 (499) 390 97 86
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>{" "}
          </MDBContainer>
        </MDBJumbotron>
      </>
    );
  }
}

export default withTranslation()(CardExample);
