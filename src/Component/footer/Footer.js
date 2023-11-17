import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="grid_footer">
        <div className="">
          <h1>KNIFE CAFE</h1>
          <p>
            The perfect place to start your day or wind down after a long one.
          </p>
        </div>
        <div className="">
          <h1>Explore</h1>
          <ul className="list">
            <li>Home</li>
            <li>About us</li>
            <li>Live Events</li>
            <li>virtual Event</li>
            <li>managed Event</li>
            <li>Training</li>
            <li>Team</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="">
          <h1>Quick Links</h1>
          <ul className="list">
            <li>Imprint</li>
            <li>term & condition</li>
            <li>policy privacy</li>
            <li>careers</li>
            <li>media</li>
          </ul>
        </div>
        <div className="">
          <h1> Get In Touch</h1>
          <p className="p6">
            KNIFE UG, c/o space shack, Akazienstrade 3A,10823,Berlin, Germany
          </p>
          <p className="p6">8299330894</p>
          <p className="p6">contact@vishal.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
