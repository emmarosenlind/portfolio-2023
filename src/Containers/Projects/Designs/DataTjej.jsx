import React from "react";
import background from "../../../Assets/DataTjejCover.png";
import datatjej from "../../../Assets/DataTjej.png";
import logo from "../../../Assets/Datatjejlogo.svg";
import Wordpress from "../../../Assets/wordpress.png";
import Google from "../../../Assets/googlelogo.webp";
import Trello from "../../../Assets/trello.svg";
import Figma from "../../../Assets/figmalogo.svg";
import Chip from "../../../Components/Chip/Chip";
import BackArrow from "../../../Components/BackArrow/BackArrow";

function DataTjej() {
  return (
    <div className="portfolio__solwe">
      <BackArrow />
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>DataTjej</h1>
            <p>
              The Datatjej Association is a non-profit organization in Sweden
              with the aim of promoting gender equality in the field of computer
              science and technology. Founded in 2003, the association is
              dedicated to increasing the representation and participation of
              women and non-binary individuals in the IT industry and technology
              sector. During the fiscal year 2022/2023, I served as a board
              member at DataTjej, where my responsibilities included overseeing
              the organization's IT and web-related operations.
            </p>
            <div className="portfolio__projects-left_content-description">
              <h2>TOOLS</h2>
              <div className="chip_container">
                <Chip
                  icon={Google}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Google Workspace"
                />
                <Chip
                  icon={Trello}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Trello"
                />
                <Chip
                  icon={Figma}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Figma"
                />
                <Chip
                  icon={Wordpress}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Wordpress"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__projects-right" id="datatjej1">
          <div className="portfolio__projects-right_img">
            <img src={logo} id="solwe1_img" alt="solwe" />
          </div>
        </div>
      </div>

      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          id="datatjej2"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Website management</h3>
            <p>
              I managed updates, design enhancements, and overall maintenance of
              Datatjej's website to ensure a fresh and engaging online presence.
            </p>
            <h3>Daily maintenance</h3>
            <p>
              I ensured the smooth day-to-day operation of the website,
              addressing technical issues promptly and maintaining its
              performance.
            </p>
            <h3>Support</h3>
            <p>
              I provided technical assistance and guidance to board members and
              stakeholders, fostering a seamless digital experience.
            </p>
          </div>
        </div>
      </div>

      <div className="naturglass_image" id="datatjej3">
        <img alt="img" src={datatjej}></img>
      </div>
    </div>
  );
}

export default DataTjej;
