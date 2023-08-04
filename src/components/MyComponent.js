// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Nancy", age: 20, address: "Ho Chi Minh" },
      { id: 2, name: "John", age: 30, address: "Seoul" },
      { id: 3, name: "Shin", age: 27, address: "Ha Noi" },
    ],
  };
  // JSX
  render() {
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
