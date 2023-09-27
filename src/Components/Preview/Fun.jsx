import React from 'react'
import './Preview.css'
import DataTjej from '../../Assets/DataTjejPreview.png';
import ng from '../../Assets/ng-preview.png';
import PathPilot from '../../Assets/PathPilotPreview.png';

const Fun= () => {
  return (
    <div className='portfolio__preview'>
        <div className='portfolio__preview-card'>
            <a href="datatjej"><div className='portfolio__preview-card_image'>
                <img src ={DataTjej} alt ="Cover of DataTjej"></img>
            </div>
            <div className='portfolio__preview-card_text'>
                <p>#volunteering</p>
                <h1>DataTjej: Redesign and Maintenance</h1>
            </div>
            </a>
        </div>

        <div className='portfolio__preview-card'>
            <a href="naturglass">
              <div className='portfolio__preview-card_image'>
                  <img src ={ng} alt ="Cover of Naturglass"></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#employmentcase</p>
                  <h1>Naturglass factory</h1>
              </div>
            </a>
        </div>

        <div className='portfolio__preview-card' >
            <a href="/PathPilot">
                <div className='portfolio__preview-card_image'>
                  <img src ={PathPilot} alt ="Cover of PathPilot"></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#funstuff</p>
                  <h1>Path Pilot</h1>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Fun