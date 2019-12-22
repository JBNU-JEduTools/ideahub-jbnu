import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import CommentsViewer from './CommentsViewer';
import CommentsWriter from './CommentsWriter';

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[5]};
  margin-top: 3rem;
  padding-top: 1rem;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 20px;
  }
`;

const Comments = () => {
  return (
    <Wrapper>
      <h2 style={{ fontWeight: '500' }}>Comments</h2>
      <CommentsViewer
        comments={[
          {
            username: 'sangseok',
            commentBody: '와우 정말 멋져요',
            commentPublishDate: Date.now,
          },
          {
            username: 'ddang',
            commentBody: '대단해요!',
            commentPublishDate: Date.now,
          },
          {
            username: 'deokbae',
            commentBody: '너무 멋있어요',
            commentPublishDate: Date.now,
          },
        ]}
      />
      <CommentsWriter />
    </Wrapper>
  );
};

export default Comments;
