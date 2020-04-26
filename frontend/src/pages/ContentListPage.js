import React from 'react';
import TopSpace from '../components/common/TopSpace';
import ContentListContainer from '../containers/contents/ContentListContainer';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';
import PaginationContainer from '../containers/contents/PaginationContainer';

const Spacer = styled.div`
  height: 2rem;
`;

const ContentListPage = () => {
  return (
    <div style={{ backgroundColor: palette.gray[0] }}>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentListContainer />
      <PaginationContainer />
      <ToTopButton />
      <BottomInfo />
    </div>
  );
};

export default ContentListPage;
