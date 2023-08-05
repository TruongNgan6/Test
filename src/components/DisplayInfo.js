import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowHideList: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowHideList: !this.state.isShowHideList,
    });
  };
  render() {
    // console.log(this.props);
    const { listUsers } = this.props;
    // console.log(listUsers);
    //Props
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowHideList === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowHideList && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age < 30 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age}</div>
                  <div>And I'm from {user.address}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
