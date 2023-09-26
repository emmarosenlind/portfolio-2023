import React from 'react'
import './Preview.css'
import publication from '../../Assets/publication.svg';
import solwe from '../../Assets/solwetest.png';
import coetus from '../../Assets/coetus.png';

const Code = ({transition}) => {
  
  return (
    <div className={`portfolio__preview ${transition ? 'transition' : ''}`}>
        <div className='portfolio__preview-card'>
            <a href="solwe"><div className='portfolio__preview-card_image'>
                <img src ={solwe} alt ="img"></img>
            </div>
            <div className='portfolio__preview-card_text'>
                <p>#award</p>
                <h1>Nasa Space Apps Challenge</h1>
            </div>
            </a>
        </div>

        <div className='portfolio__preview-card' >
            <a href="/coetus">
                <div className='portfolio__preview-card_image'id = "coetus-cover">
                  <img src ={coetus} alt ="img"></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#award</p>
                  <h1>Good-tech hack</h1>
              </div>
            </a>
        </div>

        <div className='portfolio__preview-card'>
            <a href="https://press.um.si/index.php/ump/catalog/book/786">
                <div className='portfolio__preview-card_image'>
                  <img src ={publication} alt ="img" ></img>
              </div>
              <div className='portfolio__preview-card_text'>
                  <p>#publication</p>
                  <h1>YOUNG ADULTS’ ATTITUDE TOWARDS DIGITAL PAYMENT METHODS AND FINANCIAL RESPONSIBILITY</h1>
              </div>
            </a>
        </div>
    </div>
  )
}

export default Code