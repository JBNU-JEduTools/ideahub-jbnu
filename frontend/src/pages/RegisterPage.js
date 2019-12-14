import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';

const Spacer = styled.div`
  height: 4rem;
`;

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer />
      <TopSpace title="회원가입" />
      <Spacer />
      <AuthTemplate>
        <RegisterForm type="register" />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
