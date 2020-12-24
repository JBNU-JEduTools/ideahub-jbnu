import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  border-radius: 4px;
  color: ${palette.gray[7]};
  outline: none;
  background: none;
  border: none;
  font-size: 1rem;
  &:hover {
    background: ${palette.gray[0]};
    color: black;
  }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
  //modal : 삭제 창 팝업.
  const [modal, setModal] = useState(false);
  //삭제 버튼 클릭 시
  const onRemoveClick = () => {
    setModal(true);
  };
  //취소 버튼 클릭 시
  const onCancel = () => {
    setModal(false);
  };
  //삭제 확인 버튼 클릭 시
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <div>
      <PostActionButtonBlock>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      </PostActionButtonBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
};

export default PostActionButtons;
