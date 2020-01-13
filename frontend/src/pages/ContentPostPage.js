import React from 'react';
import TopSpace from '../components/common/TopSpace';
import ContentViewerContainer from '../containers/content/ContentViewerContainer';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';

const Spacer = styled.div`
  height: 2rem;
`;

const ContentPostPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentViewerContainer />
      <BottomInfo />
    </>
  );
};

export default ContentPostPage;
