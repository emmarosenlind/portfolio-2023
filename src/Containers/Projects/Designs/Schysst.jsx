import React from "react";
import "./Schysst.css";
import logo from "../../../Assets/Schysst/schysstkak-logo.png";
import Figma from "../../../Assets/figmalogo.svg";
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

function Schysst() {
  return (
    <div className="portfolio__schysst">
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <BackArrow />
            <div className="chip_container">
              <Chip hasStroke text="Concept Design" />
              <Chip hasStroke text="UX Design" />
            </div>
            <h1>Schysst Käk: Cooking game</h1>
            <p id="ingress">
              Schysst Käk is one of Sweden's fastest-growing food companies,
              aiming to empower everyone to create their own thing with homemade
              kebabs. Schysst käk wanted to update their website and create a
              modern, simple, and fun recipe application that would attract more
              visitors to the website and increase engagement with their
              products.
            </p>
            <div className="portfolio__projects-left_content-description">
              <h2>DURATION</h2>
              <p>Five months</p>
              <h2>TOOLS</h2>
              <div className="chip_container">
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Figma"
                  icon={Figma}
                />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="User Testing"
                />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Brainstorming"
                />
                <Chip color="#000" textColor="#fff" isSmall text="Wireframes" />
                <Chip
                  color="#000"
                  textColor="#fff"
                  isSmall
                  text="Online Survey"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__projects-right" id="schysst1">
          <div className="portfolio__projects-right_img">
            <img src={logo} alt="Schysst käk" id="schysst1_img" />
          </div>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div className="portfolio__projects-right" id="schysst2">
          <img src={products} alt="schysst käk"></img>
        </div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The challenge</h1>
            <p style={{ fontSize: "1rem" }}>
              Schysst Käk, one of Sweden's fastest-growing food companies, aimed
              to empower people to create their own homemade kebabs. Their
              products were available in most grocery stores across Sweden. They
              tasked us with the challenge to "make recipes great again" by
              developing a modern, simple, and fun recipe application. The goal
              was to provide inspiration, innovative recipes, and unexpected
              features in a flexible and functional solution. Schysst Käk wanted
              the application to engage more visitors, increase interaction with
              their products, and boost website traffic. The keywords guiding
              the project were: fun, unexpected, simple, and functional.
            </p>
          </div>
        </div>
      </div>

      {/** Left grid */}
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>Research</h1>
            <p>
              The research phase began with an in-depth analysis of existing
              recipe services, gathering insights about Schysst Käk, and
              understanding the target audience.
            </p>
            <h3>Market & existing solutions</h3>
            <p>
              Key recipe platforms like Köket.se, Ica, and The Mix were
              evaluated to identify valuable features, as well as elements to
              avoid when developing a new recipe concept for Schysst Käk’s
              website. Additionally, a thorough review of Schysst Käk's website
              provided insights into the brand’s core values and messaging. The
              current recipe page was also assessed, along with valuable
              findings from their kebab survey.
            </p>
            <h3>Targetgroup and users</h3>
            <p>
              The target audience consisted of adults with children living at
              home, typically juggling the challenges of a busy life. They
              prioritize time-saving, straightforward recipes. A Google Forms
              survey helped map out this demographic, focusing on factors such
              as marital status, cooking habits, and the involvement of children
              in meal preparation. These insights were instrumental in shaping
              the design approach for Schysst Käk’s recipe platform.
            </p>
          </div>
        </div>
        <div className="portfolio__projects-right" id="schysst3">
          <img src={persona} alt="schysst käk"></img>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div className="portfolio__projects-right" id="schysst4">
          <img src={man} alt="schysst käk"></img>
        </div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>Brainstorm & prototype</h1>
            <p>
              During the brainstorming phase, we developed three distinct
              concepts, each with its own requirements specification. These
              concepts were titled "Cooking Circus," "What Kebab Are You?" and
              "Cooking Game." Each concept targeted different aspects of the
              user experience, tailored to the needs of the audience.
              <br />
              <br />
              <b>Cooking Circus</b> aimed to make cooking a fun and engaging
              activity for children. The concept incorporated gamification
              elements, encouraging kids to participate in meal preparation in a
              creative and unexpected way. <b>What Kebab Are You?</b> focused on
              providing users with a personalized experience based on their
              kebab preferences. Leveraging data from Schysst Käk’s annual kebab
              survey, this concept invited users to answer a series of
              questions, which would then reveal their "kebab personality." The
              idea was to offer a unique and enjoyable experience while
              recommending recipes tailored to their preferences, creating a
              deeper connection between users and the brand.{" "}
              <b>The Cooking Game </b> was designed as a collaborative,
              family-friendly concept. It transformed cooking into a group
              activity where each family member could take on a role in
              preparing the meal. This concept aimed to make cooking together
              both fun and efficient, turning everyday meal preparation into an
              entertaining and shared experience for the whole family.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio__projects-solutions">
        <div className="portfolio__projects-solutions_text">
          <h1>Three different solutions</h1>
          <p>
            When the protoypes were completed we did several user tests to
            ensure that our application satisfyed the requierments we specified
            in the beginning of the process and to discover pain points.
          </p>
        </div>
        <div className="portfolio__projects-solutions_img">
          <img alt="img" src={barnkul}></img>
          <img alt="img" src={quiz}></img>
          <img alt="img" src={tillsammans}></img>
        </div>
      </div>

      {/** Left grid */}
      <div className="portfolio__projects">
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>Prototype testing</h1>
            <p>
              Testing was conducted in three rounds. Before the first testing
              phase, the team developed test protocols for the various
              prototypes. These protocols included formalities, instructions,
              and interview questions for the participants. The three
              low-fidelity (Lo-Fi) prototypes were then tested with a selection
              of users.
            </p>
            <h3>Result and findings</h3>
            <p>
              The testing yielded valuable insights about all three concepts.
              Observations revealed that recipe proposals lost focus, as many
              users did not scroll down to view the recipes after completing the
              test in "What Kebab Are You?"". In the Cooking Game, participants
              noted that the task boxes were unclear and suggested the
              implementation of an "undo" button, which would enhance the user
              experience. Additionally, it was emphasized that children
              participating in cooking should be given age-appropriate tasks,
              ideally through a "child mode." Furthermore, the ability to play
              together on multiple devices was identified as a beneficial
              feature to enhance engagement and collaboration among family
              members.
            </p>
          </div>
        </div>

        <div className="portfolio__projects-right" id="schysst5">
          <img src={thing} alt="schysst käk"></img>
        </div>
      </div>

      {/** Right grid */}
      <div className="portfolio__projects" id="reverse">
        <div className="portfolio__projects-right" id="schysst6">
          <img src={poster2} alt="schysst käk"></img>
        </div>
        <div className="portfolio__projects-left">
          <div className="portfolio__projects-left_content">
            <h1>The result</h1>
            <p>
              Based on user feedback and test results, the "Cooking Game"
              concept was selected for further development. This concept allows
              families and friends to collaboratively prepare recipes in a fun,
              game-like environment.
              <br />
              <br />
              Users begin by choosing a recipe and forming a team, after which
              they are assigned various tasks. As the game progresses, sub-tasks
              for the recipe are distributed among team members. When a
              participant completes their assigned task, they simply click on it
              to receive a new one. The game supports participation from
              multiple devices, enabling seamless collaboration. Additionally, a
              "Kids Chef" mode is designed specifically for children, making it
              easy for younger chefs to engage and enjoy the cooking experience
              alongside their family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schysst;
