import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ToTopButtonHolder = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 5px;
  background: ${palette.mainColor};
  opacity: 0.6;
  transition: 0.3s;
  text-align: center;
  color: white;
  border: none;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const ToTopButton = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ToTopButtonHolder onClick={toTop}>
      ▲<br />
      Top
    </ToTopButtonHolder>
  );
};

export default ToTopButton;
