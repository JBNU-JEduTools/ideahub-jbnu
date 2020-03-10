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
  }
`;

const StarBox = styled.div`
  display: flex;
  border: solid 1px;
  border-radius: 5px;
  height: 2rem;
  border-color: ${palette.gray[5]};
  button {
    background: ${palette.gray[2]};
    fontsize: 16px;
    color: black;
    &:hover {
      background: ${palette.gray[3]};
    }
  }
  div {
    font-size: 16px;
    padding: 0.2rem 0.5rem;
  }
`;

const ContentViewer = ({ content, error, loading, actionButtons, user }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <ErrorNotifier
          errorTitle="404 Not Found"
          errorMessage="이런! 강아지가 페이지를 물고 도망갔나봐요"
        />
      );
    }
    return (
      <ErrorNotifier
        errorTitle="Cannot find page"
        errorMessage="이런! 강아지가 페이지를 물고 도망갔나봐요"
      />
    );
  }

  if (loading || !content) {
    return null;
  }

  const { title, body, taggedContest, videoURL, team, status, stars } = content;

  //자신이 content를 작성한 user인지 검사
  const isOwnContent = () => {
    let ownContentResult = user && content && user._id === content.user._id;
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
            <StarBox>
              <Button>star</Button>
              <div>{stars}</div>
            </StarBox>
          </TitleArea>
        </ContentHead>

        {//자신이 작성한 작품이어야 버튼을 보여줌
        isOwnContent() ? actionButtons : <div />}

        <iframe
          width="100%"
          height="480"
          src={videoURL}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <ContentContent
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
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
