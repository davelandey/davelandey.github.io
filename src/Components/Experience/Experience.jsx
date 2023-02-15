import JS from "../../Assets/icons/011-js.png";
import HTML from "../../Assets/icons/012-html.png";
import CSS from "../../Assets/icons/013-css.png";
import React from "../../Assets/icons/007-react.png";
import MongoDB from "../../Assets/icons/MongoDB.png";
import ExpressJS from "../../Assets/icons/008-express.png";
import NodeJS from "../../Assets/icons/nodejs.png";
import Agile from "../../Assets/icons/003-agile.png";
import Github from "../../Assets/icons/Github.png";
import Collaboration from "../../Assets/icons/005-online-meeting.png";
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
  Col, Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { useState } from 'react';

import "./Experience.css";

const Experience = (props) => {

  const [open, setOpen] = useState('1');
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
    <div id='experienceBody' >
      <Row>
        <h3>Technical skills:</h3>
      </Row>
        <Col className="w-75">
      {/* Carousel skills icons */}
      <Row class="row justify-content-center">
        <div id='Container' >
          <UncontrolledCarousel
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
              {
                altText: "Collaboration, communication and teamwork",
                key: 3,
                src: Collaboration,
              },
            ]}
          />
          {/* <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button> */}
        </div>
        </Row>
        <Row >
        <div >
      <Accordion  open={open} toggle={toggle}>
        <AccordionItem >
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        </Accordion>
        </div>
      </Row>
      </Col>
      {/* Investigate bootstrap sizing and positioning for these cards: https://getbootstrap.com/docs/5.0/utilities/sizing/ */}
      <Row>
        <h3>Projects:</h3>
        <CardGroup>
          <Card>
            <CardImg
              alt='Card image cap'
              src={GTN1}
              top
              width='100%'
              height='40%'
            />
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
          <Card>
            <CardImg
              alt='Card image cap'
              src={Jeopardy}
              top
              width='100%'
              height='40%'
            />
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
          <Card>
            <CardImg
              alt='PupSpot'
              src={PupSpot}
              top
              width='100%'
              height='40%'
            />
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
        </CardGroup>
        <br />
        <h3>Next up:</h3>

        <div id='upNextDiv'>
          <CardGroup id='upNext'>
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
                ]}
              />
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
            <Card>
              <CardImg
                alt='Sunday Diner Review'
                src={SundayDR}
                top
                width='100%'
                height='auto'
              />
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
            </Card>
          </CardGroup>
        </div>
      </Row>
    </div>
  );
};

export default Experience;
