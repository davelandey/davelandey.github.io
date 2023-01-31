import { useState } from "react";
import { Button, Container, Col, Row, Nav } from "reactstrap";
import AboutMe from "../AboutMe/AboutMe";
import Map from "../Map/Map";
import Experience from "../Experience/Experience";
import Hobbies from "../Hobbies/Hobbies";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = (props) => {
  return (
    <Container id='homeContainer' fluid='true'>
      <Col id='homeColumnOne' xl='3' lg='5' sm='6'>
        <Profile />
      </Col>
      <Col id='homeColumnTwo' xl='9' lg='7' sm='6'>
        <Row>
          <Map />
        </Row>
        <Row>
          <Hobbies />
          <br />
        </Row>
        <Row id="experienceRow">
          <Experience />
        </Row>
        <Projects />
      </Col>
    </Container>
  );
};

export default Home;
