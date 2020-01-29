import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import '../assets/scss/DiscoverOurStory.scss'
import OurStory from '../assets/images/our-story-1.jpg'

const DiscoverOurStory = () => {
  return <section className="discover-our-story">
    <div className="container">
            <div className="restaurant-info">
                <div className="restaurant-description padding-right animate-left">
                    <div className="global-headline">
                        <h2 className="sub-headline">
                            <span className="first-letter">D</span>iscover
                        </h2>
                        <h1 className="headline headline-dark">Our Story</h1>
                        <div className="asterisk"><FontAwesomeIcon icon={faAsterisk} /></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, accusamus cumque iusto vero
                        sint, incidunt ducimus asperiores nostrum suscipit dolor ab obcaecati voluptas deleniti.
                        Cupiditate numquam nemo possimus molestias.
                    </p>
                    <a href="#" className="btn body-btn">About us</a>
                </div>
                <div className="restaurant-info-img animate-right">
                    <img src={OurStory} alt="Our Story"/>
                </div>
            </div>
        </div>
  </section>
};

export default DiscoverOurStory;
