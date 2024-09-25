import React, {useState} from 'react'
import {Code, Uxui, Fun} from '../../Components'
import './Menu.css'

var styling = {

    selected: {
        fontFamily: "var(--font-family)",
        fontWeight: 500,
        fontSize: "16px",
        textDecoration: "underline",
        
        
    },
    button: { 
        fontFamily: "var(--font-family)",
        fontWeight: 500,
        fontSize: "16px", 
    }
  }

  function Menu(){
    const [design, setDesign] = useState(true)
    const [dev, setDev] = useState(false)
    const [fun, setFun] = useState(false)
    const [transition, setTransition] = useState(false)

    const selectItem = (s) => {


        setTransition(true);
        setTimeout(() => {


            setDesign(false);
            setDev(false);
            setFun(false);


            if (s === 'a') {
                setDesign(true);
            }
            if (s === 'u') {
                setDev(true);
            }
            if (s === 'd') {
                setFun(true);
            }
            setTransition(false);
        }, 300);
    }

    return(
        <div className = "portfolio__menu" id = "menu"> 
        <h1> My work</h1>
            <div className ="portfolio__menu-container"> 
                <div className='portfolio__MenuItem' 
                    style={design ? styling.selected : styling.button} 
                    onClick={() => selectItem('a')}>
                        <p id="menu_p">UX Design</p>
                </div>

                <div className='portfolio__MenuItem' 
                    style={dev ? styling.selected : styling.button} 
                    onClick={() => selectItem('u')}>
                        <p id="menu_p">UI Design</p>
                </div>

                <div className='portfolio__MenuItem' 
                    style={fun ? styling.selected : styling.button} 
                    onClick={() => selectItem('d')}>
                        <p id="menu_p">Fun stuff</p>
                </div>
            </div>
                {design ? <Uxui /> : ''}
                {dev ? <Code transition={transition} /> : ''}
                {fun ? <Fun /> : ''}
            </div>
    )
}

export default Menu;