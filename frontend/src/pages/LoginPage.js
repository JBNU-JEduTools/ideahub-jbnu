import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import Header from '../components/common/Header';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';

const Spacer = styled.div`
  height: 4rem;
`;

const LoginPage = () => {
  return (
    <>
      <Header />
      <TopSpace title="로그인" />
      <Spacer />
      <AuthTemplate>
        <LoginForm type="login" />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
