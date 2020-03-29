//수상 작품 목록이 등록되어 있을 경우, 그 목록을 보여주는 컴포넌트.

import React from 'react';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const PrizedListHolder = styled(Responsive)`
  margin-top: 3rem;
  display: inline;
  align-content: center;
`;

const PrizedItemHolder = styled(Link)`
  width: 100%;
  float: right;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  word-break: break-all;
  background: white;
  color: black;
  box-shadow: -1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

//prizedItem는 post 객체 내의 배열 prized의 각각의 element를 나타냄.
const PrizedItem = ({ prizedItem }) => {
  const { _id, title, team } = prizedItem;
  return (
    <PrizedItemHolder to={`/content/${_id}`}>
      <h1>{title}</h1>
      <h2>{team}</h2>
    </PrizedItemHolder>
  );
};

//prized는 post 객체 내의 배열 prized. prizedItem 객체의 배열임.
//수정: 해당 대회에 속한 작품들의 리스트인 'contentList' 에서, 우선순위가 정해진 작품들만 로드

const PrizedList = ({ prized }) => {
  return (
    <PrizedListHolder>
      <div>
        {prized.map(prizedItem => {
          return <PrizedItem prizedItem={prizedItem} key={prizedItem._id} />;
        })}
      </div>
    </PrizedListHolder>
  );
};

export default PrizedList;
