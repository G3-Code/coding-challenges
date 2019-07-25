import React from "react";

const CounterizedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }

    incrementClick = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };
    render() {
      return (
        <OriginalComponent
          incrementClick={this.incrementClick}
          count={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};

export default CounterizedComponent;
