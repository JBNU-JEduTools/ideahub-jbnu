import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import FeaturedWorks from './FeaturedWorks';
import ErrorNotifier from '../common/ErrorNotifier';

const MainViewerBlock = styled(Responsive)`
  margin-top: 3rem;
  text-align: center;
`;

const Spacer = styled.div`
  height: 16rem;
`;

const MainViewer = ({ contents, loading, error }) => {
  if (error) {
    return (
      <ErrorNotifier
        errorTitle="ERROR!"
        errorMessage="페이지를 로드할 수 없습니다."
      />
    );
  }

  if (!loading && contents) {
    contents.sort(
      //sort의 파라미터로 순서를 정해주는 함수를 넣어줌
      (content1, content2) => {
        return content1.stars <= content2.stars ? 1 : -1;
      },
    );

    //현재 브라우저의 해상도를 저장하는 객체
    let mediaSize = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight,
    };

    //가로 해상도가 1152px 이상일 경우, 768이상일 경우, 그 미만일 경우에 따라 보여지는 featured works 개수 조정.
    //모바일, 태블릿 환경에서 접속 시 featured works로 인해 화면이 뒤덮이는 현상을 방지하기 위함.
    //다만, 데스크탑 브라우저로 접속 후에 해상도를 변경했을 경우, 이미 로드된 featured works 개수가 실시간으로 변하지는 않으므로, 차후 수정이 필요할 수 있음
    if (mediaSize.width > 1152) {
      contents.length = 8;
    } else if (mediaSize.width > 768) {
      contents.length = 6;
    } else {
      contents.length = 4;
    }
  }

  return (
    <>
      <MainViewerBlock>
        {!loading && contents && <FeaturedWorks featuredWorks={contents} />}
      </MainViewerBlock>
      <Spacer />
    </>
  );
};

export default MainViewer;
