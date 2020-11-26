import React, { Component } from "react";
import Leaders from "../Home/Leaders/Leaders";
import Burger from "../Line1";
class Combine extends Component {
  render() {
    return (
      <div>
        <Burger />
        <Leaders />
      </div>
    );
  }
}
export default Combine;
