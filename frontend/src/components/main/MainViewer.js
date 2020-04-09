import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import FeaturedWorks from './FeaturedWorks';
import ErrorNotifier from '../common/ErrorNotifier';
import PrizedWorks from './PrizedWorks';
import MainSubMenuBar from './MainSubMenuBar';

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

  let featuredWorks = null;
  let prizedWorks = null;

  if (!loading && contents) {
    //star 개수 순으로 작품들을 정렬.
    featuredWorks = contents.sort(
      //sort의 파라미터로 순서를 정해주는 함수를 넣어줌
      (content1, content2) => {
        return content1.stars <= content2.stars ? 1 : -1;
      },
    );
    //수상 우선순위 순으로 작품들을 정렬
    prizedWorks = contents
      //수상 우선순위가 숫자인(수상 목록 안에 있는) 작품들을 filter한 뒤,
      .filter((item) => {
        return !isNaN(item.prizedPlace);
      })
      .sort(
        //우선순위가 높은(숫자 크기가 작은) 작품들을 앞에 보여줌.
        //sort의 파라미터로 순서를 정해주는 함수를 넣어줌
        (content1, content2) => {
          return content1.prizedPlace <= content2.prizedPlace ? -1 : 1;
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
      featuredWorks.length = 8;
      prizedWorks.length = 8;
    } else if (mediaSize.width > 768) {
      featuredWorks.length = 6;
      prizedWorks.length = 6;
    } else {
      featuredWorks.length = 4;
      prizedWorks.length = 4;
    }
  }

  return (
    <>
      {!loading && contents && (
        <div>
          <FeaturedWorks featuredWorks={featuredWorks} />
          <MainSubMenuBar />
          <PrizedWorks prizedWorks={prizedWorks} />
        </div>
      )}
    </>
  );
};

export default MainViewer;
