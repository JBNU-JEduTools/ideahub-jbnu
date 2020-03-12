import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const TopBlock = styled.div`
  width: 100%;
  background: #3e4149;
`;

const Wrapper = styled(Responsive)`
  height: 8rem;
  //children element를 가로로 배열
  display: flex;
  align-items: center;
  .menuTitle {
    font-size: 2rem;
    color: white;
  }
  .menuDiscription {
    padding-top: 1rem;
    margin-left: 1rem;
    font-size: 0.8rem;
    display: flex;
    color: white;
  }
  @media (max-width: 1152px) {
    .menuTitle {
      font-size: 1.5rem;
    }
    .menuDiscription {
      font-size: 0.5rem;
    }
  }
  @media (max-width: 468px) {
    .menuTitle {
      font-size: 1.2rem;
    }
  }

  div {
    font-weight: 200;
  }
`;

const TopSpace = props => {
  return (
    <TopBlock>
      <Wrapper>
        <div className="menuTitle">{props.title}</div>
        <div className="menuDiscription">{props.description}</div>
      </Wrapper>
    </TopBlock>
  );
};

export default TopSpace;
