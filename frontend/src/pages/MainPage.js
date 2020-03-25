import React from 'react';
import HeaderContainer from '../containers/common/HeaerContainer';
import MainViewer from '../components/main/MainViewer';
import MainTitle from '../components/main/MainTitle';
import BottomInfo from '../components/common/BottomInfo';
import SideDrawer from '../components/common/SideDrawer';
import BackgroundBlinder from '../components/common/BackgroundBlinder';
import HeaderWithHamburger from '../components/common/HeaderWithHamburger';
import MainSlideShow from '../components/main/MainSlideShow';
import MainViewerContainer from '../containers/main/MainViewerContainer';

const MainPage = () => {
  return (
    <div>
      <HeaderWithHamburger />
      <MainTitle />
      <MainViewerContainer />
      <BottomInfo />
    </div>
  );
};

export default MainPage;
