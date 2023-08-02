// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nancy",
    address: "Ho Chi Minh",
    age: 20,
  };
  handleOnclick(event) {
    console.log(">> Check click me!!");
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}
        <button onClick={this.handleOnclick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
