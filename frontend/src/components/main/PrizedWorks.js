import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import thumbnail1 from '../../images/idea1.png';
import thumbnail2 from '../../images/idea2.png';
import thumbnail3 from '../../images/idea3.png';
import thumbnail4 from '../../images/idea4.png';
import thumbnail5 from '../../images/idea5.png';
import thumbnail6 from '../../images/idea6.png';
import main_sub_title_image from '../../images/main_sub_title_image.png';

const PrizedWorksListHolder = styled(Responsive)`
  margin-top: 4rem;
  text-align: center;
  img {
    width: 3rem;
  }
`;

const PrizedWorksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PrizedWorkItem = styled(Link)`
  margin: auto;
  margin-bottom: 2.5rem;
  border: 1px solid ${palette.gray[5]};
  width: 270px;
  height: 500px;
  overflow: hidden;
  img{
    width: auto;
    height: 75%;
    margin-left: -40%;
  }
  h1 {
    font-size: 1.25rem;
    border-bottom: 1px solid ${palette.gray[5]};
    margin: 1rem;
    padding-bottom: 1rem;
    color: ${palette.gray[8]};
    font-weight: 500;
  }
  h2 {
    font-size: 1rem;
    padding-bottom: 1rem;
    color: #ff4e50;
  }
  @media (max-width: 1152px) {
    width: 230px;
  }
  @media (max-width: 768px) {
    width: 100%;
    img{
      width: 100%;
      margin-left: 0;
    }
`;

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: 500;
  padding-bottom: 1rem;
  margin-top: 0.5rem;
`;

const PrizedWorks = ({ prizedWorks }) => {
  const thumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
  ];
  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);

    //최댓값 제외, 최솟값 포함.
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <PrizedWorksListHolder>
      <img src={main_sub_title_image} alter="main_sub_title_image" />
      <StyledH1>대회 수상 작품</StyledH1>
      <PrizedWorksWrapper>
        {prizedWorks.map((prizedItem) => {
          return (
            <PrizedWorkItem to={`/content/${prizedItem._id}`}>
              <img
                src={thumbnails[getRandomNum(0, 6)]}
                alt="prized work thumbnail"
              />
              <h1>
                {prizedItem.title.length > 9
                  ? `${prizedItem.title.substring(0, 9)}...`
                  : prizedItem.title}
              </h1>
              <h2>{`${prizedItem.taggedContest} ${prizedItem.prizedPlace}위`}</h2>
            </PrizedWorkItem>
          );
        })}
      </PrizedWorksWrapper>
    </PrizedWorksListHolder>
  );
};

export default PrizedWorks;
