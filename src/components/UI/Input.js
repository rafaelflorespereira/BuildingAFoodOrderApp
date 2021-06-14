import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* The spread operator above take aall the values keys got from props and put into html tag attributes */}
    </div>
  );
};

export default Input;
