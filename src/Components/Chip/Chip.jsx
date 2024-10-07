import React from "react";
import "./Chip.css";

const Chip = ({
  text,
  color,
  textColor,
  isSmall = false,
  icon = undefined,
  hasStroke = false,
  isRounded = false,
  alt = "",
}) => {
  return (
    <div
      className={`${
        isSmall ? "chip-general chip-small" : "chip chip-general"
      } ${hasStroke ? "chip-stroke" : ""}
      ${isRounded ? "chip-rounded" : ""}`}
      style={{ backgroundColor: color, color: textColor }}
    >
      {icon && <img alt={alt} src={icon} />}
      {text}
    </div>
  );
};

export default Chip;
