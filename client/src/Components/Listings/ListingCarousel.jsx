import React from 'react';
import Listing from './Listing.jsx';
import styled from 'styled-components';
import ArrowLeft from '../ArrowLeft.jsx';
import ArrowRight from '../ArrowRight.jsx';

<<<<<<< HEAD
<<<<<<< Updated upstream
const ListingCarousel = ({ listings }) => (
  <div className="listing-carousel">
    {listings.slice(0, 10).map((listing) => {
      return <Listing listing={listing} />
    })}
  </div>
)
=======
=======
>>>>>>> master
const Container = styled.div`
  height: 350px;
  width: 990px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: flex-start;
  ::-webkit-scrollbar {
    display: none;
 }
`

const ArrowLeftWrapper = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
`

const ArrowRightWrapper = styled.div`
  position: absolute;
  top: 150px;
  right: 150px;
`

const ListingCarousel = ({ listings, scrollRight, scrollLeft }) => {
  return (
    <div className="listing-carousel">
      <ArrowLeftWrapper>
        <ArrowLeft scrollLeft={scrollLeft} />
      </ArrowLeftWrapper>
      <Container>
<<<<<<< HEAD
        {listings.slice(2, 12).map((listing) => {
=======
        {listings.slice(3, 13).map((listing) => {
>>>>>>> master
          return <Listing listing={listing} />
        })}
      </Container>
      <ArrowRightWrapper>
        <ArrowRight scrollRight={scrollRight} />
      </ArrowRightWrapper>
    </div>
  )
}

// )
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> master

export default ListingCarousel;