import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../../components/administer/Admin';
import { listUsers } from '../../modules/users';
import { updateUsers } from '../../modules/users';

const AdminContainer = ({ location }) => {
  const dispatch = useDispatch();
  //users: 유저 정보 리스트, user: 현재 로그인 한 유저 정보
  const { users, error, loading, user } = useSelector(
    ({ users, loading, user }) => ({
      users: users.users,
      error: users.error,
      loading: loading['users/LIST_USERS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch, location.search]);

  //유저 정보를 받아서, 그 유저의 role을 변경하도록 함.
  //dispatch 되기 전에 새로고침 되어버리는 현상이 발생해서, async-await 구문 삽입으로 해결.
  const toAdmin = async userItem => {
    await dispatch(updateUsers({ _id: userItem._id, role: 'admin' }));
    window.location.reload();
  };
  const toWriter = async userItem => {
    await dispatch(updateUsers({ _id: userItem._id, role: 'writer' }));
    window.location.reload();
  };
  const toVisiter = async userItem => {
    await dispatch(updateUsers({ _id: userItem._id, role: 'visiter' }));
    window.location.reload();
  };

  return (
    <Admin
      loading={loading}
      error={error}
      users={users}
      user={user}
      toAdmin={toAdmin}
      toWriter={toWriter}
      toVisiter={toVisiter}
    />
  );
};

export default withRouter(AdminContainer);
