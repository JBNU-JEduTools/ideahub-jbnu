import React from 'react';
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import TopSpace from '../components/common/TopSpace';
import ContentEditorContainer from '../containers/contentWrite/ContentEditorContainer';
import ContentWriteActionButtonsContainer from '../containers/contentWrite/ContentWriteActionButtonsContainer';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';

const Spacer = styled.div`
  height: 2rem;
`;

const ContentWritePage = () => {
  return (
    <>
      <Header />
      <Spacer />
      <TopSpace title="작품 등록" description="등록할 작품 정보 입력" />
      <Responsive>
        <ContentEditorContainer />
        <ContentWriteActionButtonsContainer />
      </Responsive>
      <BottomInfo />
    </>
  );
};

export default ContentWritePage;
