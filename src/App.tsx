import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default class App extends Component {
  // componentDidMount(): void {
  //   alert("Hello World");
  // }

  render(): React.ReactNode {
    return (
      <div className="min-h-screen font-poppins">
        <Content />
      </div>
    );
  }
}
