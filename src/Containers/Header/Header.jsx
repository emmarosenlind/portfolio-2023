import React from 'react'
import './Header.css';


const Header = () => {
  return (
    <div className ="portfolio__header section-padding" id="home">
      
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hi, I am Emma, a soon to be UX-lorem ipsum lorfsklsgfklsdfkl</h1>
        <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis incididunt </p>
        <div className ="portfolio__header-content__links">
          <p><a>Linkedin</a></p>
          <p><a>Email</a></p>
        </div>
      </div>
    </div>
  )
}

export default Header;