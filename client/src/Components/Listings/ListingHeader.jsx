import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  color: #484848;
  padding: 10px;
`

const ListingHeader = (props) => (
  <div>
    <Header>
      More homes you may like
    </Header>
  </div>
)

export default ListingHeader;