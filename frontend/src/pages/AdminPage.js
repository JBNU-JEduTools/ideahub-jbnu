import React from 'react';
import styled from 'styled-components';
import TopSpace from '../components/common/TopSpace';
import palette from '../lib/styles/palette';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import AdminContainer from '../containers/administer/AdminContainer';

const Spacer = styled.div`
  height: 2rem;
`;

const AdminPage = () => {
  return (
    <div style={{ backgroundColor: palette.gray[1] }}>
      <HeaderWithHamburger />
      <Spacer />
      <TopSpace title="Administer" description="관리자 페이지" />
      <AdminContainer />
      <BottomInfo />
    </div>
  );
};

export default AdminPage;
