import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    alert("Hello World");
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>Hello React</h1>
        {/* <span className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span>
        <span className="inline-grid grid-cols-3 gap-4">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
        </span> */}
      </div>
    );
  }
}
