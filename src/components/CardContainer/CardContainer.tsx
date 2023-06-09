import { type } from "os";
import React, { Component } from "react";
import Card from "../Card/Card";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

type CardContainerProps = {};

type CardContainerState = {
  cardList: CardContainerDetails[];
};

type CardContainerDetails = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default class CardContainer extends Component<
  CardContainerProps,
  CardContainerState
> {
  constructor(props: CardContainerDetails) {
    super(props);
    this.state = {
      cardList: [
        {
          id: "1",
          icon: <AccessAlarmsIcon />,
          title: "Card 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "2",
          icon: <AccessAlarmsIcon />,
          title: "Card 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "3",
          icon: <AccessAlarmsIcon />,
          title: "Card 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
        {
          id: "4",
          icon: <AccessAlarmsIcon />,
          title: "Card 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maximemaiores ab, nobis quam sapiente eaque reiciendis voluptatem quasi,impedit dolorem enim minus ullam pariatur rem in laborum sit quas.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,sed quo. Dolor maxime excepturi, temporibus magni tempore doloremvitae explicabo cupiditate, recusandae optio dolores reiciendistempora neque ratione cum nostrum?",
        },
      ],
    };
  }

  render() {
    return (
      <div className="flex justify-center gap-6 p-4">
        {this.state.cardList.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    );
  }
}
