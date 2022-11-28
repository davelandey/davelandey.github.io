import {React, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Structure/Navbar";
import Footer from "./Components/Structure/Footer";
// import Home from "./components/pages/Home.jsx";
// import AboutMe from "./components/pages/AboutMe/AboutMe";
// import Hobbies from "./components/pages/Hobbies/Hobbies";
// import Projects from "./components/pages/Projects/Projects";
// import Experience from "./components/pages/Experience/Experience";
// import Email from "./components/pages/Email/Email";
import './App.css'


const App = (props) => {

    const [coordinates, setCoordinates] = useState({});

    const getUserLocation = () => {
      //Javascript method that gets permission from client to use location
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
        {/* <Route path='/' element={<Home coordinates={coordinates}/>} />  */}
        {/* <Route path='/about-me' element={<AboutMe />} /> 
        <Route path='/hobbies-and-interests' element={<Hobbies />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/email-me' element={<Email />} /> */}
    </Routes>
    <Footer />
    </>  
    );
}
 
export default App;
