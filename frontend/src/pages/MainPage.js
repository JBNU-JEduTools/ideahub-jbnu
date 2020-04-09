import React from 'react';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import MainSlideShow from '../components/main/MainSlideShow';
import MainViewerContainer from '../containers/main/MainViewerContainer';
import MainSubMenu from '../components/main/MainSubMenu';

const MainPage = () => {
  return (
    <div>
      <HeaderWithHamburger />
      <MainSlideShow />
      <MainSubMenu />
      <MainViewerContainer />
      <BottomInfo />
    </div>
  );
};

export default MainPage;
