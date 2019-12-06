import React from 'react';
import Listing from './Listing.jsx';

const ListingCarousel = ({ listings }) => (
  <div className="listing-carousel">
    {listings.slice(0, 10).map((listing) => {
      return <Listing listing={listing} />
    })}
  </div>
)

export default ListingCarousel;