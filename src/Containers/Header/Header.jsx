import React from 'react'
import './Header.css';


const Header = () => {
  return (
    <div className ="portfolio__header section-padding" id="home">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hi, I am Emma, a UX-designer from Sweden who loves...</h1>
        <p>Making boring things exciting, skiing down mountains, developing new skills, and creating designs that will make your heart skip a beat. Let's make something fun together!</p>
        <div className ="portfolio__header-content__links">
          <p><a href="https://www.linkedin.com/in/emmarosenlind/">Linkedin</a></p>
          <p><a href="mailto:emma.rosenlind@gmail.com">Email</a></p>
        </div>
      </div>
    </div>
  )
}

export default Header;