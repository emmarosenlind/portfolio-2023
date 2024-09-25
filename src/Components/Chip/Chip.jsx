import React from 'react'
import './Chip.css';


const Chip = ({text,color,textColor, isSmall=false}) => {
  return (
    <div className={isSmall ? "chip-small" : "chip"} style={{backgroundColor: color,  color: textColor}}>{text}</div>
  )
}

export default Chip;