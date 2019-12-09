import React from 'react';
import Listing from './Listing.jsx';
import Carousel from 'react-bootstrap/Carousel';

const ListingCarousel = ({ listings }) => (
  <div className="listing-carousel">
    <Carousel>
    {listings.slice(0, 10).map((listing) => {
      return <Carousel.Item><Listing listing={listing} /></Carousel.Item>
    })}
    </Carousel>
  </div>
)

export default ListingCarousel;