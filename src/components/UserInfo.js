import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Nancy",
    address: "Ho Chi Minh",
    age: 20,
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnChangeAdress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("<<<check handle on submit", this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age} and I'm from{" "}
        {this.state.address}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <label> Your age </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />

          <label> Your Address </label>
          <input
            value={this.state.address}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAdress(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
