import Typewriter from "typewriter-effect";
import { Row, Col } from "react";
import Map from "../Map/Map.jsx";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <div id='aboutMeContainer' fluid="true" l="3">
      <div id='aboutMeIntro' xl="2" l="3" >
      <div id='titleDiv'><h3>About Me:</h3></div>
        <h5>
          I was born in, and lived around, South Africa until 2018 - when I
          moved to Vermont, USA where I now live with my wife (Jess), our two
          dogs (Murphy and Chance) and 15 chickens.
          <br />
          <br />
          I am a builder, creator and problem confronter and solver - committed to lifelong
          learning. I thrive when I am planning, making and fixing things. It is
          this, which sparked my interest in building things with code. I
          investigated and learned some HTML, CSS and JavaScript myself before I
          enrolled in, and graduated from, a software development bootcamp. It
          was here where I was exposed to, and have experience with a variety of, <strong><a href="#experienceBody" style={{textDecoration: "none"}}>full stack technologies</a></strong> - and have
          not looked back since.
          <br />
          <br />
          If a picture is worth a thousand words, how about an interactive map
          of the places I have lived, worked and called home?!
        </h5>
      </div>
      <div id="aboutMeMap" xl="4" l="3">
        <Map />
      </div>

      {/* My favorite songs */}

      {/* <div>
        <h3>Here are some of my favorite songs, at the moment:</h3>
        <iframe
          src='https://open.spotify.com/embed/playlist/5wJklhENubRULP5QWExObF?utm_source=generator'
          width='100%'
          height='352'
          allowfullscreen='true'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          title='Dave Landey Spotify playlist: 97 - oh, 1'
        ></iframe>
      </div> */}

      {/* My favorite font */}
          {/* https://www.npmjs.com/package/typewriter-effect */}

      {/* <div id='fontContainer'>
        <h2>My favorite font is: </h2>
        <div id='fontTyping'>
          <a
            href='https://fonts.google.com/specimen/Ubuntu'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: "none" }}
          >
            {" "}
            <h2>
              <Typewriter
                options={{
                  strings: [" Ubuntu"],
                  cursor: "_",
                  autoStart: false,
                  loop: false,
                  delay: "200",
                  pauseFor: "5000",
                }}
              />
            </h2>
          </a>
        </div>
      </div> */}

    </div>
  );
};

export default AboutMe;
