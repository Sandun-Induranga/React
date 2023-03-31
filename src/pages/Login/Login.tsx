import { LoginOutlined } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="flex h-screen justify-center items-center">
        <Paper elevation={3} className="w-1/4 px-6 py-10">
          <form className="form flex flex-col gap-4">
            <TextField label="Email" id="email" fullWidth type="text" />
            <TextField
              label="Password"
              id="password"
              fullWidth
              type="password"
            />
            <NavLink to={"/home"}>
              <Button
                variant="contained"
                type="button"
                fullWidth
                color="primary"
                className="form__custom-button"
              >
                Log in
              </Button>
            </NavLink>
          </form>
        </Paper>
      </div>
    );
  }
}
