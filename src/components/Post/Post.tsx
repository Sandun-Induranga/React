import { type } from "os";
import { Component } from "react";
import Tag from "../Tag";

type PostProps = {
  id: string;
  title: string;
  description: string;
  hourCount: number;
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
          {this.props.tags.map((text) => (
            <Tag tag={text} />
          ))}
        </div>
      </div>
    );
  }
}
