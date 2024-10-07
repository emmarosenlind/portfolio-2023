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

  return (
    <div className="App" style={{ background: color }}>
      <div id="spotlight" style={{ left: xy[0], top: xy[1] }}></div>
      <Navbar />
      <Header />
      <Menu />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;
