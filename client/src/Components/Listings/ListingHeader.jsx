import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-weight: 800;
  font-size: 24px;
  text-align: left;
  color: #484848;
`;

const ListingHeader = (props) => (
  <div>
    <Header>
      More homes you may like
    </Header>
  </div>
)

export default ListingHeader;