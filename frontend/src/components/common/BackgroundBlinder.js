import React from 'react';
import styled from 'styled-components';

const BackgroundBlinderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const BackgroundBlinder = ({ click }) => (
  <BackgroundBlinderBlock onClick={click} />
);

export default BackgroundBlinder;
