import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../Assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


const closeMenu = () => {
    setToggleMenu(false);
};


const Menu = () => (
    <>
    <p><a href="/#menu" onClick={closeMenu}>Projects</a></p>
    <p><a href="/#about" onClick={closeMenu}>About</a></p>
    <p><a href="/edu" onClick={closeMenu}>Education</a></p>
    </>
)





    
  return (
    <div className ="portfolio__navbar">
        <div className = "portfolio__navbar-links">
            <div className ="portfolio__navbar-links_logo">
                <a href="/"><img src={logo} alt ="logo" /></a>
            </div>
            <div className="portfolio__navbar-links_container">
                <Menu />
            </div>
            </div>
            <div className ="portfolio__navbar-sign">
                <button href="https://www.linkedin.com/in/emmarosenlind/" type="button">Contact</button>
            </div>

            <div className="portfolio__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#00" size = {27} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line color= "#000" size = {27} onClick={() => setToggleMenu(true)} />
                }
                
                {toggleMenu &&(
                    <div className ="portfolio__navbar-menu_container scale-up-center">
                        <div className ="portfolio__navbar-menu_container-links">
                            <Menu/>
                        </div> 
                        <div className ="portfolio__navbar-menu_container-links-sign">
                        </div>
                    </div>
                )}
            </div>
        </div>
    
  );
};

export default Navbar;