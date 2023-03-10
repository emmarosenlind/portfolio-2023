
import './App.css';
import {Navbar, Menu} from './Components';
import {Footer, Header, About} from './Containers';
import $ from 'jquery';

function App() {

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
    <div className ="App">
      <Navbar/>
      <Header/>
      <Menu/>
      <About/>
      <Footer/>
      
     
    
      <div className ="project-items">
        
      </div>
    </div>
  
  );
}

export default App;