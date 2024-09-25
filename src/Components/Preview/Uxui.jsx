import React from 'react'
import './Preview.css'
import ove from '../../Assets/ovetest.png';
import plickpreview from '../../Assets/plickpreview.svg';
import its from '../../Assets/its.svg';
import gt from '../../Assets/gt-preview.png';
import schysst from '../../Assets/schysst-preview.png';
import Chip from '../Chip/Chip';


const Uxui = () => {
  return (

  
    <div className='portfolio__preview'>
        <div className='portfolio__preview-card'>
            <a href="/plick">
                <div className='portfolio__preview-card_image'>
                    <img src ={plickpreview} alt ="img" ></img>
                </div>
                <div className='portfolio__preview-card_text'>
                    <div className='chip_container'>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UX Design"/>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UX Research"/>
                    </div>
                    <h1>Plick</h1>
                </div>
            </a>
        </div>
      
      

        <div className='portfolio__preview-card'>
            <a href="/sustainax">
                <div className='portfolio__preview-card_image' id ="gymtrack">
                    <img src ={gt} alt ="img" ></img>
                </div>
                <div className='portfolio__preview-card_text'>

                    <div className='chip_container'>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UX Design"/>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UX Design"/>
                    </div>

                    <h1>SustainAx</h1>
                </div>
            </a>
        </div>



        <div className='portfolio__preview-card'>
            <a href="/its">
                <div className='portfolio__preview-card_image'>
                    <img src ={its} alt ="img" ></img>
                </div>
                <div className='portfolio__preview-card_text'>
                    <div className='chip_container'>
                        <Chip isSmall color= "#000" textColor= "#fff"text="Accessibility"/>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UX Design"/>
                    </div>
                    <h1>ITS</h1>
                </div>
            </a>
        </div>
    </div>

  )
}

export default Uxui