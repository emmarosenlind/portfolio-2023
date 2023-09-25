import React from 'react'
import './Preview.css'
import cover from '../../Assets/code-cover.png';

const Code = ({transition}) => {
  
  return (
    <div className={`portfolio__preview ${transition ? 'transition' : ''}`}>
        <div className='portfolio__preview-card' >
            <a href="portfolio/ove">
              <div className='portfolio__preview-card_image' >
                <img src ={cover} alt ="img"></img>
            </div>
            <div className='portfolio__preview-card_text'>
                <p>#code</p>
                <h1>Coming soon</h1>
            </div>
            </a>
        </div>


        <div className='portfolio__preview-card'>
            <a href="portfolio/Schysst">
                <div className='portfolio__preview-card_image'>
                  <img src ={cover} alt ="img" ></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#code</p>
                  <h1>Coming soon</h1>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Code