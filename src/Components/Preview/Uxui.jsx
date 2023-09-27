import React from 'react'
import './Preview.css'
import ove from '../../Assets/ovetest.png';
import gt from '../../Assets/gt-preview.png';
import schysst from '../../Assets/schysst-preview.png';


const Uxui = () => {
  return (

  
    <div className='portfolio__preview'>
        <div className='portfolio__preview-card'>
            <a href="/ove">
                <div className='portfolio__preview-card_image'>
                    <img src ={ove} alt ="img" ></img>
                </div>
                <div className='portfolio__preview-card_text'>
                    <p>#uxdesign  #businessdevelopment</p>
                    <h1>Ove: Makes shopping smarter</h1>
                </div>
            </a>
        </div>
      
      

        <div className='portfolio__preview-card'>
            <a href="/gymtrack">
                <div className='portfolio__preview-card_image' id ="gymtrack">
                    <img src ={gt} alt ="img" ></img>
                </div>
                <div className='portfolio__preview-card_text'>
                    <p>#uxdesign</p>
                    <h1>From dumb to smart AI driven user interfaces</h1>
                </div>
            </a>
        </div>



        <div className='portfolio__preview-card'>
            <a href="/schysst">
                <div className='portfolio__preview-card_image'>
                    <img src ={schysst} alt ="img" ></img>
                </div>
                <div className='portfolio__preview-card_text'>
                    <p>#uxdesign #concept</p>
                    <h1>Schysst Käk: Cook together</h1>
                </div>
            </a>
        </div>
    </div>

  )
}

export default Uxui