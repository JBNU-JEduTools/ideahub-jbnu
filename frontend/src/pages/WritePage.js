import React from 'react';
import Header from '../components/common/Header';
import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';

const Spacer = styled.div`
  height: 4rem;
`;

const WritePage = () => {
  return (
    <>
      <Header />
      <TopSpace title="대회 개최" discription="개최할 대회 정보 입력" />
      <Responsive>
        <Editor />
      </Responsive>
    </>
  );
};

export default WritePage;
