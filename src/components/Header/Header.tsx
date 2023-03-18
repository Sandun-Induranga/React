import { Component } from "react";
import userImage from "../../assets/user.png";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-blue-edited-300 text-white fixed w-full h-20 top-0 p-4">
        <div className="w-full h-full">
          <div className="flex w-full">
            <div className="w-1/2">
              <h1>Sandun</h1>
            </div>
            <div className="w-1/2 h-full items-center">
              <div className="flex justify-between h-full items-center">
                <h4 className="cursor-pointer text-lg">Home</h4>
                <h4 className="cursor-pointer text-lg">About</h4>
                <h4 className="cursor-pointer text-lg">Contact</h4>
                <img src={userImage} alt="user" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
