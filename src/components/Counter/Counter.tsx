import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="p-5 min-h-screen flex justify-center items-center flex-col">
        <div className="shadow-xl p-40 rounded-xl">
          <h1 className="text-center font-bold text-6xl">Count : 0</h1>
          <div className="flex space-x-4 mt-20 justify-center">
            <button className="border text-green-800 border-green-800 rounded-xl hover:bg-green-800 hover:text-white py-2 px-4">
              Increase
            </button>
            <button className="border text-red-800 border-red-800 rounded-xl hover:bg-red-800 hover:text-white py-2 px-4">
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}
