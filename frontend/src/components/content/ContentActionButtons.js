import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

const ContentActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
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

const ContentActionButtons = ({ onEdit, onRemove }) => {
  //react hook 참조.
  //modal은 AskRemoveModal 창을 띄울지 말지 결정.
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <div>
      <ContentActionButtonsBlock>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      </ContentActionButtonsBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
};

export default ContentActionButtons;
