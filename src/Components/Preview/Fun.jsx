import React from "react";
import "./Preview.css";
import DataTjej from "../../Assets/DataTjejPreview.png";
import ng from "../../Assets/ng-preview.png";
import PathPilot from "../../Assets/PathPilotPreview.png";
import publication from "../../Assets/publication.png";
import Chip from "../Chip/Chip";
import { useNavigate } from "react-router-dom";
import publicationpdf from "../../Assets/publication.pdf";

const Fun = () => {
  const nav = useNavigate();
  return (
    <div className="portfolio__preview">
      <div className="portfolio__preview-card">
        <div onClick={() => nav("/datatjej")}>
          <div className="portfolio__preview-card_image">
            <img src={DataTjej} alt="Cover of DataTjej"></img>
          </div>

          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip isSmall hasStroke textColor="#000" text="Management" />
              <Chip isSmall hasStroke textColor="#000" text="Volunteering" />
            </div>
            <h1>DataTjej: Redesign and Maintenance</h1>
          </div>
        </div>
      </div>

      <div className="portfolio__preview-card">
        <div onClick={() => window.open(publicationpdf, "_blank")}>
          <div className="portfolio__preview-card_image">
            <img src={publication} alt="img"></img>
          </div>
          <div className="portfolio__preview-card_text">
            <div className="chip_container">
              <Chip isSmall hasStroke textColor="#000" text="Publication" />
              <Chip isSmall hasStroke textColor="#000" text="Research" />
            </div>
            <h1>
              YOUNG ADULTS’ ATTITUDE TOWARDS DIGITAL PAYMENT METHODS AND
              FINANCIAL RESPONSIBILITY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fun;
