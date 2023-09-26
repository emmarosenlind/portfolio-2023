import React from 'react'
import background from '../../../Assets/DataTjejCover.png';
import spaceapps from '../../../Assets/spaceapps.png';
import datatjej from '../../../Assets/DataTjej.png';
import logo from '../../../Assets/Datatjejlogo.svg';



function DataTjej(){
    
  return (
    <div className='portfolio__solwe'>
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>DataTjej</h1>
                    <p>The Datatjej Association" is a non-profit organization in Sweden with the aim of promoting gender equality in the field of computer science and technology. Founded in 2003, the association is dedicated to increasing the representation and participation of women and non-binary individuals in the IT industry and technology sector.
                        During the fiscal year 2022/2023, I served as a board member at DataTjej, where my responsibilities included overseeing the organization's IT and web-related operations.
                        </p>
                    <div className ="portfolio__projects-left_content-description">
                        <h2>DURATION</h2>
                        <p>During 22/23</p>
                        <h2>ROLE</h2>
                        <p>As a member of the board, I was responsible of the website and all the other technical maintenance such as hosting and google workspace.</p>
                        <h2>TOOLS</h2>
                        <p>Google Workspace, Figma, Wordpress, Slack, Trello</p>
                    </div>
                </div>
            </div>
            <div className = "portfolio__projects-right" id = "datatjej1">
                <div className = "portfolio__projects-right_img" ><img src ={logo} id="solwe1_img" alt = "solwe"/></div>
            </div>
        </div>


        <div className = "portfolio__projects" id = "reverse">
            <div className = "portfolio__projects-right" id ="solwe2" style={{ backgroundImage: `url(${background})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'  }}>
            </div>
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                    <h3>Website management</h3>
                    <p>I managed updates, design enhancements, and overall maintenance of Datatjej's website to ensure a fresh and engaging online presence.</p>
                    <h3>Daily maintenance</h3>
                    <p>I ensured the smooth day-to-day operation of the website, addressing technical issues promptly and maintaining its performance.</p>
                    <h3>Support</h3>
                    <p>I provided technical assistance and guidance to board members and stakeholders, fostering a seamless digital experience.</p>
                </div>
            </div>
        </div>
    
        <div className ="naturglass_image"><img alt ="img" src={datatjej}></img></div>
    </div>
  )
}

export default DataTjej