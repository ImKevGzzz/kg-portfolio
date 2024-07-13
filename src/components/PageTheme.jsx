import React, { useState } from "react";
import DarkModeIcon from "../Icons/DarkModeIcon";
import LightModeIcon from "../Icons/LightModeIcon";

export default function PageTheme() {
  const [hoverIcon, setHoverIcon] = useState(false);
  const [changeSvgIcons, setChangeSvgIcons] = useState(true);
  const [exitingAnimation, setExitingAnimation] = useState(false);
  const [enteringAnimation, setEnteringAnimation] = useState(false);

  const changeStateButton = () => {
    setExitingAnimation(true);
    setTimeout(() => {
      setChangeSvgIcons((prev) => !prev);
      setExitingAnimation(false);
      setEnteringAnimation(true);
      setTimeout(() => {
        setEnteringAnimation(false);
      }, 50);
    }, 50);
  };

  return (
    <button
      onClick={changeStateButton}
      onMouseEnter={() => setHoverIcon(true)}
      onMouseLeave={() => setHoverIcon(false)}
      className="flex items-center p-[3px]"
    >
      {changeSvgIcons ? (
        <DarkModeIcon
          className={`w-6 h-6 dark:fill-white fill-darkModeColor transition-all origin-center ${exitingAnimation ? "scale-0" : ""} ${enteringAnimation ? "scale-0" : "scale-100"}`}
          hoverIcon={hoverIcon}
        />
      ) : (
        <LightModeIcon
          className={`w-6 h-6 dark:fill-white fill-darkModeColor transition-all ease duration-[0.1s] origin-center ${exitingAnimation ? "scale-0" : ""} ${enteringAnimation ? "scale-0" : "scale-100"}`}
          hoverIcon={hoverIcon}
        />
      )}
    </button>
  );
}
