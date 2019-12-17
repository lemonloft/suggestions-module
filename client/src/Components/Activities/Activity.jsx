import React from 'react';
import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';

const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  text-align: left;
  color: #484848;
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
  color: #008489;
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
  height: 300px;
  width: 225px;
  border: 1px;
`

const Wrapper = styled.div`
  height: 420px;
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

const Activity = ({ activity }) => {
  return (
    <Wrapper>
      <div className="activity-item">
        <ImageWrapper>
          <Image>
            <img src={activity.image_url} style={{ borderRadius: 5 }} height="300px" width="225px" className="activity-item-image" />
            <Heart><FaRegHeart /></Heart>
          </Image>
        </ImageWrapper>
        <Title>
          <div className="activity-item-title">
            {activity.title}
          </div>
        </Title>
        <Cost>
          <div className="activity-item-cost">
            {`From $${activity.cost}/per person`}
          </div>
        </Cost>
        <Rating>
          <div className="activity-item-rating">
            {activity.rating}<Icon><IoIosStar /></Icon>
          </div>
        </Rating>
        <NumComments>
          <div className="activity-item-num-comments">
            {`(${activity.num_comments})`}
          </div>
        </NumComments>
      </div>
    </Wrapper>
  )
}

export default Activity;