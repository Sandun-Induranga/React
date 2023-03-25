import { type } from "os";
import { Component } from "react";
import Tag from "../Tag";

type PostProps = {
  title: string;
  description: string;
  tags: string[];
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  render() {
    return (
      <div className="p-6 mt-2 w-full border border-slate-400 rounded text-center">
        <h3 className="text-3xl">{this.props.title}</h3>
        <p className="text-xl p-4">{this.props.description}</p>
        <div className="flex gap-6 justify-center">
          <Tag tag={this.props.tags[0]} />
          <Tag tag={this.props.tags[1]} />
        </div>
      </div>
    );
  }
}
