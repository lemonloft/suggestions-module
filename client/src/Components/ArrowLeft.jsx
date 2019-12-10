import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

const Arrow = styled(IoIosArrowBack)`
  height: 30px;
  width: 30px;
  fill: rgb(118, 118, 118);
`

const ArrowLeft = () => {
  return (
    <Arrow>
      <button className="scroll-left-handler">
        <IoIosArrowBack />
      </button>
    </Arrow>
  )
}

export default ArrowLeft;