import React from 'react'
import background from '../../../Assets/PathPilot1.png';
import cover from '../../../Assets/PathPilot2.png';
import profile from '../../../Assets/Profile.png';
import content from '../../../Assets/content.png';




function PathPilot(){
    
  return (
    <div className='portfolio__solwe'>
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>A mentorship platform for inclusion</h1>
                    <p>During the course "Technology for Social Media," my team collaborated with Edith Cowan University in Australia to undertake a project aimed at promoting the inclusion of Indigenous teenagers. Our solution was is a mentorship platform that connects students and young professionals with experts for personalized mentorship experiences. The platform places a strong emphasis on communication and networking, allowing users to expand their knowledge and skills in a supportive and inclusive environment.</p>
                    
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
                    <p>The project spanned the entire spring semester, with the Australian team serving as the client. Together with them, we conducted market research and identified user needs to lay the foundation for delivering a product. Working with users on the other side of the globe posed unique challenges during this project.
                    <br/> <br/>
                    The solution we delivered comprises a graphical concept, views for the majority of the user interface, and a backend system featuring a matching algorithm. This algorithm pairs young individuals with mentors based on their interests and specific needs.</p>
                </div>
            </div>
        </div>
    
        <div className ="naturglass_image"><img alt ="img" src={profile}></img></div>
        <div className ="naturglass_image"><img alt ="img" src={content}></img></div>
    </div>
  )
}

export default PathPilot