import React from 'react';

const Activity = ({ activity }) => {
  return (
    <div className="activity-item">
      <div className="activity-item-title">
        {activity.title}
      </div>
      <img src={activity.image_url} className="activity-item-image" />
      <div className="activity-item-cost">
        {`From $${activity.cost}/per person`}
      </div>
      <div className="activity-item-rating">
        {activity.rating}
      </div>
      <div className="activity-item-num-comments">
        {`(${activity.num_comments})`}
      </div>
      <br></br>
    </div>
  )
}

export default Activity;