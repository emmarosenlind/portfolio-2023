import React, { useEffect, useState } from "react";
import { Code, Uxui, Fun } from "../../Components";
import "./Menu.css";
import {
  ScrollRestoration,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

var styling = {
  selected: {
    fontFamily: "var(--font-family)",
    fontWeight: 500,
    fontSize: "16px",
    textDecoration: "underline",
  },
  button: {
    fontFamily: "var(--font-family)",
    fontWeight: 500,
    fontSize: "16px",
  },
};

function Menu() {
  const [transition, setTransition] = useState(false);
  const nav = useNavigate();
  const [selected, setSelected] = useState("ux");
  let { menu } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const entries = searchParams.entries();
    const params = [];

    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    console.log(params);
    if (
      params.length >= 1 &&
      params[0][0] === "menu" &&
      ["ux", "ui", "fun"].includes(params[0][1])
    ) {
      setSelected(params[0][1]);
    }
  }, []);
  const selectItem = (s) => {
    setTransition(true);
    setSelected(s);
    nav(`?menu=${s}`);

    setTimeout(() => {
      setTransition(false);
    }, 300);
  };

  return (
    <div className="portfolio__menu" id="menu">
      <h1> My work</h1>
      <nav className="portfolio__menu-container">
        <div
          className="portfolio__MenuItem"
          style={selected === "ux" ? styling.selected : styling.button}
          onClick={() => selectItem("ux")}
        >
          <p id="menu_p">UX Design</p>
        </div>

        <div
          className="portfolio__MenuItem"
          style={selected === "ui" ? styling.selected : styling.button}
          onClick={() => selectItem("ui")}
        >
          <p id="menu_p">UI Design</p>
        </div>

        <div
          className="portfolio__MenuItem"
          style={selected === "fun" ? styling.selected : styling.button}
          onClick={() => selectItem("fun")}
        >
          <p id="menu_p">Fun stuff</p>
        </div>
      </nav>
      {selected === "ux" ? <Uxui /> : ""}
      {selected === "ui" ? <Code transition={transition} /> : ""}
      {selected === "fun" ? <Fun /> : ""}
    </div>
  );
}

export default Menu;
