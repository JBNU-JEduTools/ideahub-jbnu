import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';

//배경화면을 위해 responsive div를 감싸는 wrapper
const MainSubMenuBackground = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  overflow: hidden;
`;

//responsive design을 위한 wrapper
const MainSubMenuHolder = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  @media (max-width: 1152px) {
    height: 15rem;
    p {
      display: none;
    }
  }
`;

const SubMenuItemHolder = styled.div`
  width: 18%;
  margin: 3rem 0;
  h1 {
    font-size: 1.125rem;
    margin: 1rem 0;
    font-weight: 1000;
    color: ${palette.gray[8]};
    @media (max-width: 1152px) {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const CircleHolder = styled.div``;

//클릭시 해당 메뉴로 이동하는 원모양 SubMenu 아이템들.
const SubMenuCircle = styled(Link)`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 100%;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  overflow: hidden;
`;

//각각의 SubMenuCircle에 대한 설명을 감싸는 div
const SubMenuItemTitleHolder = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  p {
    font-size: 0.9rem;
    margin: 0;
    color: ${palette.gray[7]};
    @media (max-width: 1152px) {
      display: none;
    }
  }
`;

const MainSubMenuItem = ({ title, body, url, imgUrl }) => {
  return (
    <SubMenuItemHolder>
      <CircleHolder>
        <SubMenuCircle
          to={url}
          style={{ backgroundImage: `url('${imgUrl}')` }}
        ></SubMenuCircle>
      </CircleHolder>
      <SubMenuItemTitleHolder>
        <h1>{title}</h1>
        <p>{body}</p>
      </SubMenuItemTitleHolder>
    </SubMenuItemHolder>
  );
};

const MainSubMenu = () => {
  //MainSubMenu를 변경하고 싶다면, 이 subMenuArray 배열을 수정해주세요.
  const subMenuArray = [
    {
      title: '강아지',
      body: '귀여운 강아지',
      url: '',
      imgUrl:
        'https://cdn.pixabay.com/photo/2019/06/22/14/57/dog-4291715_960_720.jpg',
    },
    {
      title: '고양이',
      body: '귀여운 고양이',
      url: '',
      imgUrl:
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554_960_720.jpg',
    },
    {
      title: '강아지',
      body: '귀여운 강아지',
      url: '',
      imgUrl:
        'https://cdn.pixabay.com/photo/2019/06/22/14/57/dog-4291715_960_720.jpg',
    },
    {
      title: '고양이',
      body: '귀여운 고양이',
      url: '',
      imgUrl:
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554_960_720.jpg',
    },
    {
      title: '강아지',
      body: '귀여운 강아지',
      url: '',
      imgUrl:
        'https://cdn.pixabay.com/photo/2019/06/22/14/57/dog-4291715_960_720.jpg',
    },
  ];
  return (
    <MainSubMenuBackground>
      <MainSubMenuHolder>
        {subMenuArray.map((item) => (
          <MainSubMenuItem
            title={item.title}
            body={item.body}
            url={item.url}
            imgUrl={item.imgUrl}
          />
        ))}
      </MainSubMenuHolder>
    </MainSubMenuBackground>
  );
};

export default MainSubMenu;
