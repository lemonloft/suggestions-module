import React from 'react';
import Listing from './Listing.jsx';
import styled from 'styled-components';

const Container = styled.div`
  height: 350px;
  width: 1000px;
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

const ListingCarousel = ({ listings }) => (
    <div className="listing-carousel">
      <Container>
        {listings.slice(3, 13).map((listing) => {
          return <Listing listing={listing} />
        })}
      </Container>
    </div>
)

export default ListingCarousel;