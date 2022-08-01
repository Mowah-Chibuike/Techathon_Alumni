import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Message.module.css";
import Card from "../Card/Card";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const OverLay = ({ style, message }) => {
  return (
    <Card className={classes.message}>
      <div style={style} className={classes.content}>
        {message}
      </div>
    </Card>
  );
};

const Message = ({ style, message }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverLay style={style} message={message} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Message;
