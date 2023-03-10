import Typewriter from "typewriter-effect";
import { Row } from "react";
import Map from "../Map/Map.jsx";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <div id='aboutMeContainer'>
      {/* <Row> */}
      <div>
        <h5
          style={{
            backgroundColor: "cyan",
            margin: "0.5em",
            padding: "0.5em",
            width: "90%",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          I was born in, and lived around, South Africa until 2018 - when I
          moved to Vermont, USA where I now live with my wife (Jess), our two
          dogs (Murphy and Chance) and 15 chickens. <br />
          <br />
          If a picture is worth a thousand words, how about an interactive map
          of the places I have called home?!
        </h5>
      </div>
      <Map />
      <div>
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
      </div>
      {/* </Row> */}
      {/* <Row> */}
      <div id='fontContainer'>
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
              {/* https://www.npmjs.com/package/typewriter-effect */}
              <Typewriter
                options={{
                  strings: [" Ubuntu"],
                  // cursorClassName:"typerwriteCursor",
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
      </div>
      {/* </Row> */}
    </div>
  );
};

export default AboutMe;
