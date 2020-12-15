import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const loginOrRegister = {
  login: '로그인',
  register: '회원가입',
  findpw: '비밀번호찾기',
};

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
    font-size: 30px;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.3rem;
  width: 100%;
  &:focus {
    color: &oc-teal-7;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const RegisterText = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #f1404b;
  }
`;
const FindText = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #f1404b;
  }
`;


const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;
// 비밀번호 찾기 컴포넌트 추가
const AuthFormF = ({ type, form, onChange, onSubmit, error }) => {
  const text = loginOrRegister[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디(학번)"
          onChange={onChange}
          value={form.username}
        />
		<StyledInput
		autoComplete="이름"
		name="name"
		placeholder="이름"
		type="name"
		onChange={onChange}
		value={form.password}
	  />
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          type="email"
          onChange={onChange}
          value={form.password}
        />
        <Button fullWidth toDefaultColor style={{ marginTop: '1rem' }}>
          {text}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
      <RegisterText>
        {type === 'login' ? (
          <div>
            아직 아이디가 없으신가요?
            <Link style={{ marginLeft: '0.5rem' }} to="/register">
              회원가입
            </Link>
          </div>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </RegisterText>
    </AuthFormBlock>
  );
};

export default AuthFormF;
