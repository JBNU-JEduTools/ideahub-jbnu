import React from 'react';
import TopSpace from '../components/common/TopSpace';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const AboutPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="About Us" description="서비스 소개" />
      <div className="aboutInfo">
        <p className="aboutInfoL1">전북대학교 컴퓨터 공학부에서 주최하는 대회( 아이디어 해커톤 , 작품경진대회, 게임경진대회) 에서 나온 아이디어와 작품을 모아서 기록하는 서비스</p>
        <ul className="aboutReason">필요한 이유:
          <li className="aboutReasonL">1. 매년 비슷한 작품이 나오는걸 방지</li>
          <li className="aboutReasonL">2. 나온작품들에 대한 관심이 생길시 팀장과 깃허브를 통한 연결 </li>
          <li className="aboutReasonL">...</li>
        </ul>
        <p className="aboutInfoL2">이 서비스는 오픈소스로 개발 중이며, 누구든 참여 할 수 있습니다.</p>
        <p className="aboutInfoL3">깃허브 주소: <a href="https://github.com/hyunchan-park/ideahub-jbnu" target="_blank">https://github.com/hyunchan-park/ideahub-jbnu</a></p>
      </div>
      <ToTopButton />
      <BottomInfo />
    </>
  );
};

export default AboutPage;
