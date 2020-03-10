import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';

const BottomInfoBlock = styled.div`
  width: 100%;
  height: 200px;
  background: #3e4149;
  margin-top: 5rem;
  position: static;
  bottom: 0;
`;

const InfoWrapper = styled(Responsive)`
  color: ${palette.gray[6]};
  padding: 2rem 1rem;
`;

const BottomInfo = () => {
  return (
    <BottomInfoBlock>
      <InfoWrapper>
        전북대학교 IDEA HUB
        <br />
        Bottom Information Bar
      </InfoWrapper>
    </BottomInfoBlock>
  );
};

export default BottomInfo;
