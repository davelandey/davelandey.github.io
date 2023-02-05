import JS from "../../Assets/icons/011-js.png";
import HTML from "../../Assets/icons/012-html.png";
import CSS from "../../Assets/icons/013-css.png";
import React from "../../Assets/icons/007-react.png";
import MongoDB from "../../Assets/icons/MongoDB.png";
import ExpressJS from "../../Assets/icons/008-express.png";
import NodeJS from "../../Assets/icons/nodejs.png";
import Agile from "../../Assets/icons/003-agile.png";
import Collaboration from "../../Assets/icons/005-online-meeting.png";
import GTN1 from "../../Assets/Images/Projects/Guess the Number/guess_the_number.png";
import Jeopardy from "../../Assets/Images/Projects/Jeopardy/Jeopardy_landing.png";
import PupSpot from "../../Assets/Images/Projects/PupSpot/PupSpot - homepage.png";

import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  UncontrolledCarousel,
  Container,
  Col,
  Row,
} from "reactstrap";

import "./Experience.css";

const Experience = (props) => {
  // TODO: Reference authors of icons

  const iconStyle = { width: "150px", margin: "5px" };

  return (
    <div id='experienceBody'>
      <h3>EXPEREINCE</h3>
      <br />
      <div>
        <Container id='Container'>
          <img src={MongoDB} alt='MongoDB' style={iconStyle} />
          <img src={ExpressJS} alt='ExpressJS' style={iconStyle} />
          <img src={React} alt='React' style={iconStyle} />
          <img src={NodeJS} alt='NodeJS' style={iconStyle} />
          <img src={JS} alt='Javascript' style={iconStyle} />
          <img src={HTML} alt='HTML' style={iconStyle} />
          <img src={CSS} alt='CSS' style={iconStyle} />
          <img src={Agile} alt='Agile Methodology' style={iconStyle} />
          <img src={Collaboration} alt='Collaboration' style={iconStyle} />
        </Container>
      </div>
      <br />
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
            <CardTitle tag='h5'>Guess the Number</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
            <CardTitle tag='h5'>Jeopardy</CardTitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt='PupSpot' src={PupSpot} top width='100%' height='40%' />
          <CardBody>
            <CardTitle tag='h5'>PupSpot</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Experience;
