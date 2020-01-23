import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 1.25rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <Button
        onClick={onPublish}
        toDefaultColor
        style={{ width: '10rem', height: '3rem' }}
      >
        {isEdit ? '수정' : '등록'}
      </Button>
      <Button onClick={onCancel} style={{ width: '10rem', height: '3rem' }}>
        취소
      </Button>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
