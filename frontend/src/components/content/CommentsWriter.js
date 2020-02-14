import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledTextarea = styled.textarea`
  margin: 2rem 0;
  padding: 1rem;
  border: solid 1px ${palette.gray[5]};
  border-radius: 5px;
  width: 100%;
  height: 7rem;
  background: ${palette.gray[0]};
  font-size: 1rem;
  vertical-align: top;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  color: white;
  padding: 0.5rem 1rem;
  width: 8rem;
  height: 3rem;
  background-color: #ff4e50;
  &:hover {
    background-color: #d63842;
  }
  border: none;
  float: right;
`;

const CommentsWriter = ({ onChangeCommentBody, onAddComment }) => {
  return (
    <form>
      <StyledTextarea
        placeholder="여기에 댓글 입력"
        onChange={onChangeCommentBody}
      ></StyledTextarea>
      <StyledButton onClick={onAddComment}>댓글 작성</StyledButton>
    </form>
  );
};

export default CommentsWriter;
