import React from 'react';
import TopSpace from '../components/common/TopSpace';
import styled from 'styled-components';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';

const Spacer = styled.div`
  height: 2rem;
`;

const AboutPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="About Us" description="서비스 소개" />
      <BottomInfo />
    </>
  );
};

export default AboutPage;
