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


const App = (props) => {

  // TODO: function for light/dark mode toggle

    const [coordinates, setCoordinates] = useState({});

    //User location collected at start
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    };
  
    useEffect(() => {
      getUserLocation();
    }, []);
    
    return (
    <>
   
    {/* <PhotoBanner/> */}
    <Navbar />
    <Routes>
        <Route path='/' element={<Home coordinates={coordinates}/>} /> 
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
