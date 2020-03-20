import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NoPrizedAlerter from '../../components/post/NoPrizedAlerter';
import { listContentItem } from '../../modules/post';

//react-router-dom을 사용해 라우트로 설정한 컴포넌트는 3가지의 props를 전달받음.
//match: 어떤 라우트에 매칭되었는지에 대한 정보.
//history: push, replace를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 가능.
const NoPrizedAlerterContainer = ({ match, history, location }) => {
  const dispatch = useDispatch();

  const { post, contentsList, listError, loading } = useSelector(
    ({ post, contentsList, loading }) => ({
      post: post.post,
      listError: post.listError,
      loading: loading['post/LIST_CONTENT_ITEM'],
      contentsList: post.contentsList,
    }),
  );
  useEffect(() => {
    dispatch(listContentItem(post.title));
  }, [dispatch]);

  //수상 작품 등록 및 저장.
  const onPrizeSave = () => {
    //☆★☆★☆★☆★☆★수정 필요!!!☆★☆★☆★☆★☆★
  };

  return <NoPrizedAlerter contents={contentsList} onPrizeSave={onPrizeSave} />;
};

export default withRouter(NoPrizedAlerterContainer);
