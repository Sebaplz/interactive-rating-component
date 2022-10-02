import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button className="btn">{props.value}</button>
    </>
  );
}

export default Button;