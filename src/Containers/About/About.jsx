import React from 'react'
import './About.css'
import pic from '../../Assets/About.png';

function About(){

  return (
    <div className='portfolio' id ="about">
      <div className="overlay"></div>
       <div className='portfolio__about' id = "about">
          <div className ="portfolio__about-content">
              <h1>It's all about <br/> the experience</h1>
              <p>I am a user-centered designer with a passion for creating intuitive and effective digital solutions. Currently, I am doing my fifth and last year of a Master of Science program in UX design abroad at Korea University. My skills include user research, wireframing, and prototyping, user testing, project management, and programming. I also have a keen interest in graphic design.
              <br/><br/>
              During my free time, I enjoy exploring the great outdoors or expressing my creative side through knitting or other handcrafts, even though I don't always have the patience for it. I am always on the lookout for new challenges and opportunities to improve my skills and provide the best possible user experience.</p>
              <h2><a href="mailto:emma.rosenlind@gmail.com" >Let's talk</a></h2>
          </div>
          <img src={pic} alt ="Me"/>
       </div>
    </div>
  )
}

export default About




