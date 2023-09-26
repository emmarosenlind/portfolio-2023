import React from 'react'
import background from '../../../Assets/PathPilot1.png';
import cover from '../../../Assets/PathPilot2.png';
import profile from '../../../Assets/Profile.png';
import content from '../../../Assets/content.png';
import spaceapps from '../../../Assets/spaceapps.png';
import datatjej from '../../../Assets/DataTjej.png';
import logo from '../../../Assets/PathPilot1.png';



function PathPilot(){
    
  return (
    <div className='portfolio__solwe'>
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>PathPilot: BLABLALBABLA</h1>
                    <p>Our mentorship platform connects students and young professionals with experienced experts for tailored mentorship, emphasizing communication and networking to expand their knowledge and skills.</p>
                    <div className ="portfolio__projects-left_content-description">
                        <h2>DURATION</h2>
                        <p>Spring 2023</p>
                        <h2>ROLE</h2>
                        <p>As a member of the tech/development team I was responsible for the concept and UI</p>
                        <h2>TOOLS</h2>
                        <p>Figma, React, Materials UI</p>
                    </div>
                </div>
            </div>
            <div className = "portfolio__projects-right" id ="solwe2" style={{ backgroundImage: `url(${background})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'  }}>
            </div>
        </div>


        <div className = "portfolio__projects" id = "reverse">
            <div className = "portfolio__projects-right" id ="solwe2" style={{ backgroundImage: `url(${cover})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'  }}>
            </div>
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                
                    <h1>Our solution</h1>
                    <p>Our solution is “Solwe” - an application that simplifies the usage of worldwide renewable energy resources all together in one single application. Solwe will also provide the user with extra value by giving personalized advice and notifications that give off a feeling of AI. In all the visual representations the user has the freedom to change all the parameters and add data like e.g. rain to compare with. Solwe combines NASAs data with functions that let the users predict, compare, and plan their daily power consumption in a fun and user-friendly way.
                    <br/> <br/>Are you interested in our research, flowcharts and requierment specification? Read more about the process <a href="https://www.w3schools.com" >here</a></p>
                </div>
            </div>
        </div>
    
        <div className ="naturglass_image"><img alt ="img" src={profile}></img></div>
        <div className ="naturglass_image"><img alt ="img" src={content}></img></div>
    </div>
  )
}

export default PathPilot