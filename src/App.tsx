import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    alert("Hello World");
  }

  render(): React.ReactNode {
    return <div className="App"></div>;
  }
}
