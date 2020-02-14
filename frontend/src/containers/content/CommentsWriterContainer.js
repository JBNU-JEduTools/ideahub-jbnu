import React, { useEffect } from 'react';
import CommentsWriter from '../../components/content/CommentsWriter';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import submitComment from '../../modules/content';

const CommentsWriterContainer = ({ history, onChangeCommentBody }) => {
  const dispatch = useDispatch();
  const { content, user } = useSelector(({ content, user }) => ({
    content: content,
    user: user.user,
  }));

  const onAddComment = () => {
    if (user) {
      // console.log(content.content);
      // console.log(user.username);
      // console.log(content.commentBody);
      alert('댓글 작성 완료');
      dispatch(
        submitComment({
          content: content.content,
          commentUsername: user.username,
          commentBody: content.commentBody,
        }),
      );
    } else {
      alert('로그인이 필요한 서비스 입니다.');
      history.push('/login');
    }
  };
  return (
    <CommentsWriter
      onAddComment={onAddComment}
      onChangeCommentBody={onChangeCommentBody}
    />
  );
};

export default withRouter(CommentsWriterContainer);
