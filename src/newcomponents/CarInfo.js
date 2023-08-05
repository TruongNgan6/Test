import React from "react";

class CarInfo extends React.Component {
  state = {
    brand: "Toyota",
    madeIn: "Japan",
    year: "50",
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChangeBrand = (event) => {
    this.setState({
      brand: event.target.value,
    });
  };

  handleChangeMadeIn = (event) => {
    this.setState({
      madeIn: event.target.value,
    });
  };

  handleChangeYear = (event) => {
    this.setState({
      year: event.target.value,
    });
  };
  render() {
    return (
      <div>
        Brand Car {this.state.brand} and Made in {this.state.madeIn} in{" "}
        {this.state.year}
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label>Bard Car </label>
          <input
            onChange={(event) => {
              this.handleChangeBrand(event);
            }}
            value={this.state.brand}
            type="text"
          ></input>

          <label> Made in </label>
          <input
            onChange={(event) => {
              this.handleChangeMadeIn(event);
            }}
            value={this.state.madeIn}
            type="text"
          ></input>

          <label> in </label>
          <input
            onChange={(event) => {
              this.handleChangeYear(event);
            }}
            value={this.state.year}
            type="text"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CarInfo;
