import React from "react";
import "./index.css";
export default function Button(props) {
  const { buttonName, onClick } = props;
  return (
    <div className="form-btn">
      <button onClick={onClick} className="form-btn__button">
        {buttonName}
      </button>
    </div>
  );
}
