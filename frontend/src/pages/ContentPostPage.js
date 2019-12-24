import React from 'react';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import ContentViewerContainer from '../containers/content/ContentViewerContainer';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';

const Spacer = styled.div`
  height: 2rem;
`;

const ContentPostPage = () => {
  return (
    <>
      <HeaderContainer />
      <Spacer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentViewerContainer />
      <BottomInfo />
    </>
  );
};

export default ContentPostPage;
