import JS from "../../Assets/icons/011-js.png";
import HTML from "../../Assets/icons/012-html.png";
import CSS from "../../Assets/icons/013-css.png";
import React from "../../Assets/icons/007-react.png";
import MongoDB from "../../Assets/icons/MongoDB.png";
import ExpressJS from "../../Assets/icons/008-express.png";
import NodeJS from "../../Assets/icons/nodejs.png";
import Agile from "../../Assets/icons/003-agile.png";
import Github from "../../Assets/icons/Github.png";
import GTN1 from "../../Assets/Images/Projects/Guess the Number/guess_the_number.png";
import Jeopardy from "../../Assets/Images/Projects/Jeopardy/Jeopardy_landing.png";
import PupSpot from "../../Assets/Images/Projects/PupSpot/PupSpot - homepage.png";
import bMack2 from "../../Assets/Images/Projects/bMack/bMack - dashboard.png";
import bMack3 from "../../Assets/Images/Projects/bMack/bMack - individual page.png";
import bMack1 from "../../Assets/Images/Projects/bMack/bMack - login.png";
import SundayDR from "../../Assets/Images/Projects/Sunday Diner Review/SundayDR.png";

import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  UncontrolledCarousel,
  Row,
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState } from "react";

import "./Experience.css";

const Experience = (props) => {
  const [open, setOpen] = useState();
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  // TODO: Reference authors of icons

  // const iconStyle = { width: "8em", margin: "5px" };
  // import all icons, map through these in carousel
  // How do I get their names to display as their alt tags?
  //Multiple items in carousel: https://stackoverflow.com/questions/20007610/bootstrap-carousel-multiple-frames-at-once

  // const icons = {MongoDB, ExpressJS, React, NodeJS, JS, HTML, CSS, Github, Agile, Collaboration}
  return (
    <div id='experienceBody'>
      <Col className='w-100'>
        <Row class='row justify-content-center'>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader className='text-center' targetId='1'>
                Technical Skills
              </AccordionHeader>
              <AccordionBody accordionId='1'>
                <ul>
                  <li>Mongo DB</li>
                  <li>Express JS</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Agile Methodology</li>
                  <li>GitHub</li>
                </ul>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Row>

        {/* Carousel skills icons */}
        <Row className='justify-content-center'>
          <div id='Container'>
            <UncontrolledCarousel
              controls="false"
              id='UncontrolledCarousel'
              items={[
                {
                  altText: "Mongo Database",
                  key: 1,
                  src: MongoDB,
                },
                {
                  altText: "ExpressJS",
                  key: 2,
                  src: ExpressJS,
                },
                {
                  altText: "React",
                  key: 3,
                  src: React,
                },
                {
                  altText: "NodeJS",
                  key: 3,
                  src: NodeJS,
                },
                {
                  altText: "Javascript",
                  key: 3,
                  src: JS,
                },
                {
                  altText: "HTML - Hyper Text Markup Language",
                  key: 3,
                  src: HTML,
                },
                {
                  altText: "CSS - Cascade Styling Sheets",
                  key: 3,
                  src: CSS,
                },
                {
                  altText: "Github",
                  key: 3,
                  src: Github,
                },
                {
                  altText: "Agile Methodology",
                  key: 3,
                  src: Agile,
                },
              ]} />
          </div>
        </Row>
      </Col>
      {/* Investigate bootstrap sizing and positioning for these cards: https://getbootstrap.com/docs/5.0/utilities/sizing/ */}
      <Row>
        <h3>Projects:</h3>
        <CardGroup xl="4" l="6" s="12">
          <Card>
            <CardImg
              alt='Card image cap'
              src={GTN1}
              top
              width='100%'
              height='40%' />
            <CardBody>
              <CardTitle style={{ textAlign: "center" }} tag='h5'>
                Guess the Number
              </CardTitle>
              <CardText>
                <div>
                  {" "}
                  This project was an introduction to JavaScript, logic and
                  writing functional code - to make something{" "}
                  <strong>
                    <em>fun</em>
                  </strong>
                  .
                </div>{" "}
                <br />
                <div>
                  In this game, the user determined a range, and a secret number
                  within. The computer guessed the number, making use of a
                  binary search - asking the user if the guess was higher/lower.
                  based on their answer, the range of guesses was adjusted.
                </div>
              </CardText>
              <Button>GitHub Repo</Button>
            </CardBody>
          </Card>
          <Card xl="4" l="6">
            <CardImg
              alt='Card image cap'
              src={Jeopardy}
              top
              width='100%'
              height='40%' />
            <CardBody>
              <CardTitle style={{ textAlign: "center" }} tag='h5'>
                Jeopardy
              </CardTitle>
              <CardText>
                <div>
                  {" "}
                  This project combined HTML, CSS and JavaScript - using it to
                  manipulate the DOM.
                </div>{" "}
                <br />
                <div>
                  Drawing inspiration from the TV Show Jeopardy - this two
                  player game, had two rounds where a grid of values was
                  displayed (flexbox, for the win!), and when clicked - would
                  display a question.
                </div>
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardGroup>
        </Row>
        <Row>
          <h3>Experience:</h3>
        <Card>
          <CardImg
            alt='PupSpot'
            src={PupSpot}
            top
            width='100%'
            height='60%' />
          <CardBody>
            <CardTitle style={{ textAlign: "center" }} tag='h5'>
              PupSpot
            </CardTitle>
            <CardText>
              <div>
                {" "}
                This project was an introduction to JavaScript, logic and
                writing functional code - to make something{" "}
                <strong>
                  <em>fun</em>
                </strong>
                .
              </div>{" "}
              <br />
              <div>
                In this game, the user determined a range, and a secret number
                within. The computer guessed the number, making use of a
                binary search - asking the user if the guess was higher/lower.
                based on their answer, the range of guesses was adjusted.
              </div>
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Row>
        <CardGroup>
      <Card>
        <UncontrolledCarousel
          interval='2500'
          fade='true'
          items={[
            {
              altText: "Login page",
              key: 1,
              src: bMack1,
            },
            {
              altText: "Dashboard",
              key: 2,
              src: bMack2,
            },
            {
              altText: "Individual page",
              key: 3,
              src: bMack3,
            },
          ]} />
        <CardBody>
          <CardTitle style={{ textAlign: "center" }} tag='h5'>
            bMack
          </CardTitle>
          <CardText>
            <div>
              {" "}
              The aim of this <em>upcoming</em> project is to solve a
              problem, which I experienced in a previous position.{" "}
            </div>
            <br />
            <div>
              This full stack application{" "}
              <strong>(Firebase, Next.JS, React and Node)</strong> will
              provide me opportunities to continue to hone my skills and
              expose me to new technologies.
            </div>
          </CardText>
          <Button>GitHub Repo</Button>
        </CardBody>
      </Card>
    {/* <Card>
        <CardImg
          alt='Sunday Diner Review'
          src={SundayDR}
          top
          width='100%'
          height='auto' />
        <CardBody>
          <CardTitle style={{ textAlign: "center" }} tag='h5'>
            Sunday Diner Review
          </CardTitle>
          <CardText>
            <div>
              {" "}
              The aim of this application is to provide a simple, yet
              effective, data capturing platform.{" "}
            </div>
            <br />
            <div>
              My partner and I have been reviewing diners for a few years
              now, making use of Google Sheets.
            </div>
          </CardText>
          <Button>GitHub Repo</Button>
        </CardBody>
      </Card> */}
          </CardGroup>
          </div>
  );
};

export default Experience;
