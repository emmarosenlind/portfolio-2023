import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Uxdesign from './Components/Article/Uxdesign';
import App from './App';
import { Navbar, Menu } from './Components';
import './App.css';
import { Header } from './Containers';
import Home from './Pages/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);
