import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const ContentInfoSideBlock = styled.div`
  width: 300px;
  border: 1px solid ${palette.gray[4]};
  padding-top: 3rem;
  padding-bottom: 3rem;
  align-items: center;
  justify-content: space-between;
`;
const StyledTextContainer = styled.div`
  color: ${palette.gray[7]}
  margin-bottom: 1rem;
  text-align: center;
  ${props =>
    props.summary &&
    css`
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
      background-color: ${palette.gray[3]};
      height: 3.5rem;
      padding-top: 1rem;
      border-radius: 10px;
    `}
`;

const Wraper = styled.div`
  width: 300px;
  margin-left: 5px;
`;

const StatusBox = styled.div`
  height: 1.6rem;
  color: #ff4e50;
  margin: 1.5rem;
  margin-left: 6.5rem;
  border-radius: 20px;
  border: 1px solid #ff4e50;
  text-align: center;
  width: 5rem;
  font-size: 0.8rem;
  padding-top: 2px;
`;

const ContentInfoSide = ({ title, taggedContest, team, status, stars }) => {
  return (
    <Wraper>
      <StyledTextContainer summary>Summary</StyledTextContainer>
      <ContentInfoSideBlock>
        <div>
          <StyledTextContainer
            style={{
              fontSize: '0.8rem',
              color: palette.gray[6],
              marginBottom: '5px',
            }}
          >
            {taggedContest}
          </StyledTextContainer>
          <StyledTextContainer style={{ fontSize: '1.2rem' }}>
            {title}
          </StyledTextContainer>
          <StatusBox>{status}</StatusBox>
          <StyledTextContainer>팀원 : {team}</StyledTextContainer>
        </div>
      </ContentInfoSideBlock>
    </Wraper>
  );
};

export default ContentInfoSide;
