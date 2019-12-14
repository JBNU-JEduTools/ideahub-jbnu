import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const HeaderBlock = styled.div`
  position: fixed;
  margin-bottom: 4rem;
  width: 100%;
  background: #ff4e50;
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
  height: 4rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            CMANAGER
          </Link>
          <div style={{ display: 'flex', height: '100%' }}>
            <Button to="/postlist" fullHeight toDefaultColor>
              대회 목록
            </Button>
            <Button to="/contentlist" fullHeight toDefaultColor>
              작품 정보
            </Button>
            {user ? (
              <div className="topMenu">
                <UserInfo>{user.username + ' 님'}</UserInfo>
                <Button
                  onClick={onLogout}
                  fullHeight
                  style={{ paddingTop: '0px' }}
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
                >
                  회원가입
                </Button>
                <Button to="/login" fullHeight style={{ paddingTop: '1.3rem' }}>
                  로그인
                </Button>
              </div>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
