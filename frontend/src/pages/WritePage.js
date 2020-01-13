import React from 'react';
import Responsive from '../components/common/Responsive';
import TopSpace from '../components/common/TopSpace';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import EditorContainer from '../containers/write/EditorContainer';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';

const Spacer = styled.div`
  height: 2rem;
`;

const WritePage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="대회 개최" description="개최할 대회 정보 입력" />
      <Responsive>
        <EditorContainer />
        <WriteActionButtonsContainer />
      </Responsive>
      <BottomInfo />
    </>
  );
};

export default WritePage;
