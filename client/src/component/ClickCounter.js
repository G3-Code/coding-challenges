import React from "react";
import CounterizedComponent from "./WithCounter";

class ClickCounter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0
  //     };
  //   }

  //   incrementClick = () => {
  //     this.setState(prevState => {
  //       return {
  //         count: prevState.count + 1
  //       };
  //     });
  //   };
  render() {
    return (
      <button onClick={this.props.incrementClick}>
        Clicked {this.props.count} times
      </button>
    );
  }
}

export default CounterizedComponent(ClickCounter);
