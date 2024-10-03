import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import {
  Solwe,
  Schysst,
  GymTrack,
  Naturglass,
  Ove,
  Education,
  Coetus,
  DataTjej,
  PathPilot,
} from "./Containers";
import Edu from "./Edu";
import Ab from "./AboutPage";
import Plick from "./Containers/Projects/Designs/Plick";
import SustainAx from "./Containers/Projects/Designs/SustainAx";
import Its from "./Containers/Projects/Designs/Its";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Solwe" element={<Solwe />} />
      <Route path="/Schysst" element={<Schysst />} />
      <Route path="/Gymtrack" element={<GymTrack />} />
      <Route path="/Naturglass" element={<Naturglass />} />
      <Route path="/Ove" element={<Ove />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Coetus" element={<Coetus />} />
      <Route path="/datatjej" element={<DataTjej />} />
      <Route path="/pathpilot" element={<PathPilot />} />
      <Route path="/edu" element={<Edu />} />
      <Route path="/Ab" element={<Ab />} />
      <Route path="/Plick" element={<Plick />} />
      <Route path="/SustainAx" element={<SustainAx />} />
      <Route path="/its" element={<Its />} />
    </Routes>
  </BrowserRouter>
);
