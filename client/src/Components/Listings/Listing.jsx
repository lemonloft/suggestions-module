import React from 'react';
import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';

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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Image = styled.div`
  height: 210px;
  width: 310px;
  border: 1px;
`

const Wrapper = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px !important;
`

const Heart = styled(FaRegHeart)`
  height: 10%;
  width: 10%;
  z-index: 1;
  position: absolute;
  top: 10%;
  left: 90%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  padding: 12px 24px;
  color: white;
`

const Listing = ({ listing }) => {
  return (
    <Wrapper>
      <div className="listing-item">
        <ImageWrapper>
          <Image>
            <img src={listing.main_image_url} style={{ borderRadius: 5 }} height="210px" width="310px" className="listing-item-image" />
            <Heart><FaRegHeart /></Heart>
          </Image>
        </ImageWrapper>
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
    </Wrapper>
  )
}

export default Listing;