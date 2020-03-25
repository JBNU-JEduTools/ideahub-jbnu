import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const PostInfoSideBlock = styled.div`
  width: 300px;
  border: 1px solid ${palette.gray[4]};
  padding-top: 3rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1152px) {
    width: 100%;
  }
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

//비활성화 된 버튼
const FakeButton = styled.div`
  width: 100%;
  background: ${palette.gray[8]};
  color: white;
  border: none;
  font-size: 1rem;
  font-weigt: bold;
  padding: 0.85rem 1rem;
  text-align: center;
  margin: 0.2rem 0;
  margin-bottom: 0.2rem;
`;

const PostInfoSide = ({
  title,
  category,
  status,
  date,
  place,
  user,
  onWrite,
}) => {
  //유저와 대회 상태에 따라 작품 등록 버튼을 활성화할지 결정.
  //결과에 따라 활성/비활성화된 버튼을 리턴함.
  const isAllowed = () => {
    //로그인 된 상태
    if (user) {
      if (user.role === 'admin' || user.role === 'writer') {
        return (
          <Button toDefaultColor fullWidth onClick={onWrite}>
            작품 등록
          </Button>
        );
      } else {
        return <FakeButton>등록 권한이 없습니다</FakeButton>;
      }
    } else {
      if (status === '접수중')
        return <FakeButton>등록 시 로그인이 필요합니다</FakeButton>;
      else return <FakeButton>접수가 마감되었습니다</FakeButton>;
    }
  };

  return (
    <Wraper>
      <StyledTextContainer summary>Summary</StyledTextContainer>
      <PostInfoSideBlock>
        <div>
          <StyledTextContainer
            style={{
              fontSize: '0.8rem',
              color: palette.gray[6],
              marginBottom: '5px',
            }}
          >
            {category}
          </StyledTextContainer>
          <StyledTextContainer style={{ fontSize: '1.2rem' }}>
            {title}
          </StyledTextContainer>
          <StatusBox>{status}</StatusBox>
          <StyledTextContainer>대회 일정 : {date}</StyledTextContainer>
          <StyledTextContainer>장소 : {place}</StyledTextContainer>
        </div>
      </PostInfoSideBlock>

      {isAllowed()}
      <Button
        to={`/contentlist?taggedContest=${title}`}
        toDefaultColor
        fullWidth
      >
        작품 목록
      </Button>
    </Wraper>
  );
};

export default PostInfoSide;
