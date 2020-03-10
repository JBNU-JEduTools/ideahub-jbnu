import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const UserRoleUpdateButtonsHolder = styled.div`
  margin: 0.5rem 0;
  display: flex;
`;

const ChangeButton = styled.button`
  padding: 0.5rem;
  background: ${palette.mainColor};
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 0.3rem;

  &:hover {
    background: ${palette.mainColorHovered};
  }
`;

const UserRoleUpdateButtons = ({ userItem, toAdmin, toWriter, toVisiter }) => {
  return (
    <UserRoleUpdateButtonsHolder>
      <ChangeButton
        onClick={() => {
          toAdmin({ _id: userItem._id, role: 'admin' });
        }}
      >
        ADMIN
      </ChangeButton>
      <ChangeButton
        onClick={() => {
          toWriter({ _id: userItem._id, role: 'writer' });
        }}
      >
        WRITER
      </ChangeButton>
      <ChangeButton
        onClick={() => {
          toVisiter({ _id: userItem._id, role: 'visiter' });
        }}
      >
        VISITER
      </ChangeButton>
    </UserRoleUpdateButtonsHolder>
  );
};

export default UserRoleUpdateButtons;
