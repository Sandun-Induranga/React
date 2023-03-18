import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // componentDidMount(): void {
  //   alert("Hello World");
  // }

  render(): React.ReactNode {
    return (
      <div className="bg-blue-edited-200 min-h-screen">
        <h1 className="text-center font-semibold">Hello World</h1>
        <h2 className="text-center font-light">Hello World</h2>
        <h3 className="text-center font-light">Hello World</h3>
        <h4 className="text-center font-light">Hello World</h4>
        <h5 className="text-center font-light">Hello World</h5>
      </div>
    );
  }
}
