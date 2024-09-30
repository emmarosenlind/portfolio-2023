import React from 'react'
import './Chip.css';


const Chip = ({text,color,textColor, isSmall=false, icon=undefined}) => {
  
  return (
    <div className={isSmall ? "chip-general chip-small" : "chip chip-general"} style={{backgroundColor: color,  color: textColor}}>
        {icon && <img src={icon}/>}
        {text}
    </div>
  )
}

export default Chip;