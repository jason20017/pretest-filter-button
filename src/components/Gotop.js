import React, { useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

const Gotop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      setVisible(true);
    } else if (scroll <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className="gotop"
        onClick={scrollToTop}
        style={{ opacity: visible ? 1 : 0 }} //控制style中的opacity顯示1與0
      >
        <BsChevronDoubleUp />
      </button>
    </div>
  );
};

export default Gotop;
