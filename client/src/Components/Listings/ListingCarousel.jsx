import React from 'react';
import Listing from './Listing.jsx';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  background-color: white;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const ListingCarousel = ({ listings }) => (
  <CarouselWrapper>
    <div className="listing-carousel">
      <Carousel>
        {listings.slice(14, 24).map((listing) => {
          return <Carousel.Item><Listing listing={listing} /></Carousel.Item>
        })}
      </Carousel>
    </div>
  </CarouselWrapper>
)

export default ListingCarousel;