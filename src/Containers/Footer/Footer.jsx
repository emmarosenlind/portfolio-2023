import { React } from "react";
import "./Footer.css";
import smallsmiley from "../../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="portfolio__footer">
      <div className="portfolio__footer-content">
        <img id="smiley" src={smallsmiley} alt="smiley"></img>
        <h1>Contact me</h1>
        <p>
          Let's make something fun together! Email me at{" "}
          <a
            style={{ textDecoration: "underline" }}
            target="_blank"
            href="mailto:emma.rosenlind@gmail.com"
          >
            emma.rosenlind@gmail.com
          </a>{" "}
          or connect at{" "}
          <a
            style={{ textDecoration: "underline" }}
            target="_blank"
            href="https://www.linkedin.com/in/emmarosenlind/"
          >
            Linkedin
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
