//대회 정보 메뉴 등에서의 세부 메뉴창
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const SubMenuHolder = styled.div`
  background: #3e4149;
`;

const MenuItemHolder = styled(Responsive)`
  height: 3rem;
  display: flex;
`;

const MenuItem = styled(NavLink)`
  height: 100%;
  width: 8rem;
  border: none;
  text-align: center;
  margin-right: 3px;
  background: ${palette.gray[6]};
  color: white;
  //텍스트 horizontal align 가운데 위해
  padding-top: 0.7rem;
`;

const SubMenuBar = ({ post }) => {
  const { user, title, category, status, description, _id } = post;

  //설정한 url 이 활성화 되면 적용되는 스타일
  const activeStyle = {
    height: '100%',
    width: '8rem',
    border: 'none',
    textAlign: 'center',
    marginRight: '3px',
    background: 'white',
    color: 'black',
    //텍스트 horizontal align 가운데 위해
    paddingTop: '0.7rem',
  };
  return (
    <SubMenuHolder>
      <MenuItemHolder>
        <MenuItem
          exact
          to={`/@${user.username}/${_id}`}
          activeStyle={activeStyle}
        >
          대회 정보
        </MenuItem>
        <MenuItem
          to={`/@${user.username}/${_id}/prized`}
          activeStyle={activeStyle}
        >
          수상 작품
        </MenuItem>
      </MenuItemHolder>
    </SubMenuHolder>
  );
};

export default SubMenuBar;
