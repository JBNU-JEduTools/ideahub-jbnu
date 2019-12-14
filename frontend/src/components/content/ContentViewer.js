import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import ContentInfoSide from './ContentInfoSide';
import Button from '../common/Button';

const ContentViewerBlock = styled(Responsive)`
  width: 852px;

  @media (max-width: 852px) {
    width: 468px;
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
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
`;

const ContentViewer = ({ content, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <ContentViewerBlock>404! Content not found</ContentViewerBlock>;
    }
    return <ContentViewerBlock>error!</ContentViewerBlock>;
  }

  if (loading || !content) {
    return null;
  }

  const {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    stars,
    comments,
  } = content;

  return (
    <ContentsHolder>
      <ContentViewerBlock>
        <ContentHead>
          <SubContents>#{taggedContest}</SubContents>
          <TitleArea>
            <h1>{title}</h1>
            <Button style={{ fontSize: '16px', borderRadius: '5px' }}>
              {stars}
            </Button>
          </TitleArea>
        </ContentHead>

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
      </ContentViewerBlock>
      <ContentInfoSide
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
