import React from "react"
import './navbar.css'
import airbnbLogo from '../images/Airbnb-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faUser,faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar(){
    return(
        <nav>
            <img src={airbnbLogo}  alt="Airbnb-logo" />
            <div className="navbar-left-content">
                <button className="airbnb-your-home"><b>Airbnb your home</b></button>
                <button className="globe-icon-btn"><FontAwesomeIcon icon={faGlobe} /></button>
                
                <button className="login-btn">
                    <FontAwesomeIcon icon={faBars} style={{color: "black"}} />  
                    <FontAwesomeIcon icon={faUser} style={{color: "#5e5c5c",marginLeft:"20px"}} />
                </button>
            </div>
        </nav>
    )
}