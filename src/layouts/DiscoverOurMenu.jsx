import React from "react";
import '../assets/scss/DiscoverOurMenu.scss'

import MenuGroup1 from '../assets/images/menu-group-1.jpg'
import MenuGroup2 from '../assets/images/menu-group-2.jpg'
import MenuGroup3 from '../assets/images/menu-group-3.jpg'
import MenuGroup4 from '../assets/images/menu-group-4.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const DiscoverOurMenu = () => {
  return <section className="discover-our-menu">
  <div className="container">
          <div className="restaurant-info">
              <div className="image-group padding-right animate-left">
                  <img src={ MenuGroup1 } alt="menu group 1"/>
                  <img src={ MenuGroup2 } alt="menu group 2"/>
                  <img src={ MenuGroup3 } alt="menu group 3"/>
                  <img src={ MenuGroup4 } alt="menu group 4"/>
              </div>
              <div className="restaurant-description animate-right">
                  <div className="global-headline">
                      <h2 className="sub-headline">
                          <span className="first-letter">D</span>iscover
                      </h2>
                      <h1 className="headline headline-dark">Menu</h1>
                      <div className="asterisk"><FontAwesomeIcon icon={faAsterisk} /></div>
                  </div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti laboriosam totam doloremque,
                      quia numquam provident quidem eos reiciendis voluptas vero vel reprehenderit ratione. Magni
                      ullam voluptatibus nostrum, molestiae reiciendis modi!</p>
                  <a href="#" className="btn body-btn">View the full menu</a>
              </div>
          </div>
      </div>
</section>;
};

export default DiscoverOurMenu;
