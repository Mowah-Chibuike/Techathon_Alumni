import React from "react";
import classes from "./Input.module.css";

const Input = ({
  label,
  id,
  name,
  placeholder,
  step,
  type,
  value,
  onChange,
  onBlur,
  validState,
}) => {
  return (
    <div className={`${classes.control}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        step={step}
        type={type || "text"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {!validState && <p>This field mustn't be empty</p>}
    </div>
  );
};

export default Input;
