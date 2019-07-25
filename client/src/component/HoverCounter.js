import React from "react";
import CounterizedComponent from "./WithCounter";

class HoverCounter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0
  //     };
  //   }

  //   incrementCount = () => {
  //     this.setState(prevState => {
  //       return {
  //         count: prevState.count + 1
  //       };
  //     });
  //   };
  render() {
    return (
      <h1 onMouseOver={this.props.incrementClick}>
        Clicked {this.props.count} times
      </h1>
    );
  }
}

export default CounterizedComponent(HoverCounter);
