import { type } from "os";
import React, { Component } from "react";

type TagProps = {
  tag: string;
};

type TagState = {};

export default class Tag extends Component<TagProps, TagState> {
  render() {
    return (
      <div className=" px-6 py-2 border border-slate-400 rounded">
        <p>{this.props.tag}</p>
      </div>
    );
  }
}
