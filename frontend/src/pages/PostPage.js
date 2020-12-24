import React from 'react';
import TopSpace from '../components/common/TopSpace';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const PostPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace
        title="대회 정보"
        description="상세 대회 정보 및 참가 작품 목록"
      />
      <PostViewerContainer />
      <ToTopButton />
      <BottomInfo />
    </>
  );
};

export default PostPage;
