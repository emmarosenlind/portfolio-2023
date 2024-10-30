import "./App.css";
import "./Components/Navbar/Navbar.css";
import { Navbar } from "./Components";
import { Footer, About, FAQ } from "./Containers";
import { StyleProvider } from "./ColorContext";
import $ from "jquery";

function Ab() {
  $(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > $(".project-items").offset().top) {
        $(".logo").css("color", "white");
      } else {
        $(".logo").css("color", "rgb(0,0,0,0)");
      }
    });
  });

  return (
    <div className="Edu">
      <About />
    </div>
  );
}

export default Ab;
