import React from 'react';
import BottomInfo from '../components/common/BottomInfo';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import MainSlideShow from '../components/main/MainSlideShow';
import MainViewerContainer from '../containers/main/MainViewerContainer';
import MainSubMenu from '../components/main/MainSubMenu';
import ToTopButton from '../components/common/ToTopButton';

const MainPage = () => {
  return (
    <div>
      <HeaderWithHamburger />
      <MainSlideShow />
      <MainSubMenu />
      <MainViewerContainer />
      <ToTopButton />
      <BottomInfo />
    </div>
  );
};

export default MainPage;
