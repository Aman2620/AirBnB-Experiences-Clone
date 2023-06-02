import React,{ useState }  from 'react'
import './allexperiences.css'
import Activities from '../data'
import ContentCard from './ContentCard'

function AllExperiences() {
  const [visibleCards, setVisibleCards] = useState(10); // Number of initially visible cards

  // const information = Activities.map(item=>{
  //   return (
  //     <ContentCard
  //       img = {item.coverImg}
  //       rating={item.stats.rating}
  //       reviewCount={item.stats.reviewCount}
  //       location={item.location}
  //       title={item.title}
  //       price={item.price}
  //     />
  //   );
    
  // })
  const information = Activities.slice(0, visibleCards).map((item) => {
    return (
      <ContentCard
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 10); // Increase the number of visible cards by 10
  };

  return (
    <div className='all-experiences-container'>
      <h2>All Experiences</h2>
      <div className='main-content-experiences'>
        {information}
      </div>
      {visibleCards < Activities.length ? (
      <button className='load-more' onClick={handleLoadMore}><b>Load More</b></button>
    ) : null}    
    </div>
  )
}

export default AllExperiences
