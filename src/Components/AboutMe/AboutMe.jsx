import "./AboutMe.css";
import Map from "../Map/Map";
import Hobbies from "../Hobbies/Hobbies";


const AboutMe = (props) => {
  // ** Incorporate this function into app somehow, where would it work?
  // function getYear(){
  //   const year = getFullYear();
  //   console.log (year)
  //   }

  return (
    <div id='aboutMeDiv'>
      <Map />
      <Hobbies />
    </div>
  );
};

export default AboutMe;
