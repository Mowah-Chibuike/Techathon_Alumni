import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodePullRequest,
  faLightbulb,
  faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";
import Value from "./Values";
import classes from "./Home.module.css";

const Values = [
  {
    icon: <FontAwesomeIcon className={classes.valueIcon} icon={faCode} />,
    content: "Progromming mastery is one of our many priorites",
  },
  {
    icon: (
      <FontAwesomeIcon className={classes.valueIcon} icon={faCodePullRequest} />
    ),
    content: "Learn to work with other developers in our open source program",
  },
  {
    icon: <FontAwesomeIcon className={classes.valueIcon} icon={faLightbulb} />,
    content: "We love to promote innovative minds and ideas",
  },
  {
    icon: (
      <FontAwesomeIcon className={classes.valueIcon} icon={faPaintRoller} />
    ),
    content: "Creativity is one of the many things we try to uphold",
  },
];

const ValuesList = () => {
  return (
    <section className={classes.valuesList}>
      {Values.map((value, id) => (
        <Value key={id} icon={value.icon} content={value.content} />
      ))}
    </section>
  );
};

export default ValuesList;
