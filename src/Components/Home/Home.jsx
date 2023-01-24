import { useState } from "react";
import { Button, Container, Col, Row, Nav } from "reactstrap";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "../Experience/Experience";
import Hobbies from "../Hobbies/Hobbies";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import './Home.css'

const Home = (props) => {

  return (
    <Container id="homeContainer" fluid>
      <Row>
        <Col id="homeColumnOne" xl="5" lg="5" sm="6">
        {/* <Col id="homeColumnOne"> */}
          <Profile />
        </Col>
        {/* <Col id="homeColumnTwo"> */}
        <Col id="homeColumnTwo" xl="7" lg="7" sm="6">
          <AboutMe />
          <Projects />
          <Experience />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
