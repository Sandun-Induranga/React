import { Component } from "react";
import Header from "../../components/Header";
import { type } from "os";
import { PostDetail } from "../../types/PostDetail";
import Post from "../../components/Post";

type ProfileProps = {};
type ProfileState = {
  posts: PostDetail[];
  isClickedCreateNewPost: boolean;
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      isClickedCreateNewPost: false,
      posts: [
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
          <div className="w-full flex flex-col">
            {!this.state.isClickedCreateNewPost ? (
              <>
                <div className="cursor-pointer w-full p-4 bg-blue-900 text-white rounded">
                  <h6>Create New Post</h6>
                </div>
                <div className="flex justify-center items-center cursor-pointer w-full py-6 px-4 rounded border border-slate-400 text-slate-400">
                  <h6>Your New Post</h6>
                </div>
              </>
            ) : (
              <div className="cursor-pointer w-full p-4 bg-blue-900 text-white rounded">
                <h6>Discart Post</h6>
              </div>
            )}
          </div>
          <div className="p-6">
            {this.state.posts.map((post) => (
              <Post
                id={post.id}
                title={post.titile}
                description={post.description}
                hourCount={post.hourCount}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
