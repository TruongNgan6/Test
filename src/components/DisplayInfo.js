import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // console.log(this.props);
    const { age, name } = this.props;
    //Props
    return (
      <div>
        <div>My name is {name}</div>
        <div>I'm {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
