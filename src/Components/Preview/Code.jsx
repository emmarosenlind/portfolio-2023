import React from 'react'
import './Preview.css'
import publication from '../../Assets/publication.png';
import schysst from '../../Assets/schysst-preview.png';
import solwe from '../../Assets/solwetest.png';
import PathPilot from '../../Assets/PathPilotPreview.png';
import Chip from '../Chip/Chip';
import ove from '../../Assets/ovepreview.svg';


const Code = ({transition}) => {
  
  return (
    <div className={`portfolio__preview ${transition ? 'transition' : ''}`}>
        <div className='portfolio__preview-card'>
            <a href="/schysst"><div className='portfolio__preview-card_image'>
                <img src ={schysst} alt ="img"></img>
            </div>
            <div className='portfolio__preview-card_text'>
            <div className='chip_container'>
                        <Chip isSmall color= "#000" textColor= "#fff"text="Concept Design"/>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UI Design"/>
                    </div>
                <h1>Schysst Käk</h1>
            </div>
            </a>
        </div>

        <div className='portfolio__preview-card' >
            <a href="/pathpilot">
                <div className='portfolio__preview-card_image'>
                <img src ={PathPilot} alt ="Cover of PathPilot"></img>
              </div>
              <div className='portfolio__preview-card_text'>
              <div className='chip_container'>
                        <Chip isSmall color= "#000" textColor= "#fff"text="Concept Design"/>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UI Design"/>
                    </div>
                  <h1>PathPilot</h1>
              </div>
            </a>
        </div>

        <div className='portfolio__preview-card'>
            <a href="/ove">
                <div className='portfolio__preview-card_image'>
                  <img src ={ove} alt ="img" ></img>
              </div>
              <div className='portfolio__preview-card_text'>
              <div className='chip_container'>
                        <Chip isSmall color= "#000" textColor= "#fff"text="Concept Design"/>
                        <Chip isSmall color= "#000" textColor= "#fff"text="UI Design"/>
                    </div>
                  <h1>OVE</h1>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Code