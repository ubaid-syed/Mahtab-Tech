// LocomotiveScrollWrapper.js
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "../../loco.css"; // Import Locomotive Scroll's CSS

const LocomotiveScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust smoothness
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;
