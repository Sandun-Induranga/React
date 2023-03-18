import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import userImage from "../../assets/user.png";

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2";

    return (
      <div className="bg-blue-edited-300 text-white fixed w-full h-20 top-0 p-4">
        <div className="w-full h-full">
          <div className="flex w-full">
            <div className="w-1/2">
              <h1>Sandun</h1>
            </div>
            <div className="w-1/2 h-full items-center">
              <div className="flex justify-between h-full items-center">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Contact
                </NavLink>
                <NavLink to={"/profile"}>
                  <img src={userImage} alt="user" className="w-10 h-10" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
