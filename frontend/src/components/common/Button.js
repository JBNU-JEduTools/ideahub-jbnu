import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  font-size: 1rem;
  font-weigt: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background-color: ${palette.gray[7]};
  &:hover {
    background: ${palette.gray[9]};
  }

  &:disabled{
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.fullHeight &&
    css`
      height: 100%;
      padding-top: 1.25rem;
    `}
  ${props =>
    props.toDefaultColor &&
    css`
      background-color: #ff814b;
      &:hover {
        background-color: #eb713d;
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
  display: flex;
`;

const Button = props => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};
export default Button;
