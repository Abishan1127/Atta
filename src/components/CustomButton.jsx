// Components/CustomButton.jsx
import React from "react";

function CustomButton({ label, bgColor = "#dc3545" }) {
  return (
    <button
      className="text-white border-0 px-4 py-2 fw-semibold"
      style={{ backgroundColor: bgColor, borderRadius: "4px" }}
    >
      {label}
    </button>
  );
}

export default CustomButton;
