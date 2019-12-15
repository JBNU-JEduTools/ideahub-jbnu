import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import CommentsViewer from './ContentViewer';

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[5]};
  margin-top: 3rem;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 20px;
  }
`;

const Comments = () => {
  return (
    <Wrapper>
      <h2>Comments</h2>
      <CommentsViewer />
    </Wrapper>
  );
};

export default Comments;
