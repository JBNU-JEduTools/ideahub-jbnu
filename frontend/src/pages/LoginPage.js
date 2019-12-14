import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';

const Spacer = styled.div`
  height: 4rem;
`;

const LoginPage = () => {
  return (
    <>
      <HeaderContainer />
      <TopSpace title="로그인" />
      <Spacer />
      <AuthTemplate>
        <LoginForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
