import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import HeaderContainer from '../containers/common/HeaerContainer';
import BottomInfo from '../components/common/BottomInfo';

const Spacer = styled.div`
  height: 2rem;
`;

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer />
      <Spacer />
      <TopSpace title="회원가입" />
      <Spacer />
      <Spacer />
      <AuthTemplate>
        <RegisterForm type="register" />
      </AuthTemplate>
      <BottomInfo />
    </>
  );
};

export default RegisterPage;
