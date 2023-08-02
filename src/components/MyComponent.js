// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Nancy",
    address: "Ho Chi Minh",
    age: 20,
  };
  // handleOnclick = (event) => {
  //   console.log(">> Check click me!!");
  //   this.setState({
  //     name: "Eric",
  //     age: Math.floor(Math.random() * 100 + 1),
  //   });
  // };

  // handleOnMouseOver(event) {
  //   console.log(event.pageX);
  // }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event, event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("<<<check handle on submit", this.state);
  };
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
