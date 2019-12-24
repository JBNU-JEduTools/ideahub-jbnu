import React from 'react';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import ContentListContainer from '../containers/contents/ContentListContainer';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import BottomInfo from '../components/common/BottomInfo';

const Spacer = styled.div`
  height: 2rem;
`;

const ContentListPage = () => {
  return (
    <div style={{ backgroundColor: palette.gray[1] }}>
      <HeaderContainer />
      <Spacer />
      <TopSpace title="작품 정보" description="작품 정보 및 소개" />
      <ContentListContainer />
      <BottomInfo />
    </div>
  );
};

export default ContentListPage;
