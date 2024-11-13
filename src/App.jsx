import "./App.css";
import { Navbar, Menu } from "./Components";
import { Footer, Header, Volunteer } from "./Containers";
import { useEffect, useState } from "react";
import $ from "jquery";
import { convert, interpolateHexColors } from "./util";
import Chip from "./Components/Chip/Chip";
import BackArrow from "./Components/BackArrow/BackArrow";

function App() {
  const c1 = "#FFFBE2";
  const c2 = "#ffffff";
  const c3 = "#FFFBE2";
  const [color, setColor] = useState(c1);
  const [xy, setXY] = useState([0, 0]);

  const lerpColorOnScroll = (t) => {
    let color1;
    let color2;
    if (t <= 0.4) {
      t = t / 0.4;
      color1 = c1;
      color2 = c2;
    } else if (t <= 0.7) {
      setColor(c2);
      return;
    } else {
      // >= 0.7
      color1 = c2;
      color2 = c3;
      t = (t - 0.7) / 0.3;
    }
    const interpolatedColor = interpolateHexColors(color1, color2, t);
    setColor(interpolatedColor);
  };

  /*const lerpColorOnScroll2 = (t) => {
    const interpolatedColor = interpolateHexColors(c2, c1, t);
    setColor2(interpolatedColor);
  }*/

  function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    return scrollTop / windowHeight;
  }

  useEffect(() => {
    window.addEventListener("mousemove", function (event) {
      setXY([event.pageX, event.pageY]);
    });
    window.addEventListener("scroll", function (event) {
      let scrollPosition = window.scrollY;
      setXY([event.pageX, event.pageY]);

      const t = getScrollPercentage();
      const newT = Math.min(t / 0.8100208768267223, 1.0);
      lerpColorOnScroll(newT);
      //  lerpColorOnScroll2(newT)
    });
  }, []);

  window.addEventListener("load", function () {
    // Vänta 2 sekunder innan fade-out startar
    setTimeout(function () {
      // Sätter opaciteten på preloader till 0 för att börja fade-out
      document.getElementById("preloader").style.opacity = "0";

      // Vänta ytterligare 2 sekunder för fade-out att slutföras
      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"; // Döljer preloadern helt
        document.querySelector(".content").style.display = "block"; // Visar innehållet
      }, 2000); // Väntar 2 sekunder (fade-out tiden)
    }, 2000); // Väntar 2 sekunder innan fade-out börjar
  });

  return (
    <div className="App" style={{ background: color }}>
      <div id="spotlight" style={{ left: xy[0], top: xy[1] }}></div>
      {/*<div id="preloader"></div>*/}
      <Navbar />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
