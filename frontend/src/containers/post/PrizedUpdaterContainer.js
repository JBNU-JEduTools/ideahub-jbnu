import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PrizedUpdater from '../../components/post/PrizedUpdater';
import { listContentItem } from '../../modules/post';
import { updatePrize } from '../../lib/api/contentPosts';

//react-router-dom을 사용해 라우트로 설정한 컴포넌트는 3가지의 props를 전달받음.
//match: 어떤 라우트에 매칭되었는지에 대한 정보.
//history: push, replace를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 가능.
const PrizedUpdaterContainer = ({
  match,
  history,
  location,
  isPrizeEmpty,
  prized,
}) => {
  const dispatch = useDispatch();

  const { post, contentsList, listError, loading, user } = useSelector(
    ({ post, contentsList, loading, user }) => ({
      post: post.post,
      listError: post.listError,
      loading: loading['post/LIST_CONTENT_ITEM'],
      contentsList: post.contentsList,
      user: user.user,
    }),
  );
  useEffect(() => {
    dispatch(listContentItem(post.title));
  }, [dispatch]);

  //수상 작품 등록 시 select에 변경이 있을 경우 즉시 실행.
  const onChangePriority = ({ content, priority }) => {
    updatePrize({ content, priority });
  };

  return (
    <PrizedUpdater
      contents={contentsList}
      onChangePriority={onChangePriority}
      isPrizeEmpty={isPrizeEmpty}
      prized={prized}
      post={post}
      user={user}
      error={listError}
      loading={loading}
    />
  );
};

export default withRouter(PrizedUpdaterContainer);
