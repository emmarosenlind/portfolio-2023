import React from "react";

import SustainAxStart from "../../../Assets/sustainAxstart.svg";
import SustainAxChallenge from "../../../Assets/sustainAxChallenge.svg";
import SustainAxProcess from "../../../Assets/sustainAxProcess.svg";
import PlickLogo from "../../../Assets/PlickLogo.png";
import logo from "../../../Assets/sustainlogo.svg";
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
import Google from "../../../Assets/googlelogo.webp";
import Trello from "../../../Assets/trello.svg";
import Figma from "../../../Assets/figmalogo.svg";

function SustainAx() {
  return (
    <div className="portfolio__schysst">
      <BackArrow />
      <header className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <div className="chip_container">
              <Chip hasStroke text="UX Design" />
              <Chip hasStroke text="UX Lead" />
            </div>

            <h1>
              From Excel to SaaS: Leading the Design of an Advanced Analysis
              Tool
            </h1>
            <p id="ingress">
              In an effort to ease the production of ESG analysis, I led the
              design of a SaaS platform that replaces traditional Excel
              spreadsheets. This innovative solution streamlines data management
              and enhances collaboration for users seeking to conduct thorough
              ESG analyses. By focusing on user-centric design, we created a
              tool that meets the evolving needs of businesses committed to
              sustainability.
            </p>
            <div className="portfolio__projects-left_content-description">
              <h2>DURATION</h2>
              <p>Nine months</p>
              <h2>TOOLS</h2>
              <div className="chip_container">
                <Chip
                  icon={Google}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Material UI"
                  alt="Google Logotype"
                />
                <Chip
                  icon={Trello}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Trello"
                  alt="Trello Logotype"
                />
                <Chip
                  icon={Figma}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Figma"
                  alt="Figma Logotype"
                />
                <Chip color="#000" textColor="#fff" isSmall text="Flowchart" />
                <Chip color="#000" textColor="#fff" isSmall text="FigJam" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio__projects-right"
          style={{
            backgroundImage: `url(${SustainAxStart})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="portfolio__projects-right_img"></div>
        </div>
      </header>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "#FFEEDE" }}
        >
          {" "}
          <div className="portfolio__projects-right_img">
            <img
              style={{ maxWidth: "80vw" }}
              src={SustainAxChallenge}
              alt="Illustration of circle and ESGZonex Logotype"
            ></img>
          </div>
        </div>

        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The challenge</h1>
            <p>
              SustainAx initiated a project to develop a tailored system,
              specifically for conducting ESG analyses. The objective was
              twofold: for SustainAx to utilize the system internally and to
              offer licenses to external entities seeking to perform analyses.
              To facilitate this, a SaaS (Software as a Service) platform was
              developed, enabling users to utilize customizable research
              templates and create collaborative teams.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio__projects-solutions">
        <div className="portfolio__projects-solutions_text">
          <p>value</p>
          <h1 id="quote">
            By transforming a manual, spreadsheet-based process into an
            <b> intuitive SaaS platform,</b> I enabled users to conduct ESG
            analyses more efficiently and collaboratively.
          </h1>
        </div>
      </div>

      {/** Left grid */}
      <div className="portfolio__projects" id="reverse">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The working process</h1>
            <p>
              As the lead UX and UI designer, I began by guiding the process of
              understanding user needs through stakeholder interviews and
              creating flow diagrams. I helped prioritize the development
              roadmap for the MVP, ensuring the most critical features were
              addressed first. I then introduced Material UI to streamline the
              design process and create consistency across the platform.
              Afterward, I designed interactive prototypes for various features,
              iterating based on user feedback. Additionally, I worked on
              integrating AI to enhance the ESG analysis process.
            </p>
          </div>
        </div>
        <div
          className="portfolio__projects-right"
          style={{
            backgroundImage: `url(${SustainAxProcess})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            alt: "Illustration of users including system owner, team owner and analyst",
          }}
        ></div>
      </div>
    </div>
  );
}

export default SustainAx;
