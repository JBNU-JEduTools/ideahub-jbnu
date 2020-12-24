import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const RibbonHolder = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  top: -5px;
  right: -5px;
  overflow: hidden;
`;

const RibbonBody = styled.span`
  width: 200px;
  height: 40px;
  padding: 8px 0;
  color: white;
  background: ${palette.mainColor};
  display: block;
  position: relative;
  top: 20px;
  left: -35px;
  transform: rotate(45deg);
  text-align: center;
`;

const Ribbon = () => {
  return (
    <RibbonHolder>
      <RibbonBody>수상작</RibbonBody>
    </RibbonHolder>
  );
};

export default Ribbon;
