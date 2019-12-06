import React from 'react';
import Activity from './Activity.jsx';

const ActivityCarousel = ({ activities }) => (
  <div className="activity-carousel">
    {activities.slice(0, 10).map((activity) => {
      return <Activity activity={activity} />
    })}
  </div>
)

export default ActivityCarousel;