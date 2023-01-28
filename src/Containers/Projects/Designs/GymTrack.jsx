import React from 'react'
import background from '../../../Assets/Gymtrack/gymtrack.png';
import persona from '../../../Assets/Gymtrack/persona.png';
import question from '../../../Assets/Gymtrack/question.png';
import lofi from '../../../Assets/Gymtrack/lofi.png';
import testing from '../../../Assets/Gymtrack/testing.png';
import cover from '../../../Assets/gt-cover.png';



function GymTrack(){
  return (
    <div className='portfolio__gymtrack'>
        <div className = "portfolio__projects">
            <div className ="portfolio__projects-left">
                <div className ="portfolio__projects-left_content">
                    <h1>From dumb to smart AI driven user interfaces</h1>
                    <p>
                        The challenge of this assignment was “From dumb to smart AI driven user interfaces”. The interface has to be a part of a system that requires the user to actively interact with the system for it to work. Alternatively it can be a currently passive functionality that should be made interactive
                    </p>
                    <div className ="portfolio__projects-left_content-description">
                        <h2>DURATION</h2>
                        <p>7 weeks during the couse “Human-Computer Interaction"</p>
                        <h2>ROLE</h2>
                        <p>In a group of five people, I contributed with the UX/UI design and research</p>
                        <h2>TOOLS</h2>
                        <p>Adobe Photoshop, Adobe Illustrator and Figma </p>
                    </div>
                </div>
            </div>

            <div className = "portfolio__projects-right" id = "gymtrack1">
                <div className = "portfolio__projects-right_img" ><img src={cover}  alt = "gymtrack"/></div>
            </div>
        </div>






        <div className = "portfolio__projects">
            <div className = "portfolio__projects-right" id = "gymtrack2" style={{ backgroundImage: `url(${background})` }}>
               
            </div>
            
            <div className = "portfolio__projects-left">
                <div className = "portfolio__projects-left_content">
                    <h1>The challenge</h1>
                    <p>The challenge of this assignment was “From dumb to smart AI driven user interfaces”. The interface has to be a part of a system that requires the user to actively interact with the system for it to work. Alternatively it can be a currently passive functionality that should be made interactive</p>
                    <h1>Design process</h1>
                    <p>The project is based on a design process called The Double Diamond. It suggests that the design process should have four phases. Discover, Define, Develop and Deliver. It's an iterative process where we repeat until we get the expected result. As part of the course we also used conceptual models, interaction techniques, development methods, design support, prototypes, task analyzes and various evaluation techniques.</p>
                </div>
            </div>
        </div>






        <div className = "portfolio__projects">
            <div className = "portfolio__projects-left">
                 <div className = "portfolio__projects-left_content">
                    <h1>Research</h1>
                    <p>The first step was to decied what interactive system that needed improvement. The majority of the group memebers experienced it as difficult to remember earlier progress in the gym and thought it should exist a system that automaticaly saves sets and reps from equipment at the gym and helps the user to develop. As a result, we decided to work with that problem.</p>
                    <h3>Market & existing solutions</h3>
                    <p>We found and inspected two existing applications that help the user making progress at the gym.</p>
                    <h3>Targetgroup and users</h3>
                    <p>To understand the users of a system like this, we framed the target group as young people between 15-30, who enjoys working out and is goal oriented. To understand the users we interviewd them and let them answer a survey. In the survey, they were asked about their age, amount of training and if they had earlier experience with gym tracking applications. Depending on if they had experience or not, they were asked different questions. Based on results two personas and an experience map where made.</p>
                
                </div>
             </div>
             <div className = "portfolio__projects-right" id = "gymtrack3">
                 <img src ={persona} alt ="text"></img>
             </div>
        </div>







        <div className = "portfolio__projects">
            <div className = "portfolio__projects-right" id = "gymtrack4">
                 <img src ={question}alt ="text"></img>
            </div>
            <div className = "portfolio__projects-left">
                 <div className = "portfolio__projects-left_content">
                    <h1>Define the problem</h1>
                    <p>In order to satisfy the user, based on the results, an interface with a clear overview were needed, where the user could follow their progress. The solution also needed to be able to provide the user with motivation and customized recommendations. In order for the solution to satisfy the user with previous requirements, the gym data had to be saved in a smooth and simple way.</p>
                </div>
             </div>
        </div>







        <div className = "portfolio__projects">
            <div className = "portfolio__projects-left">
                 <div className = "portfolio__projects-left_content">
                    <h1>Develop the solution</h1>
                    <p>Based on the findings and the user requirements, new ideas for the application could be developed. As the time for this project was very limited, there was no time to test different variations of lofi prototypes. Therefore we only worked with one version of the app.
                        <br/> <br/>After some discussion and brainstorming within the group, we could determine which features was the most appropriate and make the following Lo-Fi prototype. The content of the pages is designed based on the users needs. For example, latest achievement is placed at the top of the home page to motivate the user.</p>
                
                </div>
             </div>
             <div className = "portfolio__projects-right" id ="gymtrack5">
                 <img src = {lofi}alt ="text"></img>
             </div>
        </div>





        <div className = "portfolio__projects">
            <div className = "portfolio__projects-right" id ="gymtrack6">
                 <img src ={testing} alt ="text"></img>
            </div>
            <div className = "portfolio__projects-left">
                 <div className = "portfolio__projects-left_content">
                    <h1>Prototype testing</h1>
                    <p>When the Hi-fi protoype was completed we did several user tests to ensure that our application satisfyed the requierments we specified in the beginning of the process.
                    The test was conducted on three different persons, each given the same tasks. Throughout the experiment the observer was taking notes and after the experiment we used the methods post-testing interview, sentence completion technique and EmoCards.</p>
                    <h3>Result and findings</h3>
                    <p>Two of three users understood instantly to navigate to the plus sign, to start a new workout. In this case it is the majority of the users, but since we have such a small test group it is not possible to say that this is how the overall user would respond to the interface. More user tests are needed to determine whether there is a problem here, and what the problem might be.
                    <br/> <br/>We asked our test users if they perceived the statistics and graphs motivating and all of the users answered yes. We also asked if they found the statistics and graphs easy to interpret. According to the observations we could see that all of the users instantly realized which graph to look at when we asked them what muscle group they had worked out the most. This means that our implementation of icons and graphs seems to be straight-forward, easy to understand and satisfies the users needs.</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default GymTrack