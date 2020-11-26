import React, { Component } from "react";

import Gallery from "./gallery";
import Burger from "../Line1";
class Home extends Component {
  render() {
    return (
      <div id="htmlk">
        <Burger />
        <Gallery />
      </div>
    );
  }
}

export default Home;
