import React from "react";
import "./index.css";

export default function input(props) {
  const { label, type, placeholder, onChange, value } = props;
  return (
    <div className="field">
      <div className="field__text">{label}</div>
      <input
        className="field__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
