import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { useEffect} from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotationDegree = scrollY * 0.5; // Justera denna faktor för mer eller mindre rotation
        setRotation(rotationDegree);

      };

    useEffect(()=> {
    window.addEventListener('scroll', function() {
        handleScroll();
    });
    },[])


const closeMenu = () => {
    setToggleMenu(false);
};



const Menu = () => (
    <>
    <p><a href="/#menu" onClick={closeMenu}>Projects</a></p>
    <p><a href="/ab" onClick={closeMenu}>About</a></p>
    </>
)
    
  return (
    <div className ="portfolio__navbar">
        <div className = "portfolio__navbar-links">
            <div className ="portfolio__navbar-links_logo">
                <a href="/"><img style={{
            display: "block",
          transform: `rotate(${rotation/2}deg)`,
          transition: "transform 0.1s ease",
        }} src={logo} alt ="logo" /></a>
            </div>
            <div className="portfolio__navbar-links_container">
                <Menu />
            </div>
            </div>
        <div className="portfolio__navbar-sign">
            <button 
                type="button" 
                onClick={() => window.open("https://www.linkedin.com/in/emmarosenlind/", "_blank")}>
                Contact
            </button>
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