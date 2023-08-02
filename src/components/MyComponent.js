// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nancy",
    address: "Ho Chi Minh",
    age: 20,
  };
  // JSX
  render() {
    return <div>My name is {this.state.name}</div>;
  }
}

export default MyComponent;
