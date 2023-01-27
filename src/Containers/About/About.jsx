import React from 'react'
import './About.css'
import pic from '../../Assets/About.png';
import video from '../../Assets/video.mov';


function About(){

  return (
    <div className='portfolio' id ="about">

      <div className="overlay"></div>

       <video autoPlay loop muted id = "video"><source src={video}></source></video>

       <div className='portfolio__about' id = "about">
          <div className ="portfolio__about-content">
              <h1>It's all about <br/> the experience</h1>
              <p>As a user-centered designer with a passion for creating intuitive and effective digital solutions, I have over 3 years of experience in the field of UX design. I am currently in my fourth year of a Master of Science program in UX design and working as a part-time UX consultant. My skills include user research, wireframing and prototyping, user testing, project management and programming. I also have an interest in graphic design. <br/> <br/>In my free time, I enjoy staying active and being outdoors in nature, which brings fresh perspectives to my work. I am always looking for new challenges and opportunities to improve my skills and deliver the best possible user experience."</p>
              <h2><a href="mailto:emma.rosenlind@gmail.com" >Let's talk</a></h2>
          </div>
          <img src={pic} alt ="Me"/>
       </div>
      
    </div>
  )
}

export default About




