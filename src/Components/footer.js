import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div>
        <footer>
          <div className='main-footer'>
            <div className='footer-content'>
                <p><b>Support</b></p>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">AirCover</a></li>
                    <li><a href="#">Supporting people with disabilities</a></li>
                    <li><a href="#">Cancellation options</a></li>
                    <li><a href="#">Our COVID-19 Response</a></li>
                    <li><a href="#">Report a neighbourhood concern</a></li>
                </ul>
            </div>

            <div className='footer-content'>
              <p><b>Community</b></p>
              <ul>
                <li><a href="#">Airbnb.org: disaster relief housing</a></li>
                <li><a href="#">Combating discrimination</a></li>
              </ul>
            </div>

            <div className='footer-content'>
              <p><b>Hosting</b></p>
              <ul>
                <li><a href="#">Airbnb your home</a></li>
                <li><a href="#">AirCover for Hosts</a></li>
                <li><a href="#">Explore hosting resources</a></li>
                <li><a href="#">Visit our community forum</a></li>
                <li><a href="#">How to host responsibly</a></li>
              </ul>
            </div>

            <div className='footer-content'>
              <p><b>Airbnb</b></p>
              <ul>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Learn about new features</a></li>
                <li><a href="#">Letter from our founders</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>
            </div>
            <div className='bottom-footer-section'>
              <hr color="#d9dedd"/>
              <div className='bottom-content'>
                <span>&copy; 2023 Airbnb, Inc.</span>
                <span><li>&#x2022;<a href="#">Privacy</a></li></span>
                <span><li>&#x2022;<a href="#">Terms</a></li></span>
                <span><li>&#x2022;<a href="#">Sitemap</a></li></span>
                <span><li>&#x2022;<a href="#">Company details</a></li></span>
                <div className='bottom-content-right'>
                <button className="globe-icon-btn"><FontAwesomeIcon icon={faGlobe} /></button>
                <span><li><a href="#">English(IN)</a></li></span>
                <span><li><a href="#">&#8377;</a></li></span>
                <span><li><a href="#">INR</a></li></span>
                <span><li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li></span>
                <span><li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li></span>
                <span><li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li></span>


                </div>
              </div>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
