import React from 'react';
import HeaderContainer from '../containers/common/HeaerContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import TopSpace from '../components/common/TopSpace';
const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <TopSpace title="대회 목록" description="대회 목록입니다." />
      <PostListContainer />
    </div>
  );
};

export default PostListPage;
