import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';
import { setContestName, resetContestName } from '../../modules/contestName';
import { setInitialState } from '../../modules/contentWrite';

//react-router-dom을 사용해 라우트로 설정한 컴포넌트는 3가지의 props를 전달받음.
//match: 어떤 라우트에 매칭되었는지에 대한 정보.
//history: push, replace를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 가능.
const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  //post === state.post.post, error === state.post.error, ...
  const { post, error, loading, user, contestName, contentsList } = useSelector(
    ({ post, loading, user, contestName, contentsList }) => ({
      //state.post, state.loading, state.user
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
      contestName: contestName.contestName,
      contentsList: post.contentsList,
    }),
  );

  //대회 정보 로딩이 끝난 후, contestName 상태와 현재 포스트의 제목이 다른 경우 contestName 상태를 업데이트.
  if (post && loading && contestName !== post.title) {
    dispatch(setContestName(post.title));
  }

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
      //write 페이지로 넘어가도 유지해야 하는데, 초기화 되어버림.
      //dispatch(resetContestName());
    };
  }, [dispatch, postId]);

  const onWrite = () => {
    //☆★☆★☆★☆★☆★수정 시에도 작동함..
    dispatch(setInitialState(contestName));
    history.push('/contentwrite');
  };

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/postlist');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      user={user}
      actionButtons={<PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
      contestName={contestName}
      onWrite={onWrite}
      contentsList={contentsList}
    />
  );
};

export default withRouter(PostViewerContainer);
