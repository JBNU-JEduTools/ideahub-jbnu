import React from 'react';
import HeaderContainer from '../containers/common/HeaerContainer';
import MainViewer from '../components/main/MainViewer';
import MainTitle from '../components/main/MainTitle';
import BottomInfo from '../components/common/BottomInfo';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <MainTitle />
      <MainViewer />
      <BottomInfo />
    </>
  );
};

export default MainPage;
