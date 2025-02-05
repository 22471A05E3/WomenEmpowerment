import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Login from './Login';
import Safety from './Safety';
import Emergency from './Emergency';
import Contact from './Contact';
import Tricks from './Tricks';
import Health from './Health';
import Register from './Register';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Login' element={<Login/>} />

        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Safety' element={<Safety/>} />
        <Route path='/Emergency' element={<Emergency/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Tricks' element={<Tricks/>}/>
        <Route path='/Health' element={<Health/>}/>
        


      </Routes>
    </Router>
    
    </>
    
      
  
  );
}

export default App;
