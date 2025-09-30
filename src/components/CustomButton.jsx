// Components/CustomButton.jsx
import React from "react";

function CustomButton({ label}) {
  return (
    <button
      className="text-white border-0 px-4 py-2 fs-4 fw-semibold bg-danger rounded-2 "
    >
      {label}
    </button>
  );
}

export default CustomButton;
