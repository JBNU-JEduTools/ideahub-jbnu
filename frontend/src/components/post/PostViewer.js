import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import PostInfoSide from './PostInfoSide';
import ErrorNotifier from '../common/ErrorNotifier';
import Disqus from 'disqus-react';
import SubMenuBar from './SubMenuBar';
import NoPrizedAlerter from './NoPrizedAlerter';

//대회 정보와 수상 작품 목록을 보여주기 위한 responsive 블록
const PostViewerBlock = styled(Responsive)`
  width: 852px;

  @media (max-width: 1152px) {
    width: 100%;
  }
  @media (max-width: 468px) {
    width: 100%;
  }
`;

const PrizeListBlock = styled(Responsive)``;

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

  const { title, category, status, date, place, description, prized } = post;

  const isOwnPost = () => {
    let ownPostResult = user && post && user._id === post.user._id;
    console.log('ownPostResult: ', ownPostResult);
    return ownPostResult;
  };

  const disqusShortname = 'ideahub-test'; //found in your Disqus.com dashboard

  //현재 URL
  const currentURL = window.location.href;
  //currentURL 을 '/'을 기준으로 나눈 배열.
  const splitedURL = currentURL.split('/');
  //현재 URL의 마지막에 'prized'가 붙어있으면 true, 아니면 false
  const isPrizePage = splitedURL[splitedURL.length - 1] === 'prized';
  //현재 대회에 수상 작품 목록이 등록되어있지 않으면 true
  const isPrizeEmpty = prized.length === 0;

  return (
    <div>
      <SubMenuBar post={post} />
      {//현재 URL의 끝에 prized가 붙어있으면 수상 목록 페이지를 보여주고, 아니면 대회 정보 페이지 보여주기
      isPrizePage ? (
        <div>
          {isPrizeEmpty ? (
            <PrizeListBlock>
              <NoPrizedAlerter />
            </PrizeListBlock>
          ) : (
            <PostViewerBlock>
              <p>수상 작품이 등록되어있습니다.</p>
            </PostViewerBlock>
          )}
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default PostViewer;
