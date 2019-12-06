import React from 'react';

const Listing = ({ listing }) => {
  return (
    <div className="listing-item">
      <img src={listing.main_image_url} className="listing-item-image" />
      <div className="listing-item-room-type">
        {listing.room_type} {`\u2022`} {listing.location}
      </div>
      <div className="listing-item-title">
        {listing.title}
      </div>
      <div className="listing-item-cost">
        {`$${listing.cost}/night`}
      </div>
      <div className="listing-item-rating">
        {listing.rating}
      </div>
      <div className="listing-item-num-comments">
        {`(${listing.num_comments})`}
      </div>
      <br></br>
    </div>
  )
}

export default Listing;