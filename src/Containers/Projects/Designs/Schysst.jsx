import React from 'react'
import './Schysst.css'
import logo from '../../../Assets/Schysst/schysstkak-logo.png';
import products from '../../../Assets/Schysst/products.png';
import man from '../../../Assets/Schysst/man.png';
import thing from '../../../Assets/Schysst/doyourthing.png';
import poster2 from '../../../Assets/Schysst/poster2.png';
import persona from '../../../Assets/Schysst/persona.png';
import barnkul from '../../../Assets/Schysst/barnkul.png';
import quiz from '../../../Assets/Schysst/vilken-kebab-ar-du.png';
import tillsammans from '../../../Assets/Schysst/laga-tillsammans.png';



function Schysst() {
  return (

    <div className = "portfolio__schysst">
      <div className = "portfolio__projects">
        <div className ="portfolio__projects-left">
          <div className ="portfolio__projects-left_content">
            <h1>Concept: Cook together</h1>
              <p>This project was a part of the course "Product Development within Meda Technology with the method Design-Build-Test". Togheter with a company of our choise we created a solution to make recipes great again.</p>       
              <div className ="portfolio__projects-left_content-description">
                <h2>DURATION</h2>
                <p>20 weeks during the couse "Product Development within Meda Technology with the method Design-Build-Test"</p>
                <h2>ROLE</h2>
                <p>In a group of five people, I contributed with the UX/UI design and research</p>
                <h2>TOOLS</h2>
                <p>Adobe Photoshop, Adobe Illustrator and Figma</p>
              </div>
          </div>
        </div>
        <div className = "portfolio__projects-right" id = "schysst1">
          <div className = "portfolio__projects-right_img" >
            <img src={logo} alt ="Schysst käk" id="schysst1_img"/></div>
        </div>
      </div>



      {/** Right grid */}
      <div className = "portfolio__projects" id = "reverse">
        <div className = "portfolio__projects-right" id = "schysst2"><img src ={products} alt = "schysst käk"></img></div>
        <div className = "portfolio__projects-left">
            <div className = "portfolio__projects-left_content">
                <h1>Background</h1>
                <p>The course is a project course, which means that we have worked as a team at a fictitious consulting company, where we have practiced our knowledge to, based on an idea that comes from a real need, design, build and test a concept. We were given free rein to choose a company that we thought seemed interesting. The choice landed on Schysst Käk, which is a Swedish food company that produces kebabs.</p>
                <h3>The challenge</h3>  
                <p>The task that Schysst Käk gave us was "make recipe great again". They wanted a modern, simple and fun recipe applicationwithout a lot of fuss. It were going to contain inspiration, recipes, unexpected functions and extra everything packaged in a flexible and functional solution. The keywords we got were: fun, unexpected, simple and functional.</p>            
            </div>
        </div>
      </div>



      {/** Left grid */}
      <div className = "portfolio__projects">
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                  <h1>Research</h1>
                  <p>The research phase was initiated by examining existing recipe services, gathering information about Schysst käk and examining the target group</p>
                  <h3>Market & existing solutions</h3>
                  <p>Existing services that were investigated included Köket.se, Ica and The Mix.1 These websites were evaluated based on useful content and content that should be avoided on a future recipe idea for Schysst käk's website. Information about Schysst käk was collected from Schysst käk's website to investigate what the company stands for and wants to convey. The existing recipe page was examined and information from the kebab survey was collected.</p>
                  <h3>Targetgroup and users</h3>
                  <p>The target group is adults with children living at home. Most are in the middle of life and trying to figure out the puzzle of life with all that it entails. The target group values timesaving and simple recipes. The target group was mapped through a survey created with Google Forms. Issues examined were marital status, relationship to cooking and the role of children in cooking.</p>
                </div>
            </div>
            <div className = "portfolio__projects-right" id = "schysst3">
                 <img src ={persona}alt = "schysst käk"></img>
             </div>
      </div>




      {/** Right grid */}
      <div className = "portfolio__projects" id = "reverse">
        <div className = "portfolio__projects-right" id = "schysst4"><img  src ={man}alt = "schysst käk"></img></div>
        <div className = "portfolio__projects-left">
              <div className = "portfolio__projects-left_content">
                  <h1>Brainstorm & prototype</h1>
                  <p>After brainstorming, we landed in three different concepts and a requirements specification for each concept was produced. The concepts that were developed came to be called "Cook together", "child fun" and "what kebab are you?". All three concepts differed and had different purposes for the target group.

                    <br/> <br/>Children's fun was about making children feel involved in cooking and thinking that cooking is fun. The goal was for children to explore recipes in an unexpected and fun way with a touch of gamification. Under the concept of children's fun, four different functions were gathered. The concept allows the user to answer a number of questions and then the data from the annual kebab survey is used as Schysst Käk, to develop a kind of "kebab personality". The idea is to give the user a nice experience and recommend recipes based on their kebab personality. "Cooking together" is a concept that makes cooking a fun activity for the whole family. It is a recipe game where everyone needs to contribute.</p>
              </div>
        </div>
      </div>




      <div className ="portfolio__projects-solutions">
        <div className='portfolio__projects-solutions_text'>
          <h1>Three different solutions</h1>
          <p>When the Hi-fi protoype was completed we did several user tests to ensure that our application satisfyed the requierments we specified in the beginning of the process.</p>
        </div>
        <div className='portfolio__projects-solutions_img'>
          <img alt ="img"src={barnkul}></img>
          <img alt ="img"src={quiz}></img>
          <img alt ="img"src={tillsammans}></img>
        </div>
      </div>




      {/** Left grid */}
      <div className = "portfolio__projects">
        <div className = "portfolio__projects-left">
            <div className = "portfolio__projects-left_content">
              <h1>Prototype testing</h1>
              <p>When the protoypes was completed we did several user tests to ensure that our solution satisfyed the requierments we specified in the beginning of the process.</p>
              <h3>Research Methods and Approaches</h3>
              <p>Testing has been carried out in three rounds. Prior to the first test phase, the group developed test protocols for the different prototypes. The protocols included formalities, instructions and interview questions for the test person. The three Lofi prototypes was then tested against a number of selected users.</p>
              <h3>Result and findings</h3>
              <p>As a result of testing the "what type of kebab are you?" concept, we got important insights. Through observations of the users, it was concluded that the recipe proposals ended up out of focus, as many never scrolled down to the recipes when the test was completed.
              <br/> <br/>During tests on the concept of "cook together", many pointed out that the task boxes were unclear. Two users also demonstrated the benefit of implementing a "undo" button. Children who wants to participate in cooking should be given child-adapted tasks with some type of child mode and it should be possible to play together on several devices.</p>
            </div>
        </div>

        <div className = "portfolio__projects-right" id = "schysst5">
          <img src ={thing}alt = "schysst käk"></img>
        </div>
      </div>



      {/** Right grid */}
      <div className = "portfolio__projects" id = "reverse">
        <div className = "portfolio__projects-right" id = "schysst6"><img src ={poster2}alt = "schysst käk"></img></div>
        <div className = "portfolio__projects-left">
          <div className = "portfolio__projects-left_content">
            <h1>The result</h1>
            <p>Based on customer feedback and test results the "Cook together" concept was chosen. Cooking together allows families and friends to cook Nice Cheek recipes together. The concept works as a game where users choose a recipe, create a team and then get assigned tasks.
            <br/><br/>The sub-tasks of the recipe are distributed within the team as the game progresses. When a participant has completed their task, click on it to get a new task. It is possible to join the game on different devices and the game is adapted for children via the "Kids Chef" mode.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schysst