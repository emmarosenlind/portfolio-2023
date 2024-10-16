// ColorContext.js
import React, { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [aboutStyle, setAboutStyle] = useState("image-color-1");
  const [faqStyle, setFaqStyle] = useState("image-color-2");

  const styles = {
    "image-color-1": {
      backgroundColor: "red",
      color: "white",
    },
    "image-color-2": {
      backgroundColor: "blue",
      color: "white",
    },
    // Lägg till fler stilar här efter behov
  };

  const changeAboutStyle = (style) => {
    setAboutStyle(style);
  };

  const changeFaqStyle = (style) => {
    setFaqStyle(style);
  };

  return (
    <StyleContext.Provider
      value={{ aboutStyle, changeAboutStyle, faqStyle, changeFaqStyle }}
    >
      {children}
    </StyleContext.Provider>
  );
};

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none"; // Döljer preloader
    document.querySelector(".content").style.display = "block"; // Visar innehållet
  }, 3000); // 3 sekunder
});
