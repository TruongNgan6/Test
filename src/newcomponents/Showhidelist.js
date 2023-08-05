import React from "react";
import DisplayShow from "./DisplayShow";
import CarInfo from "./CarInfo";

class ShowHideList extends React.Component {
  state = {
    CarInfo: [
      { id: 1, brand: "Johnhua", madeIn: "Sydney", year: "20" },
      { id: 2, brand: "Johnhua Micheal", madeIn: "Melborne", year: "30" },
    ],
  };
  render() {
    return (
      <div>
        <CarInfo />
        <DisplayShow CarInfo={this.state.CarInfo} />
      </div>
    );
  }
}

export default ShowHideList;
