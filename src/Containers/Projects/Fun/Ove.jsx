import React from 'react'
import cover from '../../../Assets/ove-cover.png';
import ove from '../../../Assets/ove1.png';


function Ove(){
  return (
    <div className='portfolio__solwe'>
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>Ove: Make shopping smarter</h1>
                    <p>OVE is an app that gathers all of your memberships and membership benefits. It also shows store offers based on your preferences. By enabling location services, OVE will also notify you of active deals in your vicinity. </p>
                    <div className ="portfolio__projects-left_content-description">
                        <h2>DURATION</h2>
                        <p>5 month during the course "Business Service Design and Technology Development"</p>
                        <h2>ROLE</h2>
                        <p>UX/UI-design, graphic material and business development</p>

                        <h2>TOOLS</h2>
                        <p>Adobe Photoshop, Adobe Illustrator and Figma</p>
                    </div>
                </div>
            </div>
            <div className = "portfolio__projects-right" id = "ove">
                <div className = "portfolio__projects-right_img" ><img  id="ove" src={ove}alt = "ove"/></div>
            </div>
        </div>



        <div className = "portfolio__projects" id ="reverse">
            <div className = "portfolio__projects-right" id ="coetus2" style={{ backgroundImage: `url(${cover})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' } }>
            </div>
            
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                    <h1>The challenge</h1>
                    <p>This project is part of the course in "Business Service Design and Technology Development".The challenge was to come up with a business idea, create a business model canvas, and develop a prototype. </p>           
                    <h1>Our Solution</h1>
                    <p>The business idea we've developed is called OVE, an app that clarifies your memberships and their benefits. Based on the user's preferences, the app also displays general offers from the stores in one platform. By enabling location services on the app, OVE will also notify the user of active offers in the surrounding area, reminding them to take advantage of their discounts while they shop.
<br/><br/>
What sets OVE apart from existing solutions is its unique combination of consolidated memberships and discounts. Other similar solutions, such as Mecenat and student cards, only focus on students. OVE is for everyone who wants to shop smart.
</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ove