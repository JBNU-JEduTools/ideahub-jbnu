import React from 'react';
import styled from 'styled-components';

//hamburger menu
const ButtonBody = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  box-sizing: border-box;
  .toggle-button__line {
    width: 30px;
    height: 2px;
    background: white;
  }
  @media (min-width: 1153px) {
    display: none;
  }
`;

const ToggleButton = props => (
  <ButtonBody onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </ButtonBody>
);

export default ToggleButton;
