import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';
import { setContestName } from '../../modules/contestName';

//react-router-dom을 사용해 라우트로 설정한 컴포넌트는 3가지의 props를 전달받음.
//match: 어떤 라우트에 매칭되었는지에 대한 정보.
//history: push, replace를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 가능.
const PostViewerContainer = ({ match, history }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  //post === state.post.post, error === state.post.error, ...
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user, contestName }) => ({
      //state.post, state.loading, state.user
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    //console.log('post: ', post);
    //대회 페이지가 로드되었을 때, 스토어의 contestName상태를 업데이트.
    //☆★☆★☆★☆★☆★☆★☆★☆★☆★ 수정
    dispatch(setContestName('asdf'));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

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
    />
  );
};

export default withRouter(PostViewerContainer);
