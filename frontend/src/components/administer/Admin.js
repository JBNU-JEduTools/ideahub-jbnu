import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ErrorNotifier from '../common/ErrorNotifier';
import UserRoleUpdateButtons from './UserRoleUpdateButtons';

const Wrapper = styled.div`
  background: ${palette.gray[0]};
`;

const UserListHolder = styled(Responsive)``;

const UserItemHolder = styled.div`
  background: white;
  border-radius: 5px;
  padding: 0.1rem 1rem;
  margin: 0.5rem;
`;

const ButtonHoler = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const ChangeRoleButton = styled.button`
  margin: 0.2rem;
  font-size: 1rem;
`;

//유저 하나의 정보를 보여주는 컴포넌트.
const UserItem = ({ userItem, toAdmin, toWriter, toVisiter }) => {
  const { _id, username, role } = userItem;
  return (
    <UserItemHolder>
      <h2>_id: {_id}</h2>
      <h2>username: {username}</h2>
      <h2>role: {role}</h2>
      <ButtonHoler>
        <UserRoleUpdateButtons
          userItem={userItem}
          toAdmin={toAdmin}
          toWriter={toWriter}
          toVisiter={toVisiter}
        />
      </ButtonHoler>
    </UserItemHolder>
  );
};

//여러 유저들의 정보를 리스트로 보여주는 컴포넌트.
const Admin = ({
  users,
  loading,
  error,
  user,
  toAdmin,
  toWriter,
  toVisiter,
}) => {
  if (!user || user.role !== 'admin') {
    const errorTitle = 'Permission Denied';
    const errorMessage = '관리자만 접근할 수 있는 페이지 입니다';
    return (
      <ErrorNotifier errorTitle={errorTitle} errorMessage={errorMessage} />
    );
  }
  if (error) {
    const errorTitle = 'An error found';
    const errorMessage = '에러가 발생했습니다.';
    return (
      <ErrorNotifier errorTitle={errorTitle} errorMessage={errorMessage} />
    );
  }

  //유저 목록을 받아서, 그 개수만큼 UserItem 컴포넌트를 보여줌
  return (
    <Wrapper>
      <UserListHolder>
        {!loading && users && (
          <div>
            {users.map((userItem) => (
              <UserItem
                userItem={userItem}
                key={userItem._id}
                toAdmin={toAdmin}
                toWriter={toWriter}
                toVisiter={toVisiter}
              />
            ))}
          </div>
        )}
      </UserListHolder>
    </Wrapper>
  );
};

export default Admin;
