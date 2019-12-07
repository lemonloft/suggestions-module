import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-weight: 800;
  font-size: 24px;
  text-align: left;
  color: #484848;
`;

const ActivityHeader = (props) => (
  <div>
    <Header>
      Things to do near this home
    </Header>
  </div>
)

export default ActivityHeader;