import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1152px;
  margin: 0 auto;
  .mainTitle {
    font-size: 3rem;
  }
  .contentItemBlock {
    width: 32%;
  }

  @media (max-width: 1152px) {
    width: 768px;
    .mainTitle {
      font-size: 2rem;
    }
    .contentItemBlock {
      width: 45%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .mainTitle {
      font-size: 1.5rem;
    }
    .contentItemBlock {
      width: 100%;
    }
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
