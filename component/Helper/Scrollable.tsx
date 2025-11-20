"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Scrollable = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`${
        showScroll
          ? "opacity-30 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      } fixed flex flex-col items-center justify-center z-[5001] bg-[#1b48c0] cursor-pointer hover:opacity-55 transition-all duration-1000 right-10 bottom-20 w-14 h-14`}
    >
      <FaArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

export default Scrollable;
