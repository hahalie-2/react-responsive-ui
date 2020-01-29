import React from "react";
import '../assets/scss/Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faEnvelope, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookSquare, faPinterest, faLinkedinIn, faTripadvisor } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return <footer>
  <div className="container">
      <div className="back-to-top">
          <a href="#hero"><FontAwesomeIcon icon={faChevronUp} /></a>
      </div>
  </div>
  <div className="footer-content">
      <div className="footer-content-about animate-top">
          <h4>About Rosa</h4>
          <div className="asterisk"><FontAwesomeIcon icon={faAsterisk} /></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est officia quidem cumque facilis expedita
              hic. Nostrum ipsum voluptate earum laborum vero, sapiente repudiandae omnis dolorum, ipsam sed
              quisquam repellendus commodi.</p>
      </div>
      <div className="footer-content-divider animate-bottom">
          <div className="social-media">
              <h4>Follow along</h4>
              <ul className="social-icons">
                  <li>
                      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                  </li>
                  <li>
                      <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                  </li>
                  <li>
                      <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                  </li>
                  <li>
                      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  </li>
                  <li>
                      <a href="#"><FontAwesomeIcon icon={faTripadvisor} /></a>
                  </li>
              </ul>
          </div>
          <div className="newsletter-container">
              <h4>Newsletter</h4>
              <form action="" className="newsletter-form">
                  <input type="text" className="newsletter-input" placeholder="Your email address..."/>
                  <button className="newsletter-btn" type="submit">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </button>
              </form>
          </div>
      </div>
  </div>
</footer>;
};

export default Footer;
