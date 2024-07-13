import React, { useState } from "react";
import DarkModeIcon from "../Icons/DarkModeIcon";
import LightModeIcon from "../Icons/LightModeIcon";

export default function PageTheme() {
  const [hoverIcon, setHoverIcon] = useState(false);
  const [changeSvgIcons, setChangeSvgIcons] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [entering, setEntering] = useState(false);

  const changeStateButton = () => {
    setExiting(true);
    setTimeout(() => {
      setChangeSvgIcons((prev) => !prev);
      setExiting(false);
      setEntering(true);
      setTimeout(() => {
        setEntering(false);
      }, 50); // Duración de la animación de entrada
    }, 200); // Duración de la animación de salida
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
          className={`w-6 h-6 fill-white transition-all origin-center ${exiting ? "scale-0" : ""} ${entering ? "scale-0" : "scale-100"}`}
          hoverIcon={hoverIcon}
        />
      ) : (
        <LightModeIcon
          className={`w-6 h-6 fill-white transition-all ease duration-[0.1s] origin-center ${exiting ? "scale-0" : ""} ${entering ? "scale-0" : "scale-100"}`}
          hoverIcon={hoverIcon}
        />
      )}
    </button>
  );
}
