import React from 'react';
import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';

const Title = styled.div`
  font-weight: 800;
  font-size: 14px;
  text-align: left;
  color: #484848;
`

const Details = styled.div`
  font-weight: 800;
  font-size: 10px;
  text-align: left;
  color: #767676;
`

const Cost = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: #484848;
`

const Rating = styled.div`
  font-weight: 800;
  font-size: 12px;
  text-align: left;
  color: #484848;
`

const NumComments = styled.div`
  font-weight: 200;
  font-size: 12px;
  text-align: left;
  color: #767676;
`

const Icon = styled(IoIosStar)`
  color: #008489;
`

const Image = styled.div`
  height: 240px;
  width: 360px;
`

const Listing = ({ listing }) => {
  return (
    <div className="listing-item">
      <Image>
      <div className="image-resize">
        <img src={listing.main_image_url} height="240px" width="360px" className="listing-item-image" />
      </div>
      </Image>
      <Details>
        <div className="listing-item-details">
          {listing.room_type.toUpperCase()} {`\u2022`} {listing.location.toUpperCase()}
        </div>
      </Details>
      <Title>
        <div className="listing-item-title">
          {listing.title}
        </div>
      </Title>
      <Cost>
        <div className="listing-item-cost">
          {`$${listing.cost}/night`}
        </div>
      </Cost>
      <Rating>
        <div className="listing-item-rating">
          <Icon><IoIosStar /></Icon> {listing.rating}
        </div>
      </Rating>
      <NumComments>
        <div className="listing-item-num-comments">
          {`(${listing.num_comments})`}
        </div>
      </NumComments>
    </div>
  )
}

export default Listing;