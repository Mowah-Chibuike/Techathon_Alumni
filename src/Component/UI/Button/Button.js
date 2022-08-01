import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, type, disabled, className, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
