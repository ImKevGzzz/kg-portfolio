import React from "react";

const DarkModeIcon = ({className, hoverIcon}) => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={
      hoverIcon
        ? {
            filter:
              "drop-shadow(0px 0px 10px rgb(255, 144, 64))",
            transitionDuration: "150ms",
            transitionTimingFunction: "ease",
          }
        : { filter: "none" }
    }
  >
    <g clipPath="url(#clip0_154_17)">
      <path
        d="M21 3.486C17.8319 3.48658 14.7235 4.34713 12.0062 5.97584C9.28896 7.60455 7.06476 9.94033 5.57091 12.734C4.07706 15.5277 3.36959 18.6745 3.52397 21.8388C3.67834 25.003 4.68877 28.066 6.44748 30.701C8.20618 33.336 10.6472 35.4442 13.5101 36.8007C16.373 38.1571 19.5505 38.711 22.7035 38.4032C25.8565 38.0954 28.8668 36.9375 31.4134 35.0529C33.9599 33.1684 35.9471 30.6279 37.163 27.7025C37.7597 26.2675 36.33 24.8255 34.8915 25.41C32.426 26.4087 29.6885 26.5117 27.155 25.7012C24.6214 24.8908 22.4521 23.218 21.024 20.9738C19.596 18.7296 18.9996 16.0559 19.3386 13.4175C19.6776 10.7792 20.9305 8.34307 22.8795 6.53275L23.0142 6.39275C23.9785 5.29025 23.212 3.5 21.6877 3.5H21.2222L21.1032 3.4895L20.9982 3.486H21Z"
        fill="white"
        className={className}
      />
    </g>
    <defs>
      <clipPath id="clip0_154_17">
        <rect width="42" height="42" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DarkModeIcon;
