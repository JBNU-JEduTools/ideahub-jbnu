import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import mainImage from '../../images/main3.png';

const MainImgWrapper = styled.div`
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;

  background: ${palette.mainColor};
  padding-bottom: 0px;
`;
const MainImg = styled(Responsive)`
  .mainTitle {
    padding-top: 3rem;
    color: white;
    font-weight: lighter;
    text-align: center;
  }
`;

const MainTitle = () => {
  return (
    <MainImgWrapper>
      <MainImg>
        <h1 className="mainTitle">
          여러분의 생각을 기록하고 공유하세요
          <br />
          IDEA HUB
        </h1>
        <img src={mainImage} alt="mainImage" width="100%" />
      </MainImg>
    </MainImgWrapper>
  );
};

export default MainTitle;
