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
    margin-bottom: 0;
  }
  .redP {
    color: red;
    margin: 0;
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

const PrizedContentItem = ({
  contentItem,
  onChangePriority = { onChangePriority },
}) => {
  const { title, team, prizedPlace } = contentItem;
  return (
    <ItemHolder>
      <InfoHolder>
        <h1>{title}</h1>
        <h2>{team}</h2>
      </InfoHolder>
      <InfoHolder>
        <h2 className="priorityH2">우선순위</h2>
        <select
          name="priority"
          onChange={e => {
            onChangePriority({
              content: contentItem,
              priority: e.target.value,
            });
          }}
        >
          <option selected={prizedPlace} disabled hidden>
            {prizedPlace !== '-' ? `${prizedPlace}위` : '수상 외'}
          </option>
          <option value="-">수상 외</option>
          <option value="1">1위</option>
          <option value="2">2위</option>
          <option value="3">3위</option>
          <option value="4">4위</option>
          <option value="5">5위</option>
          <option value="6">6위</option>
          <option value="7">7위</option>
          <option value="8">8위</option>
          <option value="9">9위</option>
        </select>
      </InfoHolder>
    </ItemHolder>
  );
};

//수상 작품 등록을 수행하는 컴포넌트
//부모!!!!! PrizedUpdater 컴포넌트 (./PrizedUpdater.js)
//contents는 대회에 등록된 전체 작품 목록.
const PrizeModal = ({ contents, visible, onChangePriority }) => {
  const onSave = () => {
    window.location.reload();
  };
  if (!visible) return null;
  return (
    <TranslucentBackground>
      <PrizeModalHolder>
        <h1>수상 작품 등록</h1>
        <p>대회에 등록된 작품 목록을 보여줍니다. </p>
        <p className="redP">
          이때 공동 수상작의 경우에는, 두 작품 모두 같은 우선순위를
          선택해주세요.
          <br />
          (예: 공동 2위 수상작의 우선순위는 모두 2위로 선택.)
        </p>
        <WholeItemHoler>
          {contents.length !== 0 ? (
            contents.map(contentItem => {
              return (
                <PrizedContentItem
                  contentItem={contentItem}
                  onChangePriority={onChangePriority}
                />
              );
            })
          ) : (
            <p>해당 대회에 등록된 작품이 없습니다.</p>
          )}
        </WholeItemHoler>
        <ButtonHolder>
          {/*select 옵션 변경시 바로 쿼리를 보내도록 설정하였으므로, 저장 버튼은 실질적으로 아무것도 안해도 됨.*/}
          <ModalButton onClick={onSave} toDefaultColor>
            저장
          </ModalButton>
        </ButtonHolder>
      </PrizeModalHolder>
    </TranslucentBackground>
  );
};

export default PrizeModal;
