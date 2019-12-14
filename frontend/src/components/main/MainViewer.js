import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import mainImg from '../../images/main.png';

const MainViewerBlock = styled(Responsive)`
  margin-top: 3rem;
  text-align: center;
`;

const StaredWorks = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const StaredWorksWrapper = styled.div`
  display: flex;
`;

const StaredWorkItem = styled.div`
  padding: 2rem;
  margin: 0.5rem;
  border: 1px solid ${palette.gray[5]};
  width: 300px;
  height: 400px;
  h1 {
    font-size: 30px;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 25px;
    padding-bottom: 1rem;
    color: #ff4e50;
  }
`;

const StyledH1 = styled.h1`
  font-size: 35px;
  font-weight: lighter;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 1rem;
`;

const Spacer = styled.div`
  height: 16rem;
`;

const FeatureBox = styled.div`
  width: '100%',
  height: '300px',
  background: '#ff9698',
  display: 'flex'
`;

const MainViewer = () => {
  return (
    <>
      <img src={mainImg} alt="main" width="100%" height="380px" />
      <MainViewerBlock>
        <StaredWorks>
          <StyledH1>Stared Works</StyledH1>
          <StaredWorksWrapper>
            <StaredWorkItem>
              <h1>SAMPLE1</h1>
              <h2>27 STARS</h2>
            </StaredWorkItem>
            <StaredWorkItem>
              <h1>SAMPLE2</h1>
              <h2>225 STARS</h2>
            </StaredWorkItem>
            <StaredWorkItem>
              <h1>SAMPLE3</h1>
              <h2>67 STARS</h2>
            </StaredWorkItem>
            <StaredWorkItem>
              <h1>SAMPLE4</h1>
              <h2>45 STARS</h2>
            </StaredWorkItem>
          </StaredWorksWrapper>
        </StaredWorks>
      </MainViewerBlock>

      <Spacer />
    </>
  );
};

export default MainViewer;
