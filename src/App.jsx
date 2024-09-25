
import './App.css';
import {Navbar, Menu} from './Components';
import {Footer, Header, Volunteer} from './Containers';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { convert, interpolateHexColors } from './util';
import Chip from './Components/Chip/Chip';
import BackArrow from './Components/BackArrow/BackArrow';

function App() {

  const c1 = "#FFE3DB"
  const c2 = "#ffffff"
  const [color, setColor] = useState(c1);
  const [color2, setColor2] = useState(c2);
  const [xy,setXY] = useState([0,0])



  const lerpColorOnScroll = (t) => {
    const interpolatedColor = interpolateHexColors(c1, c2, t);
    setColor(interpolatedColor);
  }

  /*const lerpColorOnScroll2 = (t) => {
    const interpolatedColor = interpolateHexColors(c2, c1, t);
    setColor2(interpolatedColor);
  }*/
  



  useEffect(()=> {
    window.addEventListener('mousemove', function(event){
      setXY([event.pageX,event.pageY])
    })
    window.addEventListener('scroll', function(event) {
      let scrollPosition = window.scrollY;
      setXY([event.pageX,event.pageY])
      const height = window.innerHeight;
      const t = scrollPosition / height;
      const newT = Math.min((t/0.8100208768267223),1.0);
      lerpColorOnScroll(newT);
    //  lerpColorOnScroll2(newT)

  });
  },[])

  return (
    <div className ="App" style={{background: color}}>
      <div id="spotlight" style={{left: xy[0], top: xy[1]}}></div>
      <Navbar/>
      <Header/>
      <Menu/>
      <Volunteer/>
      <Footer/>      
    </div>
  
  );
}

export default App;