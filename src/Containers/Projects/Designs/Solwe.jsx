import React from 'react'
import background from '../../../Assets/Solwe/solwe.jpeg';
import spaceapps from '../../../Assets/spaceapps.png';
import { Navbar } from '../../../Components';





function Solwe(){
    
    
  return (
    <div className='portfolio__solwe'>
        
        <div className = "portfolio__projects">

            <div className ="portfolio__projects-left">

                <div className ="portfolio__projects-left_content">
               
                    <h1>Nasa Space Apps Challenge</h1>
                    <p>Space Apps Challenge is a world wide competition arranged by NASA. The assignment was to choose one of 28 challenges and solve it in the best way over a weekend. We participated through Stockholm and won the regional competition.</p>
                
                    <div className ="portfolio__projects-left_content-description">
                        <h2>DURATION</h2>
                        <p>3 days, during a weekend</p>

                        <h2>ROLE</h2>
                        <p>In a group of six people, I contributed with the UX/UI design and research</p>

                        <h2>TOOLS</h2>
                        <p>Google Forms, Xcode and Figma</p>

                    </div>
                </div>
            </div>

            <div className = "portfolio__projects-right" id = "solwe1">
                <div className = "portfolio__projects-right_img" ><img src ={spaceapps} id="solwe1_img" alt = "solwe"/></div>
            </div>
        </div>






        <div className = "portfolio__projects">
            <div className = "portfolio__projects-right" id ="solwe2" style={{ backgroundImage: `url(${background})`, 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'  }}>
            </div>
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                    <h1>The challenge</h1>
                    <p>The assignment was to choose one of 28 challenges and solve it in the best way over a weekend. The challenge we chose was briefly to create an application that handle NASA's weather data and make it easy and readable for ordinary people who own solar cells.</p>
                    <h1>Our solution</h1>
                    <p>Our solution is “Solwe” - an application that simplifies the usage of worldwide renewable energy resources all together in one single application. Solwe will also provide the user with extra value by giving personalized advice and notifications that give off a feeling of AI. In all the visual representations the user has the freedom to change all the parameters and add data like e.g. rain to compare with. Solwe combines NASAs data with functions that let the users predict, compare, and plan their daily power consumption in a fun and user-friendly way.
                    <br/> <br/>Are you interested in our research, flowcharts and requierment specification? Read more about the process <a href="https://www.w3schools.com" >here</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solwe