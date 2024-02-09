import React, { useState, useEffect } from "react";
import "./Home.css"; // Create a CSS file for styling

const ScrollingElement = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scrollY state on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-element" style={{ bottom: `${scrollY}px` }}>
      {/* Your content goes here */}
      Scroll down to see the element move!
    </div>
  );
};

export default ScrollingElement;
