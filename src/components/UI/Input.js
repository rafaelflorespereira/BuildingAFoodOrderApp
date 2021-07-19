import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input  ref={ref} {...props.input} />
      {/* The spread operator above take all the values keys got from props and put into html tag attributes */}
    </div>
  );
});

export default Input;
