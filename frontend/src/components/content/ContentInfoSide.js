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
  @media (max-width: 1152px) {
    width: 100%;
  }
`;
const StyledTextContainer = styled.div`
  color: ${palette.gray[7]}
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  text-align: center;
  ${(props) =>
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
  @media (max-width: 1152px) {
    width: 100%;
    margin: 2rem 0rem;
  }
`;

const StatusBox = styled.div`
  height: 1.6rem;
  color: #ff4e50;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  border: 1px solid #ff4e50;
  text-align: center;
  width: 5rem;
  font-size: 0.8rem;
  padding-top: 2px;
`;
// 작품 정보 나타내줌
const ContentInfoSide = ({
  title,
  taggedContest,
  taggedContestID,
  team,
  status,
  stars,
}) => {
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
