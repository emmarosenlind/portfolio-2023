import React from 'react'
import './About.css'
import pic from '../../Assets/About.png';
import video from '../../Assets/video.mov';


function About(){

  return (
    <div className='about'>
       <video autoPlay loop muted id = "video"><source src={video}></source></video>
       <div className='about-content'>
              <h1>It's all about <br/> the experience</h1>
              <p> We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace. <br/> <br/>Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment. Whether you’re looking for a full project solution or require specific design skills to complement your in-house team, we deliver solutions that pack a real punch.</p>
              <h2><a></a>Let's talk</h2>
       </div>
      
    </div>
  /*
    <div className='portfolio'>
      

      <video autoPlay loop muted id = "video"><source src={video}></source></video>


      <div className='portfolio__about'>

          <div className ="portfolio__about-content">
              <h1>It's all about <br/> the experience</h1>
              <p> We’re not selling “big agency services at small agency prices”. We deliver exceptional design solutions to complex business problems – extremely efficiently and delivered at lightning-fast pace. <br/> <br/>Our experience has built us an enviable reputation for consistently delivering the wow factor, underpinned with intelligent and thoughtful design that is focused on delivering a clear return on your investment. Whether you’re looking for a full project solution or require specific design skills to complement your in-house team, we deliver solutions that pack a real punch.</p>
              <h2><a></a>Let's talk</h2>
          </div>


          <img src={pic} />
              
      </div>

    </div>
    */
   


  )
}

export default About




