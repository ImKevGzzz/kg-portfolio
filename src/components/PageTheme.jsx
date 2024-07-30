import React, { useEffect, useState } from "react";
import DarkModeIcon from "../Icons/DarkModeIcon";
import LightModeIcon from "../Icons/LightModeIcon";

export default function PageTheme() {
  const [hoverIcon, setHoverIcon] = useState(false);
  const [changeSvgIcons, setChangeSvgIcons] = useState(true);
  const [exitingAnimation, setExitingAnimation] = useState(false);
  const [enteringAnimation, setEnteringAnimation] = useState(false);
  const [pageTheme, setPageTheme] = useState(("light"));

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setPageTheme(storedTheme);
      setChangeSvgIcons(storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (pageTheme === "dark") {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', pageTheme);
  }, [pageTheme]);

  const changeStateButton = () => {
    setExitingAnimation(true);
    setTimeout(() => {
      setPageTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
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
          className={`w-6 h-6 dark:fill-white fill-darkModeColor transition-all origin-center hover:scale-[0.9] ${exitingAnimation ? "scale-0" : ""} ${enteringAnimation ? "scale-0" : "scale-100"} ${hoverIcon ? "scale-[0.9]" : "scale-100"}`}
          hoverIcon={hoverIcon}
        />
      ) : (
        <LightModeIcon
          className={`w-6 h-6 dark:fill-white fill-darkModeColor transition-all ease duration-[0.1s] origin-center ${exitingAnimation ? "scale-0" : ""} ${enteringAnimation ? "scale-0" : "scale-100"} ${hoverIcon ? "scale-[0.9]" : "scale-100"}`}
          hoverIcon={hoverIcon}
        />
      )}
    </button>
  );
}
