import React from "react";

const withReverse = (WrappedComponent, name) => {
  class WithReverse extends React.Component {
    constructor() {
      super();
      this.state = {
        name: name
      };
    }
    componentDidMount() {
      this.reverseString();
    }
    reverseString = () => {
      let arrStr = name.split("");
      this.setState({
        name: arrStr
          .reverse()
          .toString()
          .replace(/,/g, "")
      });
    };
    render() {
      return <WrappedComponent name={this.state.name} />;
    }
  }
  return WithReverse;
};

export default withReverse;
