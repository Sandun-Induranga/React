import { Component } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { PostDetail } from "../../types/PostDetail";

type HomeProps = {};

type HomeState = {
  postList: PostDetail[];
};

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          titile: "Post 1",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
          hourCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "2",
          titile: "Post 2",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
          hourCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "3",
          titile: "Post 3",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
          hourCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "4",
          titile: "Post 4",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse.",
          hourCount: 10,
          tags: ["ui", "ux"],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="p-6">
          {this.state.postList.map((post) => (
            <Post
              id={post.id}
              title={post.titile}
              description={post.description}
              hourCount={post.hourCount}
              tags={post.tags}
            />
          ))}
        </div>
      </>
    );
  }
}
