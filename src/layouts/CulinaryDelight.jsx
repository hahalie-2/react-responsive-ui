import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import DelightGroup1 from '../assets/images/delight-group-1.jpg'
import DelightGroup2 from '../assets/images/delight-group-2.jpg'

const CulinaryDelight = () => {
  return <section className="culinary-delight">
  <div className="container">
          <div className="restaurant-info">
              <div className="restaurant-description padding-right animate-left">
                  <div className="global-headline">
                      <h2 className="sub-headline">
                          <span className="first-letter">C</span>ulinary
                      </h2>
                      <h1 className="headline headline-dark">Delight</h1>
                      <div className="asterisk"><FontAwesomeIcon icon={faAsterisk} /></div>
                  </div>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, accusamus cumque iusto vero
                      sint, incidunt ducimus asperiores nostrum suscipit dolor ab obcaecati voluptas deleniti.
                      Cupiditate numquam nemo possimus molestias.
                  </p>
                  <a href="#" className="btn body-btn">Make a reservation</a>
              </div>
              <div className="image-group">
                  <img src={ DelightGroup1 } alt="" className="animate-top"/>
                  <img src={ DelightGroup2 } alt="" className="animate-bottom"/>
              </div>
          </div>
      </div>
</section>;
};

export default CulinaryDelight;
