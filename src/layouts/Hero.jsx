import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import "../assets/scss/Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h2 className="sub-headline">
          <span className="first-letter">W</span>elcome
        </h2>
        <h1 className="headline">The Rosa</h1>
        <div className="headline-description">
          <div className="separator">
            <div className="line line-left"></div>
            <div className="asterisk">
              <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <div className="line line-right"></div>
          </div>
          <div className="single-animation">
            <h5>Ready to be opened</h5>
            <a href="#" className="btn cta-btn">
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
