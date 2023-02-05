import { Col, Row, Container } from "reactstrap";
import ProfilePic from "../../Assets/Images/Dave/profilePic.png";
import "./Profile.css";

const Profile = (props) => {
  return (
    <Container id='ProfilePicContainer' fluid>
      <Row id='ProfilePicRow'>
        <img id='ProfilePic' src={ProfilePic} alt='Dave Landey' />
      </Row>
      <Row id="profileIntro">
      <h1>Hi,</h1>
      <br />
      <h3>I'm Dave Landey.</h3>
      <br />
      <h5>I am a software developer.</h5>
      <br />
      <h6>
        <em>Passionate about: 
          <br />
          <br />
          <ul>
            <li>People</li>
            <li>Creating</li>
            <li>Life long learning</li>
          </ul></em>
          </h6>
      </Row>
    </Container>
  );
};

export default Profile;
