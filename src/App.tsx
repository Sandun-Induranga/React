import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // componentDidMount(): void {
  //   alert("Hello World");
  // }

  render(): React.ReactNode {
    return (
      <div className="bg-blue-edited-200">
        <h1 className="text-center font-light min-h-screen">Hello World</h1>
      </div>
    );
  }
}
