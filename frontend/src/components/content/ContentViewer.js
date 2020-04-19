import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ContentInfoSide from './ContentInfoSide';
import Button from '../common/Button';
import Disqus from 'disqus-react';
import ErrorNotifier from '../common/ErrorNotifier';

const ContentViewerBlock = styled(Responsive)`
  width: 852px;

  @media (max-width: 1152px) {
    width: 100%;
  }
  @media (max-width: 468px) {
    width: 100%;
  }
`;

const ContentHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const SubContents = styled.div`
  color: ${palette.gray[7]};
  margin-bottom: 0.3rem;
`;

const ContentContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};

  img {
    resizemode: contain;
    width: 820px;

    @media (max-width: 852px) {
      width: 468px;
    }
    @media (max-width: 468px) {
      width: 100%;
    }
  }
`;

const ContentsHolder = styled(Responsive)`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 10rem;
  @media (max-width: 1152px) {
    flex-direction: column;
  }
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: 400;
  }
`;

const StarBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 2px;
`;

const StarButton = styled.button`
  width: 12rem;
  height: 100%;
  margin-right: 0.25rem;
  background: ${palette.mainColor};
  padding: 1rem;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  font-weight: 100;
  &:hover {
    background: ${palette.mainColorHovered};
  }
`;

const StarNum = styled.div`
  height: 100%;
  background: ${palette.gray[1]};
  padding: 1rem;
  color: ${palette.gray[6]};
  text-align: center;
  border: 1px solid ${palette.gray[3]};
  border-radius: 2px;
  font-weight: 100;
`;

const ContentViewer = ({
  content,
  error,
  loading,
  actionButtons,
  user,
  onStar,
}) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <ErrorNotifier
          errorTitle="404 Not Found"
          errorMessage="이런! 페이지를 찾을 수 없습니다."
        />
      );
    }
    return (
      <ErrorNotifier
        errorTitle="Cannot find page"
        errorMessage="이런! 페이지를 찾을 수 없습니다."
      />
    );
  }

  if (loading || !content) {
    return null;
  }

  const {
    title,
    body,
    taggedContest,
    taggedContestID,
    videoURL,
    team,
    status,
    stars,
    star_edUser,
    github,
  } = content;

  //현재 유저가 star를 눌렀는지 안눌렀는지.
  const isUnstarButton = () => {
    if (user) {
      //star_edUser에 현재 유저가 존재하면, star 버튼이 unStar 버튼으로 대체되어야 함을 의미.
      const isUnstar = star_edUser.find((item) => item === user._id);
      if (isUnstar) {
        return true;
      } else {
        return false;
      }
    }
  };

  //자신이 content를 작성한 user인지 검사
  const isOwnContent = () => {
    const ownContentResult =
      user &&
      content &&
      (user._id === content.user._id || user.role == 'admin');
    console.log('ownContentResult: ', ownContentResult);
    return ownContentResult;
  };

  const disqusShortname = 'ideahub-test'; //found in your Disqus.com dashboard

  return (
    <ContentsHolder>
      <ContentViewerBlock>
        <ContentHead>
          <SubContents>#{taggedContest}</SubContents>
          <TitleArea>
            <h1>{title}</h1>
          </TitleArea>
        </ContentHead>

        {
          //자신이 작성한 작품이어야 버튼을 보여줌
          isOwnContent() ? actionButtons : <div />
        }

        {videoURL ? (
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${videoURL}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : null}

        <ContentContent
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />

        <StarBox>
          <StarButton onClick={onStar}>
            {isUnstarButton() ? '추천 취소' : '추천하기'}
          </StarButton>
          <StarNum>{stars}</StarNum>
        </StarBox>

        <Disqus.DiscussionEmbed shortname={disqusShortname} />
      </ContentViewerBlock>
      <ContentInfoSide
        className="sideInfo"
        title={title}
        taggedContest={taggedContest}
        status={status}
        team={team}
        stars={stars}
      />
    </ContentsHolder>
  );
};

export default ContentViewer;
