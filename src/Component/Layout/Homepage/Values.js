import React from "react";
import classes from "./Home.module.css";

const Value = ({ icon, content }) => {
  return (
    <div className={classes.value}>
      {icon}
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default Value;
