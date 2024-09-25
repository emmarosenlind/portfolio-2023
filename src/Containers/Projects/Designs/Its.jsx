import React from 'react'

import Plickbild from '../../../Assets/plickbild.png';
import PlickLogo from '../../../Assets/PlickLogo.png';
import products from '../../../Assets/Schysst/products.png';
import man from '../../../Assets/Schysst/man.png';
import thing from '../../../Assets/Schysst/doyourthing.png';
import poster2 from '../../../Assets/Schysst/poster2.png';
import persona from '../../../Assets/Schysst/persona.png';
import barnkul from '../../../Assets/Schysst/barnkul.png';
import quiz from '../../../Assets/Schysst/vilken-kebab-ar-du.png';
import tillsammans from '../../../Assets/Schysst/laga-tillsammans.png';
import Chip from '../../../Components/Chip/Chip';
import BackArrow from '../../../Components/BackArrow/BackArrow';



function Its() {
  return (

    <div className = "portfolio__schysst">
    <BackArrow/>
      <div className = "portfolio__projects">
      
        <div className ="portfolio__projects-left">

         
          <div className ="portfolio__projects-left_content">


            <div className='chip_container'>
                <Chip color= "var(--its-color)" text="Accessibility"/>
                <Chip color= "var(--its-color)" text="UX Design"/>
            </div>
            
            <h1>Improve accessibility of administration system</h1>
            <p id="ingress">Using my accessibility expertise, I collaborated with ITS to ensure their Ladok administration system, used nationally by students and faculty for managing grades and registrations, complied with the new WCAG regulations and public sector accessibility standards.</p>
              <div className ="portfolio__projects-left_content-description">
                <h2>DURATION</h2>
                <p>Six months</p>
                <h2>TOOLS</h2>
                <p>Design Thinking, User Interviews, Online Survey A/B testing, Wireframes, Figma</p>
              </div>
          </div>
        </div>

        <div className = "portfolio__projects-right" style={{ backgroundColor: "var(--its-color)" }}>
            <div className="portfolio__projects-right_img" ></div>
        </div>
      </div>





      <div className ="portfolio__projects-solutions">
        <div className='portfolio__projects-solutions_text'>
          <p>value</p>
          <h1>As a result of my work, the feature for tuition fees became accessible according to WCAG standards and could serve as a model for making other features within ITS equally accessible.</h1>
        </div>
        <div className='portfolio__projects-solutions_img'>
        </div>
      </div>


         {/** Right grid */}
         <div className = "portfolio__projects" id = "reverse">
        <div className = "portfolio__projects-right" style={{ backgroundColor: "var(--its-color)" }}></div>

        <div className = "portfolio__projects-left">
            <div className = "portfolio__projects-left_content">
                <h1>Background</h1>
                <p>Plick is a Swedish marketplace platform specializing in sustainable fashion with over one million users across Sweden. The platform facilitates buying and selling of pre-owned clothing and accessories, promoting a circular economy and environmentally friendly consumption.</p>
                <h3>The challenge</h3>  
                <p>To enhance the user experience for sellers at the secondhand marketplace platform Plick, we aimed to improve the product listing process. The goal was to boost seller participation and ultimately establish Plick as the premier choice for reselling clothes.</p>
                </div>
        </div>
      </div>

    </div>
  )
}

export default Its