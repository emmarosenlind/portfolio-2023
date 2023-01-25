
import './App.css';
import {Navbar, Menu} from './Components';
import {Header} from './Containers';
//import {Header, Projects, About, Footer, Left, Right, Schysst, Solwe} from './Containers';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className ="App">
      <Navbar/>
      <Header/>
      <div className ="project-items">
        <Menu/>
      </div>
    </div>
  
  );
}

export default App;