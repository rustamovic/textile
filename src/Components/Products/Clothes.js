import React from "react";
import Product from "../Home/Products";
import { withTranslation } from "react-i18next";
class Products extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div id="words" className="pb-4">
          <h3>{t("Home.3")}</h3>
          <p>{t("Home.4")}</p>
        </div>
        <Product />
      </div>
    );
  }
}

export default withTranslation()(Products);
