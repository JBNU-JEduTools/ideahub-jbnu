import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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

const SideDrawer = () => (
  <SideDrawerBlock>
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
);

export default SideDrawer;
