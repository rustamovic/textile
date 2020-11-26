import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Ph1 from "../../../Assets/ish/1.jpg";
import Ph2 from "../../../Assets/ish/2.jpg";
import "./Gallery.css";
import { withTranslation } from "react-i18next";
class Gallery extends Component {
  render() {
    const { t } = this.props;
    return (
      <MDBContainer>
        <div id="tele">
          <div id="teleg">
            <div class="l-center">
              <div class="l-container">
                <div class="l-grid">
                  <div>
                    <div class="l-max o-aspect-ratio" data-padding="80">
                      <div class="o-overlap-bottom">
                        <div class="o-aspect-ratio" data-padding="66">
                          <img
                            class="o-aspect-ratio__media"
                            src={Ph2}
                            alt="Misty shroud over a forest"
                          />
                        </div>
                        <div class="o-overlap-bottom__deco"></div>
                      </div>
                      <div class="o-overlap-top">
                        <div class="o-aspect-ratio" data-padding="66">
                          <img
                            class="o-aspect-ratio__media"
                            src={Ph1}
                            alt="Plant in vase of water"
                          />
                        </div>
                        <div class="o-overlap-top__deco o-aspect-ratio"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="h1-responsive">
                      <div>{t("Header.19")}</div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default withTranslation()(Gallery);
