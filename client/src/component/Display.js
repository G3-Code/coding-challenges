import React from "react";
import withReverse from "./WithReverse";

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Gayathri"
    };
  }
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default withReverse(Display, "Gayathri");
