import React from 'react'
import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';
function ContentCard(props) {
  return (
        <div className='mycard'>
            <div className="card-badge">
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: '20px',color:"#858482"}}/>
            </div>
            <img src={`../images/${props.img}`} alt="location-i-mumbai" />
            <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
                <span>{props.location}</span>
            </div>
            <div className="name-place">
                <p><b>{props.title}</b></p>
                <p className="temp-change">From Rs. {props.price}/person</p>
            </div>
        </div>
  )
}

export default ContentCard
