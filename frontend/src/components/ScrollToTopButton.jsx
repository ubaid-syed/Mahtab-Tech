import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { gsap } from "gsap";

const ScrollProgressButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTotal = scrollHeight - clientHeight;
      const progress = (scrollTop / scrollTotal) * 100;

      setScrollProgress(progress);
      setShowButton(scrollTop > 300);

      gsap.to(buttonRef.current, {
        y: scrollTop > 300 ? 0 : 100,
        opacity: scrollTop > 300 ? 1 : 0,
        duration: 0.5,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-5 right-5 p-3 cursor-pointer transition-opacity duration-300"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-black transition-colors duration-300">
        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
        {isHovered || scrollProgress >= 100 ? (
          <FaArrowUp size={20} color="white" />
        ) : (
          <div className="absolute bottom-[6px] right-[10px] w-7 h-7 bg-transparent rounded-full flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 transform -translate-y-1">
            {Math.round(scrollProgress)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollProgressButton;
