import React, { Component } from "react";
import Card from "../Card/Card";

export default class CardContainer extends Component {
  render() {
    return (
      <div className="flex justify-center gap-6 p-4">
        <Card
          title="Card 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
        <Card
          title="Card 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
        <Card
          title="Card 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
        <Card
          title="Card 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maxime
          maiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,
          impedit dolorem enim minus ullam pariatur rem in laborum sit quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
          sed quo. Dolor maxime excepturi, temporibus magni tempore dolorem
          vitae explicabo cupiditate, recusandae optio dolores reiciendis
          tempora neque ratione cum nostrum?"
        />
      </div>
    );
  }
}
