import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import palette from '../../lib/styles/palette';

const BottomInfoBlock = styled.div`
  width: 100%;
  height: 200px;
  background: #3e4149;
  margin-top: 5rem;
  position: static;
  bottom: 0;
`;

const InfoWrapper = styled(Responsive)`
  color: ${palette.gray[6]};
  padding: 2rem 1rem;
`;

const BottomInfo = () => {
  return (
    <BottomInfoBlock>
      <InfoWrapper>
        전북대학교 IDEA HUB
        <br />
        <div className="footerInfo">
          <a href="http://www.jbnu.ac.kr/kor/?menuID=203" target="_blank">개인정보처리방침</a>
          <a href="http://www.jbnu.ac.kr/kor/?menuID=206" target="_blank"className="footerInfoList">이메일 무단수집거부</a>
          <a href="https://cse.jbnu.ac.kr/cse/6750/subview..do" target="_blank" className="footerInfoList">찾아오시는 길</a>
        </div>
        <div className="footerInfo">
        [54896] 전라북도 전주시 덕진구 백제대로 567 전북대학교 컴퓨터공학부
        </div>
        <div className="footerInfo">
        @Contributors : 
        <a href="https://github.com/khoon-git" target="_blank" className="footerInfoContributor">dangsal</a>
        <a href="https://github.com/khoon-git" target="_blank" className="footerInfoContributor">khoon-git</a>
        <a href="https://github.com/khoon-git" target="_blank" className="footerInfoContributor">Kimjaeyeon518 </a>
        </div>
      </InfoWrapper>
    </BottomInfoBlock>
  );
};

export default BottomInfo;
