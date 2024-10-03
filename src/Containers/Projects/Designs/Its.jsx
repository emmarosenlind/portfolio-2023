import React from "react";

import Axure from "../../../Assets/axure.jpg";
import acc from "../../../Assets/accessibility.svg";
import PlickLogo from "../../../Assets/PlickLogo.png";
import products from "../../../Assets/Schysst/products.png";
import man from "../../../Assets/Schysst/man.png";
import thing from "../../../Assets/Schysst/doyourthing.png";
import poster2 from "../../../Assets/Schysst/poster2.png";
import persona from "../../../Assets/Schysst/persona.png";
import barnkul from "../../../Assets/Schysst/barnkul.png";
import quiz from "../../../Assets/Schysst/vilken-kebab-ar-du.png";
import tillsammans from "../../../Assets/Schysst/laga-tillsammans.png";
import Chip from "../../../Components/Chip/Chip";
import BackArrow from "../../../Components/BackArrow/BackArrow";

function Its() {
  return (
    <div className="portfolio__schysst">
      <BackArrow />
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <div className="chip_container">
              <Chip hasStroke text="Accessibility" />
              <Chip hasStroke text="UX Design" />
            </div>

            <h1>
              Improve accessibility of public sector administration system
            </h1>
            <p id="ingress">
              Using my accessibility expertise, I collaborated with ITS to
              ensure their Ladok administration system, used nationally by
              students and faculty for managing grades and registrations,
              complied with the new WCAG regulations and public sector
              accessibility standards.
            </p>
            <div className="portfolio__projects-left_content-description">
              <h2>DURATION</h2>
              <p>Three months</p>
              <h2>TOOLS</h2>
              <div className="chip_container">
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  icon={Axure}
                  text="Axure"
                />

                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="AxeDevtools"
                />

                <Chip color="#000" textColor="#fff" isSmall text="Wave" />
                <Chip color="#000" textColor="#fff" isSmall text="WCAG" />
                <Chip color="#000" textColor="#fff" isSmall text="Angular" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--its-color)" }}
        >
          <div className="portfolio__projects-right_img">
            <img src={acc} alt="Icons with hand, brain, eye and ear"></img>
          </div>
        </div>
      </div>

      <div className="portfolio__projects-solutions">
        <div className="portfolio__projects-solutions_text">
          <p>value</p>
          <h1 id="quote">
            As a result of my work, the feature for tuition fees became
            <b> accessible according to WCAG standards</b> and could serve as a
            model for making other features within ITS equally accessible.
          </h1>
        </div>
        <div className="portfolio__projects-solutions_img"></div>
      </div>

      {/* * Right grid
      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--its-color)" }}
        ></div>

        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The challenge</h1>
            <p>
              I joined the team as a UX designer to contribute to a new feature
              within Ladok: tuition fees management, overseen by university
              administrators. My role involved evaluating the accessibility of
              the feature and identifying potential shortcomings, with a
              particular focus on accessibility for screen readers, high
              contrast, and tab order in tables. I was also tasked with
              developing proposed solutions for any identified issues and
              implementing them within the system. As a result of my work, the
              tuition fees feature became accessible according to WCAG standards
              and could serve as a model for making other features within ITS
              equally accessible.
            </p>
          </div>
        </div> 
      </div>*/}
    </div>
  );
}

export default Its;
