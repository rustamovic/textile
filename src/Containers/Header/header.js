import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18next from "i18next";
import classnames from "classnames";
import "./header.css";
import Brand from "../../Assets/logo-2.png";
class header extends Component {
  state = {
    collapseID: "",
    prevScrollpos: window.pageYOffset,
    visible: true,
  };
  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    const { t } = this.props;
    const { collapseID } = this.state;
    return (
      <div>
        <div id="home">
          <MDBNavbar
            className={classnames("navbaaar", {
              "navbaar--hidden": !this.state.visible,
            })}
            id="bc"
            dark
            expand="sm"
          >
            <MDBNavbarNav id="ul-navbar" left>
              <div>
                <span>
                  <a
                    href="https://linkedin.com/company/konteks-uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon1" brand icon="linkedin" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://twitter.com/konteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon2" brand icon="twitter" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://instagram.com/konteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon3" brand icon="instagram" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/KonteksLLC/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon4" brand icon="facebook" size="1x" />
                  </a>
                </span>
                <span>
                  <a
                    href="https://t.me/k0nteksuz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MDBIcon id="FIcon5" brand icon="telegram" size="1x" />
                  </a>
                </span>
              </div>
            </MDBNavbarNav>
            <MDBNavbarNav right id="ul-navbar">
              <MDBDropdown>
                <MDBDropdownToggle id="colr" nav caret>
                  {t("Header.13")}
                  <div className="d-none d-md-inline"></div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default z-index-50">
                  <MDBDropdownItem
                    id="dialog"
                    onClick={() => this.handleClick("en")}
                  >
                    ENGLISH
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    id="dialog"
                    onClick={() => this.handleClick("ru")}
                  >
                    РУССКИЙ
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    id="dialog"
                    onClick={() => this.handleClick("uz")}
                  >
                    O`ZBEK
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    id="dialog"
                    onClick={() => this.handleClick("tr")}
                  >
                    TÜRK
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    id="dialog"
                    onClick={() => this.handleClick("ar")}
                  >
                    عربى
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>
          </MDBNavbar>
          <MDBNavbar
            id="bc2"
            className={classnames("navbaar", {
              "navbar--hidden": !this.state.visible,
            })}
            dark
            expand="md"
          >
            <MDBNavbarBrand>
              <Link to="/" onClick={this.scrollToTop}>
                <img src={Brand} height="50" alt="Logo" />
              </Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              className="colr"
              onClick={this.toggleCollapse("navbarCollapse4")}
            />
            <MDBCollapse id="navbarCollapse4" isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/"
                  >
                    {t("Header.1")}
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle id="colr" nav caret>
                      {t("Header.2")}
                      <div className="d-none d-md-inline"></div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBLink
                        to="/about"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.2")}
                        </MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/staff"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Staff.1")}
                        </MDBDropdownItem>
                      </MDBLink>

                      <MDBLink
                        to="/clients"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.4")}
                        </MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/dilers"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.5")}
                        </MDBDropdownItem>
                      </MDBLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle id="colr" nav caret>
                      {t("Header.14")}
                      <div className="d-none d-md-inline"></div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBLink
                        to="/knitting"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.17")}
                        </MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/painting"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.18")}
                        </MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/production"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.16")}
                        </MDBDropdownItem>
                      </MDBLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/news"
                  >
                    {t("Header.11")}
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle id="colr" nav caret>
                      {t("Header.6")}
                      <div className="d-none d-md-inline"></div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBLink
                        to="/knitteds"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.8")}
                        </MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/clothes"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.9")}
                        </MDBDropdownItem>
                      </MDBLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink
                    id="colr"
                    onClick={this.closeCollapse("navbarCollapse4")}
                    to="/contacts"
                  >
                    {t("Header.7")}
                  </MDBLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle id="colr" nav caret>
                      {t("Header.7")}
                      <div className="d-none d-md-inline"></div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBLink
                        to="/faq"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.12")}
                        </MDBDropdownItem>
                      </MDBLink>
                      <MDBLink
                        to="/contacts"
                        onClick={this.closeCollapse("navbarCollapse4")}
                      >
                        <MDBDropdownItem id="colr">
                          {t("Header.7")}
                        </MDBDropdownItem>
                      </MDBLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem> */}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </div>
    );
  }
}
export default withTranslation()(header);
