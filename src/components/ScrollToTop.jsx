import React, { useState, useEffect } from "react";
import "../assets/Styles/Style.css";
import { HiChevronUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-to-top rounded-3 ${
        visible ? "show" : ""
      } d-none d-md-flex align-items-center justify-content-center position-fixed bg-white z-3`}
      onClick={scrollToTop}
    >
      <HiChevronUp size={35} strokeWidth={1} />
    </div>
  );
};

export default ScrollToTop;
