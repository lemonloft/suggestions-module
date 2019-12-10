import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const Arrow = styled(IoIosArrowForward)`
  height: 30px;
  width: 30px;
  fill: rgb(118, 118, 118);
`

const ArrowRight = () => {
  return (
    <Arrow>
      <button className="scroll-right-handler">
        <IoIosArrowForward />
      </button>
    </Arrow>
  )
}

export default ArrowRight;