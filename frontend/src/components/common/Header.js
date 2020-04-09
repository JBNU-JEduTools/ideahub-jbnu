import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import ToggleButton from './ToggleButton';

//기존 색 : #ff4e50
const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.mainColor};
  z-index: 100;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  //children element를 가로로 배열
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.25rem;
    font-weight: 800;
    color: white;
    letter-spacing: 2px;
  }
  .topMenu {
    //children element를 가로로 배열
    display: flex;
    align-items: center;
    height: 100%;
  }
  @media (max-width: 1152px) {
    .innerComponents {
      display: none;
    }
  }
`;

const UserInfo = styled.div`
  height: 100%;
  background-color: ${palette.gray[8]};
  color: white;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 1.3rem;
`;

//Header에 콘텐츠가 가려지지 않도록 삽입
const Spacer = styled.div`
  height: 2rem;
`;

const Header = ({ user, onLogout, drawerClickHandler }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            IDEA HUB
          </Link>
          <div style={{ display: 'flex', height: '100%' }}>
            <Button
              to="/postlist"
              fullHeight
              toDefaultColor
              className="innerComponents"
            >
              대회 목록
            </Button>
            <Button
              to="/contentlist"
              fullHeight
              toDefaultColor
              className="innerComponents"
            >
              작품 정보
            </Button>
            {user ? (
              <div className="topMenu">
                <UserInfo className="innerComponents">
                  {user.username + ' 님'}
                </UserInfo>
                <Button
                  onClick={onLogout}
                  fullHeight
                  style={{ paddingTop: '0px' }}
                  className="innerComponents"
                >
                  로그아웃
                </Button>
              </div>
            ) : (
              <div className="topMenu">
                <Button
                  to="/register"
                  fullHeight
                  style={{ background: palette.gray[8], paddingTop: '1.3rem' }}
                  className="innerComponents"
                >
                  회원가입
                </Button>
                <Button
                  to="/login"
                  fullHeight
                  style={{ paddingTop: '1.3rem' }}
                  className="innerComponents"
                >
                  로그인
                </Button>
              </div>
            )}
          </div>
          <ToggleButton className="responsiveMenu" click={drawerClickHandler} />
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
