import React from 'react'
import './justbelownav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

function Justbelownav() {
  return (
    <div className="hero">
    <button>Price <FontAwesomeIcon icon={faAngleDown} /></button>
    <button>Language Offered <FontAwesomeIcon icon={faAngleDown} /></button>
    <button>Time of Day <FontAwesomeIcon icon={faAngleDown} /></button>
    <div class="vl"></div>
    <button>Wellness</button>
    <button>Art and Culture</button>
    <button>Entertainment</button>
    <button className="links-to-disable">Food and Drink</button>
    <button className="links-to-disable">Sports</button>
    <button className="links-to-disable">Tours</button>
    <button className="links-to-disable">Sight Seeing</button>

</div>
  )
}

export default Justbelownav
