//등록된 수상 작품이 없다고 알려주는 컴포넌트

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AlerterHolder = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
  background: ${palette.gray[1]};
  border-radius: 5px;
  border-color: ${palette.mainColor};
  h1 {
    font-weight: 100;
  }
  p {
    margin-bottom: 2rem;
  }
`;

//수상 작품 등록 버튼
const UpdateButton = styled.button`
  text-align: center;
  border: none;
  border-radius: 5px;
  width: 10rem;
  height: 2.5rem;
  color: white;
  font-size: 1rem;
  background: ${palette.mainColor};
  &:hover {
    background: ${palette.mainColorHovered};
  }
`;

//스크롤 일관성을 위해 빈 공간 삽입
const EmptySpace = styled.div`
  width: 100%;
  height: 4rem;
`;

const NoPrizedAlerter = () => {
  return (
    <div>
      <EmptySpace />
      <AlerterHolder>
        <h1>아직 등록된 수상 작품이 없습니다.</h1>
        <p>개최자가 아직 수상 작품을 등록하지 않았습니다.</p>
        <UpdateButton>수상 작품 등록</UpdateButton>
      </AlerterHolder>
      <EmptySpace />
      <EmptySpace />
      <EmptySpace />
    </div>
  );
};

export default NoPrizedAlerter;
