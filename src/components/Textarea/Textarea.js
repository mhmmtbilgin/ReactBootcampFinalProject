import React from "react";
import "./index.css";

export default function input(props) {
  const { label, placeholder, onChange, value } = props;
  return (
    <div className="textarea">
      <div className="textarea__text">{label}</div>
      <textarea
        className="textarea__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
