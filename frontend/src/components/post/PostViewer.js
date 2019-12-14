import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import PostInfoSide from './PostInfoSide';

const PostViewerBlock = styled(Responsive)`
  width: 852px;

  @media (max-width: 852px) {
    width: 468px;
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
`;

const PostViewer = ({ post, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>404! post not found</PostViewerBlock>;
    }
    return <PostViewerBlock>error!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, category, status, date, place, description } = post;

  return (
    <ContentsHolder>
      <PostViewerBlock>
        <PostHead>
          <SubContents>카테고리 #{category}</SubContents>
          <h1>{title}</h1>
        </PostHead>
        <PostContent
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </PostViewerBlock>
      <PostInfoSide
        title={title}
        category={category}
        status={status}
        date={date}
        place={place}
      />
    </ContentsHolder>
  );
};

export default PostViewer;
