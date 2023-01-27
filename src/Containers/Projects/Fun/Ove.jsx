import React from 'react'
import naturglass from '../../../Assets/Naturglass.png';
import logo from '../../../Assets/ng_logo.png';
import { Navbar } from '../../../Components';
import cover from '../../../Assets/ove-cover.png';
import ove from '../../../Assets/ove1.png';


function Ove(){
  return (
    <div className='portfolio__solwe'>
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>Ove: Make shopping smarter</h1>
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

            <div className = "portfolio__projects-right" id = "ove">
                <div className = "portfolio__projects-right_img" ><img  id="ove" src={ove}alt = "ove"/></div>
            </div>
        </div>



        <div className = "portfolio__projects">
            <div className = "portfolio__projects-right" id ="coetus2" style={{ backgroundImage: `url(${cover})`, 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' } }>
            </div>
            
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                    <h1>The challenge</h1>
                    <p>The hackathon Good Tech Hack took place in February 2021. The challenge was to create an innovative solution that society will benefit from, in 24 hours. The theme was based on the eleventh global goal of the United Nations - Sustainable cities and communities. Our team consisted of five participants. We decided on the challenge about social inclusion:
                    </p>              
                    </div>
            </div>
        </div>
        

    </div>
  )
}

export default Ove