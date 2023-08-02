// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nancy",
    address: "Ho Chi Minh",
    age: 20,
  };
  handleOnclick = (event) => {
    console.log(">> Check click me!!");
    this.setState({
      name: "Eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleOnclick(event);
          }}
        >
          Click me
        </button>
        <button
          onMouseOver={(event) => {
            this.handleOnMouseOver(event);
          }}
        >
          Hover me
        </button>
      </div>
    );
  }
}

export default MyComponent;
