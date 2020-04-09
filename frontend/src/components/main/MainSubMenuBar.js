import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const MainSubMenuBarHolder = styled.div`
  display: flex;
  width: 100%;
  height: 12rem;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainSubMenuBarItemHolder = styled(Link)`
  height: 100%;
  width: 50%;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  background-size: 100% auto;
  background-position: center center;
  background-blend-mode: darken;
  transition: 0.5s;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const ContentsHolder = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2.5rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

const MainSubMenuBarItem = ({ menuItem }) => {
  const { title, url, imgUrl } = menuItem;
  return (
    <MainSubMenuBarItemHolder
      to={url}
      style={{ backgroundImage: `url('${imgUrl}')` }}
    >
      <ContentsHolder>
        <h1>{title}</h1>
        <h2>VIEW MORE</h2>
      </ContentsHolder>
    </MainSubMenuBarItemHolder>
  );
};

const MainSubMenuBar = () => {
  //MainSubMenuBar 내용 수정시 아래 배열을 변경하세요
  const menuArray = [
    {
      title: '대회 목록',
      url: '/postlist',
      imgUrl:
        'https://cdn.pixabay.com/photo/2017/10/26/12/34/fantasy-2890925_960_720.jpg',
    },
    {
      title: '작품 정보',
      url: 'contentlist',
      imgUrl:
        'https://cdn.pixabay.com/photo/2017/10/07/15/27/wolf-2826741_960_720.jpg',
    },
  ];

  return (
    <MainSubMenuBarHolder>
      {menuArray.map((item) => {
        return (
          <MainSubMenuBarItem
            menuItem={item}
            style={{ width: 100 / menuArray.length }}
          />
        );
      })}
    </MainSubMenuBarHolder>
  );
};

export default MainSubMenuBar;
