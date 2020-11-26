import React, { Component } from "react";
import Flag from "./Flag/Flag";
import Features from "./Features/Features";
import Support from "./Support";
import Contact from "./Jumbatron";
class Dilers extends Component {
  render() {
    return (
      <div>
        <Flag />
        <Features />
        <Support />
        <Contact />
      </div>
    );
  }
}

export default Dilers;
