import React from 'react'
import './Preview.css'
import solwe from '../../Assets/solwetest.png';
import ng from '../../Assets/ng-preview.png';
import coetus from '../../Assets/coetus.png';

const Fun= () => {
  return (
    <div className='portfolio__preview'>
        <div className='portfolio__preview-card'>
            <a href="solwe"><div className='portfolio__preview-card_image'>
                <img src ={solwe}></img>
            </div>
            <div className='portfolio__preview-card_text'>
                <p>#funstuff</p>
                <h1>Nasa Space Apps Challenge</h1>
            </div>
            </a>
        </div>

        <div className='portfolio__preview-card'>
            <a href="naturglass">
              <div className='portfolio__preview-card_image'>
                  <img src ={ng}></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#funstuff</p>
                  <h1>Naturglass factory</h1>
              </div>
            </a>
        </div>

        <div className='portfolio__preview-card' >
            <a href="/coetus">
                <div className='portfolio__preview-card_image'id = "coetus-cover">
                  <img src ={coetus}></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#funstuff</p>
                  <h1>Good-tech hack</h1>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Fun