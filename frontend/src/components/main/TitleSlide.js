//메인화면의 슬라이드에 표시될 타이틀 화면

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import mainImg from '../../images/main2.png';

const TitleSlideHolder = styled(Link)`
  width: 100%;
  text-align: center;
  color: ${palette.gray[8]};
  h1 {
    margin: 0;
    font-size: 2.75rem;
  }
  p {
    font-size: 1.3rem;
    font-weight: 100;
    margin: 1rem 0;
  }
  img {
    position: absolute;
    bottom: 0;
    opacity: 0.5;
  }
  .coloredH1 {
    color: ${palette.mainColor};
  }
  .underLine {
    margin: 0;
    margin-bottom: 1.5rem;
    font-weight: 1000;
    color: ${palette.gray[6]};
  }
  @media (max-width: 1152px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const BackgroundHolder = styled.div`
  width: 100%;
  height: 100%;
  background: ${palette.gray[1]};
  opacity: 0.5;
`;

const ContentsHolder = styled.div`
  align-item: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const TitleSlide = () => {
  return (
    <TitleSlideHolder to="/about">
      <BackgroundHolder />
      <ContentsHolder>
        <h1>{`전북대학교 작품 공유 서비스`}</h1>
        <h1 className="coloredH1">IDEA HUB</h1>
        <p className="underLine">____</p>
        <p>
          IDEA HUB는 여러분의 작품을 전시하고, 참여를 유도하기 위해
          만들어졌습니다.
          <br />
          개최중인 대회에 직접 작품을 등록해보고, 다른 사람과 공유해보세요.
        </p>
      </ContentsHolder>
      <img src={mainImg} alter="mainTitleImage" />
    </TitleSlideHolder>
  );
};

export default TitleSlide;
