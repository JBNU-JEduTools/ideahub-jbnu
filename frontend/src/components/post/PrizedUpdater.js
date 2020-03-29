//등록된 수상 작품이 없다고 알려주는 컴포넌트
//+ 수상 작품 등록 modal을 발생 시키는 버튼을 포함하고 있으므로, 수상 작품 등록 역할도 수행. 하위 컴포넌트인 PrizeModal의 부모

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import PrizeModal from './PrizeModal';
import PrizedList from './PrizedList';

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

//수상 작품 리스트가 존재할 때 등록 버튼을 감싸는 div.
const ListExistButtonHolder = styled.div`
  margin: 1rem 0;
  text-align: right;
`;

//스크롤 일관성을 위해 빈 공간 삽입
const EmptySpace = styled.div`
  width: 100%;
  height: 4rem;
`;

//parameter onModal: 실질적인 등록 작업 수행. 아직 미구현
const PrizedUpdater = ({
  contents,
  onChangePriority,
  isPrizeEmpty,
  prized,
  post,
  user,
}) => {
  //PrizeModal을 보여줄지 여부를 저장.
  const [modal, setModal] = useState(false);
  //수상작 등록 클릭 시
  const onModalClick = () => {
    setModal(true);
  };

  //현재 로그인한 유저가 관리자 또는 작성자일 경우에 true.
  const isOwnPost = () => {
    let ownPostResult =
      user && post && (user.role === 'admin' || user._id === post.user._id);
    console.log('ownPostResult: ', ownPostResult);
    return ownPostResult;
  };

  return (
    <div>
      <EmptySpace />
      {isPrizeEmpty ? (
        <div>
          {/* 수상 작품 목록이 등록되어있지 않은 경우 */}
          <AlerterHolder>
            <h1>아직 등록된 수상 작품이 없습니다.</h1>
            <p>개최자가 아직 수상 작품을 등록하지 않았습니다.</p>
            {isOwnPost() ? (
              <UpdateButton onClick={onModalClick}>수상 작품 등록</UpdateButton>
            ) : null}
          </AlerterHolder>
          <EmptySpace />
          <EmptySpace />
          <EmptySpace />
        </div>
      ) : (
        <div>
          {/* 수상 작품 목록이 존재하는 경우 */}
          {isOwnPost() ? (
            <ListExistButtonHolder>
              <UpdateButton onClick={onModalClick}>수상 목록 수정</UpdateButton>
            </ListExistButtonHolder>
          ) : null}
          <PrizedList prized={prized} />
          <EmptySpace />
          <EmptySpace />
        </div>
      )}
      <PrizeModal
        contents={contents}
        visible={modal}
        onChangePriority={onChangePriority}
      />
    </div>
  );
};

export default PrizedUpdater;
