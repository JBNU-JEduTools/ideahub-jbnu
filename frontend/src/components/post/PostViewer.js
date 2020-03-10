import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import PostInfoSide from './PostInfoSide';
import ErrorNotifier from '../common/ErrorNotifier';
import Disqus from 'disqus-react';

const PostViewerBlock = styled(Responsive)`
  width: 852px;

  @media (max-width: 1152px) {
    width: 100%;
  }
  @media (max-width: 468px) {
    width: 100%;
  }
`;

const PostHead = styled.div`
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

const PostContent = styled.div`
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

const PostViewer = ({ post, user, error, loading, actionButtons }) => {
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

  if (loading || !post) {
    return null;
  }

  const { title, category, status, date, place, description } = post;

  const isOwnPost = () => {
    let ownPostResult = user && post && user._id === post.user._id;
    console.log('ownPostResult: ', ownPostResult);
    return ownPostResult;
  };

  const disqusShortname = 'ideahub-test'; //found in your Disqus.com dashboard

  return (
    <ContentsHolder>
      <PostViewerBlock>
        <PostHead>
          <SubContents>카테고리 #{category}</SubContents>
          <h1>{title}</h1>
        </PostHead>
        {isOwnPost() ? actionButtons : <div />}
        <PostContent
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <Disqus.DiscussionEmbed shortname={disqusShortname} />
      </PostViewerBlock>
      <PostInfoSide
        title={title}
        category={category}
        status={status}
        date={date}
        place={place}
        user={user}
      />
    </ContentsHolder>
  );
};

export default PostViewer;
