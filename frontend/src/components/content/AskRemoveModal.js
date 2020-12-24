import React from 'react';
import AskModal from '../common/AskModal';

//작품 삭제시 확인 모달창 
const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="작품 삭제"
      description="작품을 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskRemoveModal;
