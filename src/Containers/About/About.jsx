import React, { useState, useEffect, useContext } from 'react';
import './About.css';
import pic1 from '../../Assets/pic1.png';
import pic2 from '../../Assets/pic10.png';
import pic3 from '../../Assets/pic9.png';
import pic4 from '../../Assets/pic10.png';
import pic5 from '../../Assets/pic5.png';
import pic6 from '../../Assets/pic8.png';
import pic7 from '../../Assets/pic12.png';
import krull from '../../Assets/krull.svg';
import smallsmiley from '../../Assets/logo.png';
import FAQData from "../FAQ/FAQData";
import { FaPlus, FaTimes } from "react-icons/fa"; // Importera plus-ikonen och kryss-ikonen från react-icons
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../Assets/logo.png';



function About() {
  const [faqs, setFaqs] = useState(FAQData.map((faq) => ({ ...faq, open: false })));
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  const styles = ["style1", "style2", "style3", "style4", "style5", "style6", "style7"];
  const styleValue = styles[currentStyleIndex]; // Flytta deklarationen hit

  const closeMenu = () => {
      setToggleMenu(false);
  };
  
  const Menu = () => (
      <>
      <p><a href="/#menu" onClick={closeMenu}>Projects</a></p>
      <p><a href="/ab" onClick={closeMenu}>About</a></p>
      <p><a href="/edu" onClick={closeMenu}>Education</a></p>
      </>
  )
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };



  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * styles.length);
    setCurrentStyleIndex(randomIndex);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 50000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick2 = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //setClicked(true);
  };

  return (
    <div className= "portfolio_ab" id={styleValue} >

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
                ? <RiCloseLine  size = {27} onClick={() => setToggleMenu(false)} /> 
                : <RiMenu3Line  size = {27} onClick={() => setToggleMenu(true)} />
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

      <div className='portfolio__about' onClick={handleClick2}>
        <div className='portfolio__about-content' >
          <h1>It's all about <br /> the experience</h1>
          <p>I am a user-centered designer with a passion for creating intuitive and effective digital solutions. Currently, I am doing my fifth and last year of a Master of Science program in UX design abroad at Korea University. My skills include user research, wireframing, and prototyping, user testing, project management, and programming. I also have a keen interest in graphic design.
            <br /><br /></p>
          <h2><a href="mailto:emma.rosenlind@gmail.com">Let's talk</a></h2>
        </div>
        <img
          src={images[currentImageIndex]}
          alt='me'
        />
      </div>

      <div className="faq-container">
        <h1 classname ="faq-title">FAQ</h1>
        {faqs.map((faq, index) => (
            <div key={index}>
            <div
                className={"faq " + (faq.open ? "open" : "")}
                onClick={() => toggleFAQ(index)}
            >
                <div className="faq-question">
                {faq.question}
                {/* Villkorlig rendering av ikonen beroende på om frågan är öppen eller inte */}
                {faq.open ? <FaTimes className="faq-plus-icon" /> : <FaPlus className="faq-plus-icon" />}
                </div>
                <div className="faq-answer">{faq.answer}</div>
            </div>
            <hr className="faq-divider" />
            </div>
        ))}
        </div>
        <img id = "krull"
          src={krull}
          alt='me'
        />

        <div className='portfolio__footer'>
              <div className='portfolio__footer-content'>
              <img id ="smiley"src ={smallsmiley} alt ="smiley" ></img>
                <h1>Contact me</h1>
                <p>Let's make something fun together! Email me at <a href="mailto:emma.rosenlind@gmail.com">emma.rosenlind@gmail.com</a> or connect at <a href="https://www.linkedin.com/in/emmarosenlind/">Linkedin</a> </p>
              </div>
          </div>
    </div>
  );
}

export default About;
