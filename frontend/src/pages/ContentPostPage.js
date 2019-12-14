import React from 'react';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import ContentViewerContainer from '../containers/content/ContentViewerContainer';

const ContentPostPage = () => {
  return (
    <>
      <HeaderContainer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentViewerContainer />
    </>
  );
};

export default ContentPostPage;
