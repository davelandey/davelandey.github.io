import { Container, Col, Row, Nav } from "reactstrap";
import AboutMe from "../AboutMe/AboutMe";
import Profile from "../Profile/Profile";
const Home = (props) => {
  console.log(props.coordinates);

  return (
    <Container>
      <Row>
        <Col>
          <Profile />
        </Col>
        <Col>
          <AboutMe />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
