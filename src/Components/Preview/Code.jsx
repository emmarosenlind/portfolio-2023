import React from "react";
import "./Preview.css";
import publication from "../../Assets/publication.png";
import schysst from "../../Assets/schysst-preview.png";
import solwe from "../../Assets/solwetest.png";
import PathPilot from "../../Assets/PathPilotPreview.png";
import Chip from "../Chip/Chip";
import ove from "../../Assets/ovepreview.svg";
import { useNavigate } from "react-router-dom";

const Code = ({ transition }) => {
  const nav = useNavigate();

  return (
    <div className={`portfolio__preview ${transition ? "transition" : ""}`}>
      <div className="portfolio__preview-card">
        <div onClick={() => nav("/schysst")}>
          <div className="portfolio__preview-card_image">
            <img src={schysst} alt="img"></img>
          </div>

          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip
                isSmall
                color="#000"
                textColor="#fff"
                text="Concept Design"
              />
              <Chip isSmall color="#000" textColor="#fff" text="UI Design" />
            </div>
            <h1>Schysst Käk</h1>
          </div>
        </div>
      </div>

      <div className="portfolio__preview-card">
        <div onClick={() => nav("/pathpilot")}>
          <div className="portfolio__preview-card_image">
            <img src={PathPilot} alt="Cover of PathPilot"></img>
          </div>
          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip
                isSmall
                color="#000"
                textColor="#fff"
                text="Concept Design"
              />
              <Chip isSmall color="#000" textColor="#fff" text="UI Design" />
            </div>
            <h1>Mentorship platform for inclusion in Australia</h1>
          </div>
        </div>
      </div>

      <div className="portfolio__preview-card">
        <div onClick={() => nav("/ove")}>
          <div className="portfolio__preview-card_image">
            <img src={ove} alt="img"></img>
          </div>
          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip
                isSmall
                color="#000"
                textColor="#fff"
                text="Product Design"
              />
              <Chip
                isSmall
                color="#000"
                textColor="#fff"
                text="Business Development"
              />
              <Chip isSmall color="#000" textColor="#fff" text="UI Design" />
            </div>
            <h1>App for smarter shoppingw</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
