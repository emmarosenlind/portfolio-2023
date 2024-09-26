import React from 'react'
import './Chip.css';


const Chip = ({text,color,textColor, isSmall=false, icon=undefined}) => {
  console.log(icon)
  return (
    <div className={isSmall ? "chip-small" : "chip"} style={{backgroundColor: color,  color: textColor}}>
        <img src={icon}/>
        {text}
    </div>
  )
}

export default Chip;