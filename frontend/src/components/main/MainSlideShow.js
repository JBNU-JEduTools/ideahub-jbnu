import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainImg1 from '../../images/main.png';
import mainImg2 from '../../images/main3.png';
import Responsive from '../common/Responsive';

const SliderHolder = styled.div`
  position: absolute;
  height: 30rem;
  padding: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 2rem;
  overflow: hidden;
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
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 30rem;
  background: none;
  left: 0;
  transition: 0.5s;
  font-size: 3rem;
  font-weight: 1000;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
    cursor: pointer;
    color: white;
  }
`;

const SlideNavButtonRight = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 30rem;
  background: none;
  right: 0;
  transition: 0.5s;
  font-size: 3rem;
  font-weight: 1000;
  &:hover {
    background: rgba(0, 0, 0, 0.356);
    cursor: pointer;
    color: white;
  }
`;

const TestDiv = styled.div`
  min-width: 100%;
  height: 100%;
  border: 1px solid blue;
`;

const MainSlideShow = () => {
  let sliderArray = [<TestDiv>1</TestDiv>, <ImgHolder src={mainImg2} />];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <SliderHolder>
      {sliderArray.map((item, index) => {
        return (
          <SlideItem key={index} style={{ transform: `translateX(${x}%)` }}>
            {item}
          </SlideItem>
        );
      })}
      <SlideNavButtonLeft className="leftButton" onClick={goLeft}>
        &lt;
      </SlideNavButtonLeft>
      <SlideNavButtonRight className="rightButton" onClick={goRight}>
        &gt;
      </SlideNavButtonRight>
    </SliderHolder>
  );
};

export default MainSlideShow;
