import { type } from "os";
import React, { Component } from "react";

type CounterProps = {};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    // Normal Function
    this.setState({ count: this.state.count + 1 });
  }

  // increaseCount = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  decreaseCount = () => {
    // Arrow function
    if (this.state.count >= 10) {
    }
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="p-5 min-h-screen flex justify-center items-center flex-col">
        <div className="shadow-xl p-40 rounded-xl">
          <h1 className="text-center font-bold text-6xl">
            Count : {this.state.count}
          </h1>
          <div className="flex space-x-4 mt-20 justify-center">
            <button
              disabled={this.state.count === 10}
              className="border text-green-800 border-green-800 rounded-xl hover:bg-green-800 hover:text-white py-2 px-4"
              onClick={this.increaseCount}
            >
              Increase
            </button>
            <button
              disabled={this.state.count === 0}
              className="border text-red-800 border-red-800 rounded-xl hover:bg-red-800 hover:text-white py-2 px-4"
              onClick={this.decreaseCount}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}
