import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthFormF from '../../components/auth/AuthFormF';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const FindPWFrom = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'findpw',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, email } = form;
    if([username, email].includes('')) {
      setError('모든 정보를 입력해주세요');
      return;
    }
    dispatch(login({ username, email }));
  };

  useEffect(() => {
    dispatch(initializeForm('findpw'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('존재하지 않는 학번입니다.');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log(e);
      }
    }
  }, [history, user]);

  return (
    <AuthFormF
      type="findpw"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(FindPWFrom);
