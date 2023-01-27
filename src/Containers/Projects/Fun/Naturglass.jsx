import React from 'react'
import naturglass from '../../../Assets/Naturglass.png';
import logo from '../../../Assets/ng_logo.png';
import { Navbar } from '../../../Components';
import Favicon from 'react-favicon';


function Naturglass(){
  return (

    
        <div className='portfolio__naturglass'>
        <Favicon url="../../Assets/logo.png" />

        
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>NaturGlass Factory</h1>
                    <p>The task is based on a fictitious scenario where the customer Naturglass Factory wants to launch a new website in connection with their international expansion. The design was supposed to go along with the following keywords: Natural ingredients, floral, happy, tasty, organic and bright. My job was to create an unique webdesign based on the keywords.</p>
                
                    <div className ="portfolio__projects-left_content-description">
                        <h2>DURATION</h2>
                        <p>5 - 10 hours during entrance test for UX/UI employment</p>

                        <h2>ROLE</h2>
                        <p>UX/UI-design, graphic material</p>

                        <h2>TOOLS</h2>
                        <p>Adobe Photoshop, Adobe Illustrator and Figma</p>

                    </div>
                </div>
            </div>

            <div className = "portfolio__projects-right" id = "naturglass">
                <div className = "portfolio__projects-right_img" ><img src ={logo} id="naturglass1" alt = "solwe"/></div>
            </div>
        </div>

        <div className ="naturglass_image"><img  src={naturglass}></img></div>

    </div>
    
  )
}

export default Naturglass