// DayNightSwitchh.js

import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./DayNightSwitch.css";

const DayNightSwitchh = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleTheme = () => {
    setIsNight(!isNight);
  };

  return (
    <div
      className={`day-night-switch ${isNight ? "night" : "day"}`}
      onClick={toggleTheme}
    >
      {isNight ? (
        <FiMoon size={30} color="#fff" />
      ) : (
        <FiSun size={30} color="#fff" />
      )}
    </div>
  );
};

export default DayNightSwitchh;
