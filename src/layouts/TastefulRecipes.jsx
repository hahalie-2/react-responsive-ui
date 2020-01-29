import React from "react";
import "../assets/scss/TastefulRecipes.scss";

import Fade from "react-reveal/Fade";

const TastefulRecipes = () => {
  return (
    <section className="testeful-recipes between">
      <div className="container">
        <div className="global-headline">
          <Fade top>
            <div className="animate-top">
              <h2 className="sub-headline">
                <span className="first-letter">T</span>asteful
              </h2>
            </div>
          </Fade>
          <Fade bottom>
            <div className="animate-bottom">
              <h1 className="headline">Recipes</h1>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default TastefulRecipes;
