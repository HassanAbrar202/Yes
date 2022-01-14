import React,{useState} from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import About from './components/navbar/About';
import Home from './components/home/Home';
import Uprojects from './components/navbar/Uprojects';
import Contact from './components/navbar/Contact';
import Blog from './components/navbar/Blog';  
import Privacy from './components/navbar/Privacy';
import Button from './components/buttons/Button';
import Button1 from './components/buttons/Button1';
import Button2 from './components/buttons/Button2';
import Button3 from './components/buttons/Button3';
import Button4 from './components/buttons/Button4';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [serverMessage, setServerMessage] = useState(false) 
  return (
 
    <Router>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/About" element={<About/> }/>
      <Route path="/Uprojects" element={<Uprojects/> }/>
      <Route path="/Contact" element={<Contact/> }/>
      <Route path="/Blog" element={<Blog/> }/>
      <Route path="/Privacy" element={<Privacy/> }/>
      <Route  path="/Button1" element={<Button1/> }/>
      <Route  path="/Button2" element={<Button2/> }/>
      <Route  path="/Button3" element={<Button3/> }/>
      <Route  path="/Button4" element={<Button4/> }/>
      <Route  path="/Login" element={<Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} serverMessage={serverMessage} setServerMessage={setServerMessage}/> }/>
      <Route  path="/Signup" element={<Signup setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} serverMessage={serverMessage} setServerMessage={setServerMessage}/> }/>
    </Routes>
  </Router>
  );
}

export default App;