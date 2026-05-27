import React from "react";
import "./Button.css";

const Button = ({ title, type }) => {
  return (
    <button className={`custom-btn ${type}`}>
      {title}
    </button>
  );
};

export default Button;