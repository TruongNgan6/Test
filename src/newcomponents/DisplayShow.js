import React from "react";

class DisplayShow extends React.Component {
  state = {
    isShowList: true,
  };

  handleShow = () => {
    this.setState({
      isShowList: !this.state.isShowList,
    });
  };
  render() {
    const { CarInfo } = this.props;
    console.log(CarInfo);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShow();
            }}
          >
            {this.state.isShowList === true
              ? "Click me to show"
              : "Click me to Hide"}
          </span>
        </div>
        {this.state.isShowList && (
          <div>
            {CarInfo.map((car) => {
              return (
                <div key={car.id}>
                  <div>My brand car is {car.brand}</div>
                  <div>And made in {car.madeIn} </div>
                  <div>Year {car.year} </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayShow;
