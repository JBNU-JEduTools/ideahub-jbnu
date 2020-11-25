import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import FindPWForm from '../containers/auth/FindPWForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.3rem;
  width: 100%;
  &:focus {
    color: &oc-teal-7;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const FindPWPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="비밀번호찾기" />
      <Spacer />
      <Spacer />
      <AuthTemplate>
        <FindPWForm type="findpw" />
      </AuthTemplate>
      <Spacer />
      <Spacer />
      <Spacer />
      <ToTopButton />
      <BottomInfo />
    </>
  );
};

export default FindPWPage;
