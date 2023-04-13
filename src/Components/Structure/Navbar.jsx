import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Lightbulb from "../../Assets/icons/Lightbulb.png";

const Navbar = (props) => {
  const lightModeToggle = props.lightModeToggle;

  // IDEA: Personal,

  let activeStyle = { color: "RGB(0, 0, 0)", fontWeight: "400" };
  let inActiveStyle = {
    color: "RGB(0, 0, 0)",
    fontSize: "1em",
    fontWeight: "300",
  };

  return (
    <>
      <nav id='NavBar'>
        <ul id='navbarList'>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about-me'
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/experience'
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <Button
              color='success'
              type='reset'
              id='lightModeButton'
              onClick={lightModeToggle}
            >
              <img src={Lightbulb} height='20px' alt='lightbulb' />{" "}
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

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
