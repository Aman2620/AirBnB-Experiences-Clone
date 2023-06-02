import React, { useRef } from 'react';
import './card.css'
import ContentCard from './ContentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Activities from '../data'


function Card() {
  const boxRef = useRef(null);

  const btnpressprev = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    console.log(width);
  };
    const information = Activities.map(item=>{
        return (
          <ContentCard
            img = {item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
          />
        );
        
      })
  return (
    <div className='container'>
        <div className='heading-container'>
            <h2>Happening Tomorrow</h2>
            <button className="slider-arrows-greater" onClick={btnpressprev}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button className="slider-arrows-lesser" onClick={btnpressnext}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        <div className='product-container' ref={boxRef}>
            {information}
        </div>
    </div>

  )
}

export default Card
