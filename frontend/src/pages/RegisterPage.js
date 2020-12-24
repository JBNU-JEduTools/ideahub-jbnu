import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import ToTopButton from '../components/common/ToTopButton';

const Spacer = styled.div`
  height: 2rem;
`;

const RegisterPage = () => {
  return (
    <>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="회원가입" />
      <Spacer />
      <Spacer />
      <AuthTemplate>
        <RegisterForm type="register" />
      </AuthTemplate>
      <ToTopButton />
      <BottomInfo />
    </>
  );
};

export default RegisterPage;
