import React from 'react';
import TopSpace from '../components/common/TopSpace';
import ContentListContainer from '../containers/contents/ContentListContainer';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const ContentListPage = () => {
  return (
    <div style={{ backgroundColor: palette.gray[1] }}>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentListContainer />
      <ToTopButton />
      <BottomInfo />
    </div>
  );
};

export default ContentListPage;
