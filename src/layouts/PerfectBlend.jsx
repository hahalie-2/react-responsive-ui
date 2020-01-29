import React from "react";
import "../assets/scss/PerfectBlend.scss";

import Fade from "react-reveal/Fade";

const PerfectBlend = () => {
  return (
    <section className="perfect-blend between">
      <div className="container">
        <div className="global-headline">
          <Fade top>
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">T</span>he perfect
              </h2>
            </div>
          </Fade>
          <Fade bottom>
            <div className="animate-bottom">
              <h1 className="headline">Blend</h1>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default PerfectBlend;
