//수상 작품 등록을 수행하는 컴포넌트

import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

//등록 버튼 클릭 시 나타나는 반투명한 background
const TranslucentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //r, g, b, 투명도
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

//PrizeModal을 담을 div블록
const PrizeModalHolder = styled.div`
  width: 1000px;
  background: white;
  padding: 3rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h1 {
    margin: 0;
    font-weight: 100;
  }
  p {
    color: red;
  }
  @media (max-width: 1152px) {
    width: 700px;
  }
  @media (max-width: 468px) {
    width: 300px;
  }
`;

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled(Button)`
  height: 2.5rem;
  width: 7rem;
  font-size: 1rem;
  margin-left: 5px;
  border-radius: 5px;
  font-weight: 100;
`;

//아이템들 전체를 감쌈
const WholeItemHoler = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  max-height: 600px;
  background: ${palette.gray[1]};
  margin: 2rem 0;
  padding: 1rem;
  overflow-y: scroll;
`;

//아이템 하나 하나를 감쌈
const ItemHolder = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  h1 {
    margin: 0;
    margin-right: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
  h2 {
    margin: 0;
    font-weight: 100;
    font-size: 1.2rem;
  }
`;

//(제목과 팀원)과 (우선순위)를 감싸는 블록
const InfoHolder = styled.div`
  display: flex;
  margin: 0.5rem 0;
  .priorityH2 {
    color: ${palette.mainColor};
    margin-right: 1rem;
  }
`;

const PrizedContentItem = ({ contentItem }) => {
  const { title, team } = contentItem;
  return (
    <ItemHolder>
      <InfoHolder>
        <h1>{title}</h1>
        <h2>{team}</h2>
      </InfoHolder>
      <InfoHolder>
        <h2 className="priorityH2">우선순위</h2>
        <input />
      </InfoHolder>
    </ItemHolder>
  );
};

//수상 작품 등록을 수행하는 컴포넌트
//부모!!!!! NoPrizedAlerter 컴포넌트 (./NoPrizedAlerter.js)
//contents는 대회에 등록된 전체 작품 목록.
const PrizeModal = ({ contents, visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <TranslucentBackground>
      <PrizeModalHolder>
        <h1>수상 작품 등록</h1>
        <p>
          대회에 등록된 작품 목록을 보여줍니다.
          <br />
          수상작의 우선순위(등수)를 작성하고, 비수상작의 우선순위란은 공백 또는
          문자 '-'를 입력해주세요.
        </p>
        <WholeItemHoler>
          {contents.map(contentItem => {
            return <PrizedContentItem contentItem={contentItem} />;
          })}
        </WholeItemHoler>
        <ButtonHolder>
          <ModalButton onClick={onConfirm} toDefaultColor>
            등록
          </ModalButton>
          <ModalButton onClick={onCancel}>취소</ModalButton>
        </ButtonHolder>
      </PrizeModalHolder>
    </TranslucentBackground>
  );
};

export default PrizeModal;
