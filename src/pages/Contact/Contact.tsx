import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import Header from "../../components/Header";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div className="text-center text-slate-900 p-6 mt-20">
            <h1 className="mt-6">Contact Us</h1>
            <section className="w-full flex justify-center">
              <p className="p-6 w-1/2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                voluptatum molestiae! Modi, doloribus fugit! Eius, odio!
                Necessitatibus repellendus eos magnam blanditiis aperiam nulla
                similique asperiores excepturi, voluptatibus minima eligendi
                quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iure neque minus nostrum deleniti eligendi officia nobis
                aliquam? Eligendi laudantium aspernatur tempora, deserunt nulla
                molestias, assumenda minima, aut necessitatibus vitae maiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                voluptatum molestiae! Modi, doloribus fugit! Eius, odio!
                Necessitatibus repellendus eos magnam blanditiis aperiam nulla
                similique asperiores excepturi, voluptatibus minima eligendi
                quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Iure neque minus nostrum deleniti eligendi officia nobis
                aliquam? Eligendi laudantium aspernatur tempora, deserunt nulla
                molestias, assumenda minima, aut necessitatibus vitae maiores.
              </p>
            </section>
          </div>
          <form action="" className="w-full py-8 px-32 flex flex-col gap-4">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter Your Email"
              required
            />
            <TextField
              label="Message"
              type="textl"
              variant="outlined"
              placeholder="Enter Your Email"
              multiline
              minRows={10}
              maxRows={Infinity}
              required
            />

            <Button variant="contained" className="bg-blue-900">
              Submit
            </Button>
          </form>
        </div>
      </>
    );
  }
}
