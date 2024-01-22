import React from "react";
import video from "../../../assets/bg.mp4";
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <h1>The Vampire Diaries</h1>
        <p>
          “The Vampire Diaries” is not afraid to take risks. The show is famous
          for its plot twists, and it's one of the reasons why it's so
          addictive.
        </p>
        <div className="buttons">
            <Link to="/training">Try Now!</Link>
            <Link to="/contact">Launch!</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
