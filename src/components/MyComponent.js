// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  // JSX
  render() {
    const ageW = 50;
    const myInfo = ["abc", "c", "a"];
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <br />
        <DisplayInfo name="Nancy" age="30" />
        <hr />
        <DisplayInfo name="Eric" age={ageW} myInfo={myInfo} />
      </div>
    );
  }
}

export default MyComponent;
