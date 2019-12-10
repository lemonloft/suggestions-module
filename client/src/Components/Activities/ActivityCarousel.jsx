import React from 'react';
import Activity from './Activity.jsx';
import styled from 'styled-components';

const Container = styled.div`
  height: 420px;
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

const ActivityCarousel = ({ activities }) => (
    <div className="activity-carousel">
      <Container>
        {activities.slice(1, 11).map((activity) => {
          return <Activity activity={activity} />
        })}
      </Container>
    </div>
)

export default ActivityCarousel;
