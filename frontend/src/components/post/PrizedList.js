//수상 작품 목록이 등록되어 있을 경우, 그 목록을 보여주는 컴포넌트.

import React from 'react';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import prizeLeft from '../../images/prizeLeft.png';
import prizeRight from '../../images/prizeRight.png';

const WholeContentsHolder = styled(Responsive)`
  margin-top: 3rem;
  background: #fbf8ef;
  padding: 3rem 0;
`;

const PrizedListHolder = styled(Responsive)`
  padding: 3rem 3rem;
  margin-bottom: 5rem;
  @media (max-width: 1152px) {
    padding: 3rem 1rem;
  }
`;

const PrizedItemHolder = styled(Link)`
  display: flex;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  word-break: break-all;
  background: white;
  color: ${palette.gray[8]};
  p {
    font-size: 1.2rem;
    margin: 0.5rem 0.2rem;
  }
  &:hover {
    background: ${palette.gray[2]};
  }
`;

//대회 제목 & '수상 작품 목록' 글자 홀더
const TitleHolder = styled.div`
  @font-face {
    font-family: 'MapoGoldenPier';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  text-align: center;
  color: ${palette.gray[8]};

  h1 {
    font-size: 3rem;
    margin: 0;
    font-family: 'MapoGoldenPier';
    font-weight: 500;
    margin-top: 2rem;
    @media (max-width: 1152px) {
      font-size: 2rem;
      margin-top: 0.5rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-top: 0.8rem;
    }
  }
  h2 {
    font-size: 6rem;
    margin: 0;
    font-family: 'MapoGoldenPier';
    font-weight: 500;
    @media (max-width: 1152px) {
      font-size: 4rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const TitleImgHolder = styled.div`
  width: 100%;
  display: flex;
  margin: 4.5rem 0;
  justify-content: center;
  img {
    height: 15rem;
    @media (max-width: 1152px) {
      height: 8rem;
    }
    @media (max-width: 768px) {
      height: 5rem;
    }
  }
`;

const PrizedPlaceHolder = styled.div`
  width: 100%;
  color: black;
  margin: 2rem 0 1rem 0;
  border-left: 5px solid ${palette.mainColor};
  padding: 0 0.6rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const ThanksHolder = styled.div`
  background: ${palette.mainColor};
  opacity: 0.7;
  color: white;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem;
`;

//prizedItem는 post 객체 내의 배열 prized의 각각의 element를 나타냄.
const PrizedItem = ({ prizedItem }) => {
  const { _id, title, team } = prizedItem;
  return (
    <PrizedItemHolder to={`/content/${_id}`}>
      <p>{team}</p>
      <p>-</p>
      <p>"{title}"</p>
    </PrizedItemHolder>
  );
};

//prized는 post 객체 내의 배열 prized. prizedItem 객체의 배열임.
//수정: 해당 대회에 속한 작품들의 리스트인 'contentList' 에서, 우선순위가 정해진 작품들만 로드

const PrizedList = ({ prized, post, loading }) => {
  const { title } = post;
  //수상작 목록을 나타내는 재귀 함수가 끝까지 돌았는지.
  let prizedListArray = []; //순위별 수상작 리스트 컴포넌트를 모아놓기 위함.

  //수상작 목록을 우선 순위별로 정렬
  prized.sort((prized1, prized2) => {
    return prized1.prizedPlace <= prized2.prizedPlace ? -1 : 1;
  });

  //아래의 showPrizedList를 여러번 실행시켜서, 각 순위별 수상작 목록을 나타낸 컴포넌트를 prizedListArray 배열에 저장함.
  const showPrizedListHandler = () => {
    const maxPriority = prized[prized.length - 1].prizedPlace;
    for (
      let currentPriority = 1;
      currentPriority <= maxPriority;
      currentPriority++
    ) {
      prizedListArray.push(
        showPrizedList(currentPriority, prized, maxPriority),
      );
    }

    //prizedListArray에 저장된 각각의 컴포넌트들을 모두 렌더링
    return (
      <div>
        {prizedListArray.map((item) => {
          return item;
        })}
      </div>
    );
  };

  const showPrizedList = (currentPriority, prized, maxPriority) => {
    if (currentPriority > maxPriority) return null;
    //수상 작품 목록 중 우선순위가 currentPriority와 같은 것들만 골라 리스트를 만듦.
    let tempPrized = prized.filter((item) => {
      return item.prizedPlace == currentPriority; //item.prizedPlace의 type은 string이므로, ==를 사용.(형변환 후 비교)
    });

    return (
      <div>
        <PrizedPlaceHolder>{currentPriority}위</PrizedPlaceHolder>
        {!loading && prized && (
          <div>
            {tempPrized.map((item) => {
              return <PrizedItem prizedItem={item} key={item._id} />; //key를 지정하는 이유: 리스트 내부의 어떤 item 정보가 변경되었을 경우, list 전체를 리렌더링 하지 않고, 그 item만 리렌더링 하기 위해.
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <WholeContentsHolder>
      <TitleImgHolder>
        <img src={prizeLeft} alter="prizeLeft" />
        <TitleHolder>
          <h1>{title}</h1>
          <h2>수상 작품 목록</h2>
          <p>작품 명을 클릭하면 해당 작품 페이지로 이동합니다</p>
        </TitleHolder>
        <img src={prizeRight} alter="prizeRight" />
      </TitleImgHolder>

      <PrizedListHolder>{showPrizedListHandler()}</PrizedListHolder>
      <ThanksHolder>참여해주신 모든 분들 진심으로 감사합니다</ThanksHolder>
    </WholeContentsHolder>
  );
};

export default PrizedList;
