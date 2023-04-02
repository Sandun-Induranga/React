import { ChangeEvent, Component } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import { PostDetail } from "../../types/PostDetail";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField } from "@mui/material";

type ProfileProps = {};

type ProfileState = {
  postList: PostDetail[];
  isClickedCreateNewPost: boolean;
  title: string;
  description: string;
  hoursCount: number;
  lecturerName: string;
  tagString: string;
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      hoursCount: 0,
      lecturerName: "",
      tagString: "",
      isClickedCreateNewPost: false,
      postList: [
        {
          id: "1",
          title: "Lecture Day 01",
          description:
            "Lecture D01 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 8,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture Day 02",
          description:
            "Lecture D02 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 6,
          lecturerName: "Chanu",
          tags: ["react", "tailwind"],
        },
        {
          id: "3",
          title: "Lecture Day 03",
          description:
            "Lecture D03 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          tags: ["Lifecycle", "rounting", "structure"],
        },
      ],
    };
  }

  handleClickCreateNewPost = () => {
    this.setState((prevState) => ({
      ...prevState,
      isClickedCreateNewPost: !prevState.isClickedCreateNewPost,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Saved..!");
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <>
        <Header />
        <div className="mt-20 py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            {!this.state.isClickedCreateNewPost ? (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-blue-900 text-white rounded flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6>Create New Post</h6>
                  <AddCircleIcon />
                </div>
                <div
                  className="cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400"
                  onClick={this.handleClickCreateNewPost}
                >
                  <PostAddIcon />
                  <h6>Your New Post</h6>
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-blue-900 text-white rounded flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6>Discard Post</h6>
                  <RemoveCircleIcon />
                </div>
                <div className="w-full cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400">
                  <form
                    className="flex flex-col space-y-3 w-full"
                    onSubmit={this.handleSubmit}
                  >
                    <TextField
                      label="Post Title"
                      type="text"
                      variant="outlined"
                      name="title"
                      placeholder="Enter post title"
                      onChange={this.handleInputChange}
                      value={this.state.title}
                      fullWidth={true}
                      required
                    />
                    <TextField
                      label="Post Description"
                      type="text"
                      variant="outlined"
                      name="description"
                      placeholder="Enter post description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      fullWidth={true}
                      multiline
                      minRows={5}
                      maxRows={Infinity}
                      required
                    />
                    <TextField
                      label="Hours Count"
                      type="number"
                      variant="outlined"
                      name="hoursCount"
                      placeholder="Enter hours count"
                      onChange={this.handleInputChange}
                      value={this.state.hoursCount}
                      fullWidth={true}
                    />
                    <TextField
                      label="Lecturer Name"
                      type="text"
                      variant="outlined"
                      placeholder="Enter Lecturer Name"
                      name="lecturerName"
                      onChange={this.handleInputChange}
                      value={this.state.lecturerName}
                      fullWidth={true}
                    />
                    <TextField
                      label="Tags (Comma separated tags)"
                      type="text"
                      variant="outlined"
                      name="tagString"
                      placeholder="Enter comma separated tags"
                      onChange={this.handleInputChange}
                      value={this.state.tagString}
                      fullWidth={true}
                      required
                    />
                    <button className="py-2 bg-accent-navy-200 text-white rounded">
                      <h6>Publish Post</h6>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

          <Divider className="!my-5" />

          {this.state.postList.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              hoursCount={post.hoursCount}
              lecturerName={post.lecturerName}
              tags={post.tags}
            />
          ))}
        </div>
      </>
    );
  }
}
