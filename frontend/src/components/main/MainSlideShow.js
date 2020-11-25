import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import mainImg from '../../images/main3.png';

import TitleSlide from './TitleSlide';

const SliderHolder = styled.div`
  position: relative;
  height: 30rem;
  padding: 0;
  display: flex;
  box-sizing: border-box;
  margin-top: 2rem;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SlideItem = styled.div`
  position: relative;
  height: 100%;
  min-width: 100%;
  transition: 0.5s;
`;

const ImgHolder = styled.img`
  width: 100%;
  height: auto;
`;

const SlideNavButtonLeft = styled.button`
  color: ${palette.gray[7]};
  border: none;
  outline: none;
  position: absolute;
  width: 10%;
  height: 30rem;
  background: none;
  left: 0;
  transition: 0.5s;
  font-size: 4rem;
  font-weight: 100;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
    cursor: pointer;
    color: white;
  }
`;

const SlideNavButtonRight = styled.button`
  color: ${palette.gray[7]};
  border: none;
  outline: none;
  position: absolute;
  width: 10%;
  height: 30rem;
  background: none;
  right: 0;
  transition: 0.5s;
  font-size: 4rem;
  font-weight: 100;
  font-height: 30rem;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
    cursor: pointer;
    color: white;
  }
`;

const ButtonSliderHolder = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  z-index: 1;
`;

const ButtonSlider = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2.5rem;
  color: ${palette.gray[7]};
  .currentIndex {
    color: ${palette.mainColor};
  }
  .no {
    color: ${palette.mainColorHovered};
  }
`;

const MainSlideShow = () => {
  let sliderArray = [<TitleSlide />, <TitleSlide />, <TitleSlide />];
  const [x, setX] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(false);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    console.log('goRight x: ', x);
  };

  //슬라이드 하단의 ButtonSlider를 클릭했을 때 실행되는 함수
  const goClicked = (clickedIndex) => {
    console.log(clickedIndex);
    setX(clickedIndex * -100);
    console.log('x:', x);
  };

  //슬라이드 자동 스크롤을 위한 즉시 실행 함수. 미완
  // (() => {
  //   if (!isAutoSlide) {
  //     setIsAutoSlide(true);
  //   }
  // })();
  

  const test = 1;

  return (
    <SliderHolder>
      <ButtonSliderHolder>
        {sliderArray.map((item, index) => {
          return (
            <ButtonSlider
              className={test == 1 ? 'currentIndex' : 'no'}
              key={index}
              onClick={() => goClicked(index)}
              style={{
                color: -x / 100 == index ? palette.mainColor : palette.gray[7],
              }}
            >
              ●
            </ButtonSlider>
          );
        })}
      </ButtonSliderHolder>
      {sliderArray.map((item, index) => {
        return (
          <SlideItem key={index} style={{ transform: `translateX(${x}%)` }}>
            {item}
          </SlideItem>
        );
      })}
      <SlideNavButtonLeft onClick={goLeft}>&#123;</SlideNavButtonLeft>
      <SlideNavButtonRight onClick={goRight}>}</SlideNavButtonRight>
    </SliderHolder>
  );
};

export default MainSlideShow;
