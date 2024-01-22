import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";
// import fb from "../../assets/facebook.png"
// import insta from "../../assets/insta.png"
// import twitter from "../../assets/twitter.png"

const Footer = () => {
  // const social = [fb,insta,twitter];
  return (
    <footer>

      <div className="footer">
      <h1>Vampire Diaries</h1>

      <div className="links">
        <h3>Useful Links</h3>

      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/training">Training</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
      </div>


      <div className="social">
        {/* {social.map((item) => {
            return <img src={item} alt=""/>;
          })} */}
        <CiFacebook />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
