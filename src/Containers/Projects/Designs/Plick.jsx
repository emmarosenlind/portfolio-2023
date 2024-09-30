import React from "react";

import Plickbild from "../../../Assets/plickbild.png";
import Process from "../../../Assets/Plick/designprocess.svg";
import Skiss from "../../../Assets/Plick/skiss.svg";
import Figma from "../../../Assets/figmalogo.svg";
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

function Plick() {
  return (
    <div className="portfolio__schysst">
      <BackArrow />
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <div className="chip_container">
              <Chip color="var(--plick-color)" text="UX Design" />
              <Chip color="var(--plick-color)" text="UX Research" />
            </div>

            <h1>
              Enhancing Efficieny and Satisfaction of the Listing Process on
              Plick
            </h1>
            <p id="ingress">
              To enhance the user experience for sellers at the secondhand
              marketplace platform Plick, we aimed to improve the product
              listing process. The goal was to boost seller participation and
              ultimately establish Plick as the premier choice for reselling
              clothes.
            </p>
            <div className="portfolio__projects-left_content-description">
              <h2>DURATION</h2>
              <p>Six months</p>
              <h2>TOOLS</h2>
              <div className="chip_container">
                <Chip
                  icon={Figma}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Figma"
                />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Design Thinking"
                />
                <Chip color="#000" textColor="#fff" isSmall text="Interviews" />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Online survey"
                />
                <Chip color="#000" textColor="#fff" isSmall text="Wireframes" />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="A/B testing"
                />
                <Chip color="#000" textColor="#fff" isSmall text="UX Audit" />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Heuristic Evaluation"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--plick-color)" }}
        >
          <div className="portfolio__projects-right_img">
            <img src={PlickLogo} alt="schysst käk"></img>
          </div>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          style={{ backgroundImage: `url(${Plickbild})` }}
        ></div>

        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The challenge</h1>
            <p>
              Plick is a Swedish marketplace platform specializing in
              sustainable fashion with over one million users across Sweden. The
              platform facilitates buying and selling of pre-owned clothing and
              accessories, promoting a circular economy and sustainable
              consumption.
              <br />
              <br />
              Customers often perceive the effort required to resell clothes as
              disproportionate to the perceived value, leading them to discard
              or donate items instead. To address this challenge, I investigated
              how to optimize the listing process, which is a crucial step in
              the selling journey, in order to enhance user experience and
              increase user engagement. By streamlining the process, the goal
              was to make it easier and more efficient for users to create
              listings, ultimately encouraging more sellers to participate and
              contribute to Plick's sustainable marketplace.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio__projects-solutions">
        <div className="portfolio__projects-solutions_text">
          <p>value</p>
          <p id="quote">
            By utilizing a design thinking method, I designed a new listing
            process that promised higher perceived <b>satisfaction</b> and{" "}
            <b>efficiency</b>.
          </p>
        </div>
        <div className="portfolio__projects-solutions_img"></div>
      </div>

      {/** Left grid */}
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>Design process</h1>
            <p>
              The project is based on a design process called Design Thinking.
              It suggests that the design process should have five phases.
              Empathize, Define, Ideate, Prototype and Test. It's an iterative
              process where we repeat until we get the expected result.{" "}
            </p>
            <h3>Empathize</h3>
            <p>
              The findings from the empathize phase in the design thinking
              process are described in this section. A survey was distributed to
              users in the app, followed by interviews conducted with selected
              users. Competitors were analyzed to understand the market, and the
              usability of the existing listing process on Plick was evaluated
              using heuristic guidelines. These methods helped in gaining a
              better understanding of user needs and challenges, and preparing
              for the next stage in the design process.
            </p>
          </div>
        </div>
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "#000" }}
        >
          <img src={Process} alt="schysst käk"></img>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--plick-color" }}
        ></div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Define</h3>
            <p>
              After brainstorming, we landed in three different concepts and a
              requirements specification for each concept was produced. The
              concepts that were developed came to be called "Cook together",
              "child fun" and "what kebab are you?". All three concepts differed
              and had different purposes for the target group.
            </p>
            <h3>Ideate</h3>
            <p>
              After brainstorming, we landed in three different concepts and a
              requirements specification for each concept was produced. The
              concepts that were developed came to be called "Cook together",
              "child fun" and "what kebab are you?". All three concepts differed
              and had different purposes for the target group.
            </p>
          </div>
        </div>
      </div>

      {/** Left grid */}
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Prototype</h3>
            <p>
              When the protoypes was completed we did several user tests to
              ensure that our solution satisfyed the requierments we specified
              in the beginning of the process.
            </p>
          </div>
        </div>

        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--plick-color" }}
        >
          <img src={Skiss} alt="schysst käk"></img>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--plick-color" }}
        ></div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Test</h3>
            <p>
              Based on customer feedback and test results the "Cook together"
              concept was chosen. Cooking together allows families and friends
              to cook Nice Cheek recipes together. The concept works as a game
              where users choose a recipe, create a team and then get assigned
              tasks.
              <br />
              <br />
              The sub-tasks of the recipe are distributed within the team as the
              game progresses. When a participant has completed their task,
              click on it to get a new task. It is possible to join the game on
              different devices and the game is adapted for children via the
              "Kids Chef" mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plick;
