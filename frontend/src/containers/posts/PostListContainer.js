import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts, listRecommendedPosts } from '../../modules/posts';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, recommendedPosts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      recommendedPosts: posts.recommendedPosts,
      error: posts.error,
      loading: loading[('posts/LIST_POSTS', 'posts/LIST_RECOMMENDED_POSTS')],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
    dispatch(listRecommendedPosts());
  }, [dispatch, location.search]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      recommendedPosts={recommendedPosts}
      showWriteButton={
        user && (user.role === 'admin' || user.role === 'writer')
      }
    />
  );
};

export default withRouter(PostListContainer);
