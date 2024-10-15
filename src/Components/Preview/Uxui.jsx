import React from "react";
import "./Preview.css";
import ove from "../../Assets/ovetest.png";
import plickpreview from "../../Assets/plickpreview.svg";
import SustainAxpreview from "../../Assets/susprev.svg";
import its from "../../Assets/its.svg";
import gt from "../../Assets/gt-preview.png";
import sus from "../../Assets/sus.svg";
import schysst from "../../Assets/schysst-preview.png";
import Chip from "../Chip/Chip";
import { useNavigate } from "react-router-dom";

const Uxui = () => {
  const nav = useNavigate();

  return (
    <div className="portfolio__preview" role="navigation">
      <div className="portfolio__preview-card">
        <a href="/Plick">
          <div className="portfolio__preview-card_image">
            <img src={plickpreview} alt="img"></img>
          </div>
          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip isSmall hasStroke textColor="#000" text="UX Design" />
              <Chip isSmall hasStroke textColor="#000" text="UX Research" />
            </div>
            <h1>
              Enhancing Efficiency and Satisfaction of the Listing Process on
              Plick
            </h1>
          </div>
        </a>
      </div>

      <div className="portfolio__preview-card">
        <a href="/sustainax">
          <div className="portfolio__preview-card_image">
            <img src={SustainAxpreview} alt="img"></img>
          </div>
          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip isSmall hasStroke textColor="#000" text="UX Design" />
              <Chip isSmall hasStroke textColor="#000" text="Design Lead" />
              <Chip isSmall hasStroke textColor="#000" text="Product Design" />
            </div>

            <h1>
              From Excel to SaaS: Leading the Design of an Advanced Analysis
              Tool
            </h1>
          </div>
        </a>
      </div>

      <div className="portfolio__preview-card">
        <a href="/its">
          <div className="portfolio__preview-card_image">
            <img src={its} alt="img"></img>
          </div>
          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip isSmall hasStroke textColor="#000" text="Accessibility" />
              <Chip isSmall hasStroke textColor="#000" text="UX Design" />
            </div>
            <h1>
              Improve accessibility of public sector administration system
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Uxui;
