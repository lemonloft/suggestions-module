import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 970px;
  font-weight: 800;
  font-size: 24px;
<<<<<<< HEAD
<<<<<<< Updated upstream
  text-align: left;
  color: #484848;
`;
=======
  color: #484848;
  padding: 10px;
  text align: left;
`
>>>>>>> Stashed changes
=======
  text-align: center;
  color: #484848;
  padding: 10px;
`
>>>>>>> master

const ListingHeader = (props) => (
  <div>
    <Header>
      More homes you may like
    </Header>
  </div>
)

export default ListingHeader;