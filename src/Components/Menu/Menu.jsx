import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import { Uxdesign } from '../../Components'
import './Menu.css'

var styling = {

    selected: {
      
        fontFamily: "var(--font-family)",
        fontWeight: 500,
        fontSize: "16px",
        color: "pink"
    },
    button: { 
        fontFamily: "var(--font-family)",
        fontWeight: 500,
        fontSize: "16px",
        
    }
  }

const Menu = () => {
    
    const [uxui, setUx] = useState(true)
    const [dev, setDev] = useState(false)
    const [fun, setFun] = useState(false)


    const selectItem = (s) => {
        setUx(false);
        setDev(false);
        setFun(false);
    
        if (s === 'a') {
          setUx(true)
        }
        if (s === 'u') {
          setDev(true)
        }
        if (s === 'd') {
          setFun(true)
        }
      }

      return(
        <div className = "portfolio__menu" id = "menu"> 
        <h1> My work</h1>
            <div className ="portfolio__menu-container"> 
                <div className='portfolio__MenuItem' 
                    style={uxui ? styling.selected : styling.button} 
                    onClick={() => selectItem('a')}>
                        <p>#uxdesign</p>
                </div>

                <div className='portfolio__MenuItem' 
                    style={dev ? styling.selected : styling.button} 
                    onClick={() => selectItem('u')}>
                        <p>#code</p>
                </div>

                <div className='portfolio__MenuItem' 
                    style={fun ? styling.selected : styling.button} 
                    onClick={() => selectItem('d')}>
                        <p>#funstuff</p>
                </div>
            </div>

            {/*{uxui ? <Uxdesign /> : ''}
           
            {dev ? <Code /> : ''}
            {fun ? <FunStuff /> : ''}
      */}
        </div>
      )
}


export default Menu