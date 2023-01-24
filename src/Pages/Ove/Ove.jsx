import './App.css';
import Home from './Pages/Home/Home';
import {Article, Navbar, Menu} from './Components';
import {Header, Projects, About, Footer, Left, Right} from './Containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Ove() {
  return (
    <BrowserRouter>
    <Navbar />
    <Projects />
    <Right/>
    <Left />

    
    <Routes>
        <Route path="/" component={Home}/>

    </Routes>
    </BrowserRouter>
  );
}

export default Ove;