import React from 'react';
import PostListContainer from '../containers/posts/PostListContainer';
import TopSpace from '../components/common/TopSpace';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';
import PaginationContainer from '../containers/posts/PaginationContainer';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const PostListPage = () => {
  return (
    <div>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="대회 목록" description="대회 목록입니다." />
      <PostListContainer />
      <PaginationContainer />
      <ToTopButton />
      <BottomInfo />
    </div>
  );
};

export default PostListPage;
