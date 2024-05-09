import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skill from './Pages/Skill';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      
     <Navbar/>
   
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Contact/>}/>
      <Route path="/about" element={<About/>}>
        <Route path="skills" element={<Skill/>}/>
      </Route>
     </Routes>
     
    </div>
    </BrowserRouter>
  );
};

export default App;