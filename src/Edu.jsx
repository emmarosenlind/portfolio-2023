
import './App.css';
import './Components/Navbar/Navbar.css';
import {Navbar} from './Components';
import {Footer, Education} from './Containers';
import $ from 'jquery';


function Edu() {

  $(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
        if(scroll_pos > $(".project-items").offset().top) {
          $(".logo").css('color', 'white');
        } else {
          $(".logo").css('color', 'rgb(0,0,0,0)');
        }
    });
  });


  return (
    <div className ="Edu">
      <Navbar className="custom-navbar">
      style={{
          background: "#689d3"
        
        }}
      </Navbar>
      <Education/>
      <Footer/>
    </div>
  
  );
}

export default Edu;