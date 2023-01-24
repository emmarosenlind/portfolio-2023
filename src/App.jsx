import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import {Article, Navbar, Menu} from './Components';
import {Header, Projects, About, Footer, Left, Right} from './Containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    {/*<Navbar />
    <Header />
    <About />
    <Footer/>


    <Projects />
    <Right/>
  <Left />*/}

<About/>
    <Routes>
        <Route path="/" component={Home}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;