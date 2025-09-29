import React from "react";

const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={`custom-bar-dot ${active ? "active" : ""}`}
      onClick={onClick}
      style={{
        display: "inline-block",
        width: "30px",
        height: "4px",
        background: active ? "#dc3545" : "#ccc",
        margin: "0 4px",
        borderRadius: "2px",
        cursor: "pointer",
      }}
    />
  );
};

export default CustomDot;
