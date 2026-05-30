import React from "react";
import "./Button.css";

const Button = ({ title, type, onClick }) => {
  return (
    <button className={`custom-btn ${type}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;