import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import {Solwe, Schysst, GymTrack, Naturglass, Ove, Education, Coetus, DataTjej, PathPilot} from './Containers';
import Edu from './Edu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop/>
        
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/Solwe" element={<Solwe />} />
            <Route path="/Schysst" element={<Schysst />} />
            <Route path="/Gymtrack" element={<GymTrack />} />
            <Route path="/Naturglass" element={<Naturglass />} />
            <Route path="/Ove" element={<Ove />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Coetus" element={<Coetus/>} />
            <Route path="/datatjej" element={<DataTjej/>} />
            <Route path="/pathpilot" element={<PathPilot/>} />
            <Route path="/edu" element={<Edu/>} />

            
            
        </Routes>
    </BrowserRouter>
);



