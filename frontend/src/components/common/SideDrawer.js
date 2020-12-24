import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Wrapper = styled.div`
  .side-drawer {
    transform: translateX(100%);
    transition: transform 300ms ease;
  }

  .open {
    transform: translateX(0);
  }
`;

const SideDrawerBlock = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }
  li {
    margin: 0.5rem 0;
    a:hover {
      color: ${palette.gray[7]};
    }
  }
`;

//너비에 따라 헤더 네비게이터 햄버거 매뉴로 구현
const SideDrawer = ({ show }) => {
  let drawerClasses = ['side-drawer'];
  if (show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  return (
    <Wrapper>
      <SideDrawerBlock className={drawerClasses}>
        <ul>
          <li>
            <a href="/postlist">대회 목록</a>
          </li>
          <li>
            <a href="/contentlist">작품 목록</a>
          </li>
          <li>
            <a href="/register">회원가입</a>
          </li>
          <li>
            <a href="/login">로그인</a>
          </li>
        </ul>
      </SideDrawerBlock>
    </Wrapper>
  );
};

export default SideDrawer;
