import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/common/HeaerContainer';
import SideDrawer from './SideDrawer';
import BackgroundBlinder from './BackgroundBlinder';

//너비에 따라 헤더 네비게이터 햄버거 매뉴로 구현
const HeaderWithHamburger = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backgroundBlinderClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let sideDrawer;
  let backgroundBlinder;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer show={sideDrawerOpen} />;
    backgroundBlinder = (
      <BackgroundBlinder click={backgroundBlinderClickHandler} />
    );
  }
  return (
    <div>
      <HeaderContainer drawerClickHandler={drawerToggleClickHandler} />
      {sideDrawer}
      {backgroundBlinder}
    </div>
  );
};

export default HeaderWithHamburger;
