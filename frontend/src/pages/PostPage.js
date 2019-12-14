import React from 'react';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <TopSpace
        title="대회 정보"
        description="상세 대회 정보 및 참가 작품 목록"
      />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
