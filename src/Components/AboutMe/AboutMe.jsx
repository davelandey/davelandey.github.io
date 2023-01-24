import './AboutMe.css'
import Map from '../Map/Map'
import Hobbies from '../Hobbies/Hobbies';
import {Container, Col, Row} from 'reactstrap'

const AboutMe = (props) => {
// ** Incorporate this function into app somehow, where would it work?
  // function getYear(){
  //   const year = getFullYear();
  //   console.log (year)
  //   }
  


  return ( 

  <Container xl="8">
    <Row id="AboutMe">
  <Map />
  </Row>
  <Hobbies />
  </Container>
)};

export default AboutMe;
