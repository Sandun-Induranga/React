import { Component } from "react";
import Post from "../../components/Post";

export default class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <Post
          title="React"
          description="Introduction to React"
          tags={["intro", "frontend"]}
        />
      </div>
    );
  }
}
