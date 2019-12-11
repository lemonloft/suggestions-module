import React from 'react';
import Activity from './Activity.jsx';

const ActivityCarousel = ({ activities }) => (
  <div className="activity-carousel">
    {activities.slice(0, 10).map((activity) => {
      return <Activity activity={activity} />
    })}
  </div>
)

<<<<<<< Updated upstream
export default ActivityCarousel;
=======
const ArrowLeftWrapper = styled.div`
  position: absolute;
  bottom: 110px;
  left: 150px;
`

const ArrowRightWrapper = styled.div`
  position: absolute;
  bottom: 110px;
  right: 150px;
`

const ActivityCarousel = ({ activities, scrollRight, scrollLeft }) => {
  return (
    <div className="activity-carousel">
      <ArrowLeftWrapper>
        <ArrowLeft scrollLeft={scrollLeft} />
      </ArrowLeftWrapper>
      <Container>
        {activities.slice(2, 12).map((activity) => {
          return <Activity activity={activity} />
        })}
      </Container>
      <ArrowRightWrapper>
        <ArrowRight scrollRight={scrollRight} />
      </ArrowRightWrapper>
    </div>
  )
}

export default ActivityCarousel;
>>>>>>> Stashed changes
