import React from "react";
import Plickbild from "../../../Assets/plickbild.png";
import aura2 from "../../../Assets/auraresult.svg";
import Diagram from "../../../Assets/diagram.svg";
import Result from "../../../Assets/resultplick.svg";
import aura from "../../../Assets/aura.svg";
import Process from "../../../Assets/Plick/designprocess.svg";
import Skiss from "../../../Assets/Plick/skiss.svg";
import Figma from "../../../Assets/figmalogo.svg";
import PlickLogo from "../../../Assets/plicklogo.svg";
import Chip from "../../../Components/Chip/Chip";
import BackArrow from "../../../Components/BackArrow/BackArrow";

function Plick() {
  return (
    <div className="portfolio__schysst" role="main">
      <BackArrow />
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <div className="chip_container">
              <Chip hasStroke text="UX Design" />
              <Chip hasStroke text="UX Research" />
            </div>

            <h1>
              Enhancing Efficiency and Satisfaction of the Listing Process on
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
              <h2 style={{ fontSize: "14px" }}>DURATION</h2>
              <p>Six months</p>
              <h2 style={{ fontSize: "14px" }}>TOOLS</h2>
              <div className="chip_container">
                <Chip
                  icon={Figma}
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Figma"
                  alt="Figma logotype"
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
          style={{
            backgroundImage: `url(${aura})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="portfolio__projects-right_img">
            <img src={PlickLogo} alt="plick logotype"></img>
          </div>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div
          className="portfolio__projects-right"
          style={{
            backgroundImage: `url(${Plickbild})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The challenge</h1>
            <p style={{ fontSize: "1rem" }}>
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
      <div className="portfolio__projects" id="reverse">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>Design process</h1>
            <p style={{ fontSize: "1rem" }}>
              The project was based on a design process called{" "}
              <b>Design Thinking</b>. It suggests that the design process should
              have five phases. Empathize, Define, Ideate, Prototype and Test.
              It's an iterative process where we repeat until we get the
              expected result.
            </p>
            <h2>Empathize</h2>
            <p style={{ fontSize: "16px" }}>
              In the empathize phase, I conducted a user survey within the app,
              followed by in-depth interviews with selected users. I also
              carried out a competitive analysis to understand the market
              landscape and evaluated the usability of Plick's existing listing
              process using heuristic guidelines. These methods provided
              valuable insights into user needs and pain points, laying a strong
              foundation for the subsequent design stages.
            </p>
          </div>
        </div>
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "#000" }}
        >
          <img
            src={Process}
            alt="Illustration of design thinking process"
          ></img>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects">
        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "var(--plick-color" }}
        >
          {" "}
          <img
            src={Skiss}
            style={{ maxWidth: "95%", mixBlendMode: "multiply" }}
            alt="sketches of interface"
          ></img>
        </div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Define</h3>
            <p style={{ fontSize: "1rem" }}>
              In the define phase, I analyzed the data gathered during the
              empathize phase to pinpoint user needs and pain points. Two
              personas were created to represent key user segments, and user
              stories were developed to capture their goals and challenges.
            </p>
            <h3>Ideate</h3>
            <p style={{ fontSize: "1rem" }}>
              In the ideate phase, I began by formulating "How Might We"
              statements, which were later used in a collaborative workshop with
              other UX designers at Plick. These statements inspired a range of
              ideas that became the foundation for sketches and guided the
              development in the prototyping phase.
            </p>
          </div>
        </div>
      </div>

      {/** Left grid */}
      <div className="portfolio__projects" id="reverse">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Prototype iteration</h3>
            <p style={{ fontSize: "1rem" }}>
              The prototyping phase followed an iterative process, where various
              design concepts were explored and refined. Initially, two distinct
              low-fidelity prototypes were created and evaluated through the
              first round of user testing. The bar chart presents the results,
              highlighting how users rated their overall experience with each
              concept on a scale of 1 to 5.
              <br />
              <br />
              Based on the results of the user tests, elements from both
              concepts were combined to create the final prototype, utilizing
              Plick's existing design system.
            </p>
          </div>
        </div>

        <div
          className="portfolio__projects-right"
          style={{ backgroundColor: "#000" }}
        >
          <img
            src={Diagram}
            style={{ maxWidth: "85%" }}
            alt="bar chart of results of user testing"
          ></img>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects">
        <div
          className="portfolio__projects-right"
          style={{
            backgroundImage: `url(${aura2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={Result}
            style={{
              maxWidth: "90vw",
            }}
            alt="Illustration of how the percieved efficiency increased from 5.0 to 5.6 on six point scale."
          ></img>
        </div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h3>Test & Result</h3>
            <p style={{ fontSize: "1rem" }}>
              Participants were instructed to upload an item for sale, with half
              testing the original design and the other half using the new
              prototype in an A/B testing setup. After completing the task, they
              answered a series of questions about their experience and rated it
              on a six-point Likert scale. The testing demonstrated that the
              final prototype was significantly more efficient and satisfying to
              use, with the number of clicks required in the listing process
              reduced from 28 clicks to 18 clicks, contributing to a smoother
              overall experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plick;
