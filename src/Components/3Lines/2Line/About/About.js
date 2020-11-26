import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import { withTranslation } from "react-i18next";
class Company extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words">
          <h3>{t("GallNames.3")}</h3>
          <p>{t("GallNames.4")}</p>
        </div>
        <MDBContainer fluid className="py-3 my-5">
          <div id="kk">
            <div id="kkk">
              <ul class="process">
                <li class="process__item">
                  <span class="process__number">1</span>
                  <span class="process__title">{t("GallName.1")}</span>
                </li>

                <li class="process__item">
                  <span class="process__number">2</span>
                  <span class="process__title">{t("GallName.2")}</span>
                </li>

                <li class="process__item">
                  <span class="process__number">3</span>
                  <span class="process__title">{t("GallName.3")}</span>
                </li>

                <li class="process__item">
                  <span class="process__number">4</span>
                  <span class="process__title">{t("GallName.4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default withTranslation()(Company);
