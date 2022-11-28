import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';


const Navbar = (props) => {

  // IDEA: Personal, 

    let activeStyle = {color: "RGB(0, 0, 0)", fontWeight:"400"};
    let inActiveStyle = {color: "RGB(0, 0, 0)", fontSize: "1em", fontWeight:"300"};

    return (
    <>
      <nav id="NavBar">
        <ul id="navbarList">
          <li>
            <NavLink 
            to='/'
            style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
            Home</NavLink>
          </li>
          <li>
            <NavLink 
            to='/about-me'
            style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
            About Me</NavLink>
          </li>
          <li>
            <NavLink 
          to='/hobbies-and-interests'
          style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
            Hobbies & Interests</NavLink>
          </li>
          <li>
            <NavLink 
          to='/projects'
          style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
            Projects</NavLink>
          </li>
          <li>
            <NavLink 
          to='/experience'
          style={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
            Experience</NavLink>
          </li>
        </ul>
      </nav>
  
    </>  
    );
  }
  
  export default Navbar;
  
  /* <NavItem>
    <NavLink active href="#" to='/home'>Home</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#" to='/about-me'>About me</NavLink>
  </NavItem>
    <NavLink href="#" to='/hobbies-and-interests'>Hobbies</NavLink> 
  <NavItem>
    <NavLink active href="#" to='/home'>Projects</NavLink>
  </NavItem> */