//잘못된 접근 시 나타나는 컴포넌트

import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import errorImage from '../../images/error.png';

//에러 메세지를 감쌈.
const ErrorHoler = styled(Responsive)`
  text-align: center;
  color: ${palette.gray[8]};
  img {
    padding: 3rem;
    margin: auto;
    width: 15rem;
    @media (min-width: 1152px) {
      width: 40%;
    }
  }
  h1 {
    margin-top: 0;
    font-weight: 900;
    font-size: 3rem;
  }
  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const ErrorNotifier = ({ errorTitle, errorMessage }) => {
  return (
    <ErrorHoler>
      <img src={errorImage} alt="errorImage" width="100%" />
      <h1>{errorTitle}</h1>
      <p>{errorMessage}</p>
    </ErrorHoler>
  );
};

export default ErrorNotifier;
