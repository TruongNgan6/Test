import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // console.log(this.props);
    const { listUsers } = this.props;
    console.log(listUsers);
    //Props
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>I'm {user.age}</div>
              <div>And I'm from {user.address}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>I'm {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
