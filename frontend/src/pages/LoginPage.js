import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import BottomInfo from '../components/common/BottomInfo';

const Spacer = styled.div`
  height: 2rem;
`;

const LoginPage = () => {
  return (
    <>
      <HeaderContainer />
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
      <BottomInfo />
    </>
  );
};

export default LoginPage;
