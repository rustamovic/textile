import React, { Component } from "react";

import Burger from "../Line1";
import About from "./About";
class Combine extends Component {
  render() {
    return (
      <div>
        <Burger />
        <About />
      </div>
    );
  }
}
export default Combine;
