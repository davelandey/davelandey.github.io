import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Structure/Navbar";
import Footer from "./Components/Structure/Footer";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Hobbies from "./Components/Hobbies/Hobbies";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Email from "./Components/Email/Email";
import './App.css'
import './index.css'


const App = (props) => {

function lightModeToggle(){
  const lightMode = document.body;
  lightMode.classList.toggle("dark-mode")
  // if (lightMode.classList === 'dark-mode'){
    // How do I target lightMode Button text and change it depending on selection
    // lightModeButton.innerText('light mode')
  // } else {
    // console.log("light mode")
  }
// }


    
    return (
    <>
   
    <Navbar lightModeToggle={lightModeToggle}/>
    <Routes>
        <Route path='/' element={<Home  />} /> 
        <Route path='/about-me' element={<AboutMe />} /> 
        <Route path='/hobbies-and-interests' element={<Hobbies />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/email-me' element={<Email />} />
    </Routes>
    <Footer />
    </>  
    );
}
 
export default App;
