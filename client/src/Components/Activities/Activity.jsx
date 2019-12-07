import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  text-align: left;
  color: #484848;
`;

const Cost = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  color: #484848;
`;

const Rating = styled.div`
  font-weight: 800;
  font-size: 12px;
  text-align: left;
  color: #008489;
`;

const NumComments = styled.div`
  font-weight: 200;
  font-size: 12px;
  text-align: left;
  color: #767676;
`;

const Activity = ({ activity }) => {
  return (
    <div className="activity-item">
      <Title>
        <div className="activity-item-title">
          {activity.title}
        </div>
      </Title>
      <img src={activity.image_url} className="activity-item-image" />
      <Cost>
        <div className="activity-item-cost">
          {`From $${activity.cost}/per person`}
        </div>
      </Cost>
      <Rating>
        <div className="activity-item-rating">
          {activity.rating}
        </div>
      </Rating>
      <NumComments>
        <div className="activity-item-num-comments">
          {`(${activity.num_comments})`}
        </div>
      </NumComments>
      <br></br>
    </div>
  )
}

export default Activity;