import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const LoginPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="로그인" />
      <Spacer />
      <Spacer />
      <AuthTemplate>
        <LoginForm type="login" />
      </AuthTemplate>
      <Spacer />
      <Spacer />
      <Spacer />
      <ToTopButton />
      <BottomInfo />
    </>
  );
};

export default LoginPage;
