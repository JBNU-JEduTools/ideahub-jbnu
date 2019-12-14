import React from 'react';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import ContentListContainer from '../containers/contents/ContentListContainer';

const ContentListPage = () => {
  return (
    <>
      <HeaderContainer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentListContainer />
    </>
  );
};

export default ContentListPage;
