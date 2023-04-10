import React, { Component } from "react";

const totalDigit = (num) => {
  let total = 0;
  while (num != 0) {
    total++;
    num = parseInt(num / 10);
  }
  return total;
};
class Timer extends Component {
  state = {
    sec: 0,
    min: 0,
    hr: 0,
  };

  componentDidMount() {
    this.addInterval = setInterval(() => {
      this.setState(() => ({
        sec: this.state.sec == 59 ? 0 : this.state.sec + 1,
        min: this.state.sec == 59 ? this.state.min + 1 : this.state.min,
        hr: this.state.min == 59 ? this.state.hr + 1 : this.state.hr,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.addInterval);
  }
  render() {
    return (
      <>
        <h1 className="text-center">
          {totalDigit(this.state.hr) < 2 ? `0${this.state.hr}` : this.state.hr}{" "}
          :{" "}
          {totalDigit(this.state.min) < 2
            ? `0${this.state.min}`
            : this.state.min}{" "}
          :{" "}
          {totalDigit(this.state.sec) < 2
            ? `0${this.state.sec}`
            : this.state.sec}
        </h1>
      </>
    );
  }
}

export default Timer;
