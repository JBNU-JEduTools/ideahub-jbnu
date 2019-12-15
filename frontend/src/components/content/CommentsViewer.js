import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ItemWrapper = styled.div``;

const CommentTitle = stlyed.div`
  display: flex;
  h2{
    margin: 2px;
  }
  h3{
    font-color: ${palette.gray[4]};
  }
`;

const CommentBody = styled.div``;

const CommentItem = ({ comment }) => {
  const { username, commentBody, commentPublishDate } = comment;
  return (
    <ItemWrapper>
      <CommentTitle>
        <h2>{username}</h2>
        <h3>{commentPublishDate}</h3>
      </CommentTitle>
      <CommentBody>{commentBody}</CommentBody>
    </ItemWrapper>
  );
};

const CommentsViewer = ({ comments, loading, error, showWriteButton }) => {
  return (
    <div>
      {comments.map(comment => {
        return <CommentItem comment={comment} />;
      })}
    </div>
  );
};

export default CommentsViewer;
