import React from 'react';
import Activity from './Activity.jsx';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  background-color: white;
  width: 210px;
  height: 410px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const ActivityCarousel = ({ activities }) => (
  <CarouselWrapper>
    <div className="activity-carousel">
      <Carousel interval={null}>
        {activities.slice(1, 11).map((activity) => {
          return <Carousel.Item><Activity activity={activity} /></Carousel.Item>
        })}
      </Carousel>
    </div>
  </CarouselWrapper>
)

export default ActivityCarousel;
