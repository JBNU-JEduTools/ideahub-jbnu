import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import RecommendedPosts from './RecommendedPosts';
import { Link } from 'react-router-dom';
import sampleImg from '../../images/cat.png';

const BackgroundHolder = styled.div`
  width: 100%;
  background: ${palette.gray[0]};
  padding: 1rem 0;
`;

const PostListBlock = styled(Responsive)`
  padding-left: 0;
  padding-right: 0;
`;

const ListRecommendedHolder = styled(Responsive)`
  display: flex;
`;

const WritePostButtonWrapper = styled(Responsive)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const PostItemLink = styled(Link)`
  display: flex;
`;

const PostItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${palette.gray[7]};
  border-bottom: 2px solid ${palette.gray[2]};
  width: 100%;
  background: white;
  margin-bottom: 1rem;
  word-break: break-all;
  padding: 2rem 1.5rem;
  p {
    margin: 0;
  }
  h2 {
    font-weight: 500;
  }
`;

const StatusBox = styled.div`
  height: 1.6rem;
  color: #ff4e50;
  border-radius: 20px;
  border: 1px solid #ff4e50;
  text-align: center;
  width: 5rem;
  font-size: 0.8rem;
  padding-top: 2px;
`;

//tag와 statusBox를 포함하는 div
const TagStatusHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  p {
    color: ${palette.gray[5]};
  }
`;

//대회 제목과 설명을 담는 div
const BodyHolder = styled.div`
  margin-bottom: 1.5rem;
  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0
    margin-bottom: 0.5rem;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

//TagStatusHolder와 BodyHolder를 포함하는 div. 샘플 이미지와 수평 배치하기 위해 만듦.
const ContentsHolder = styled.div`
  width: 80%;
  @media (max-width: 1152px) {
    width: 100%;
  }
`;

const SampleImageHolder = styled.div`
  height: 100%;
  width: 18%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1152px) {
    display: none;
  }
`;

const PostItem = ({ post }) => {
  const { user, title, category, status, description, _id } = post;
  return (
    <PostItemLink to={`/@${user.username}/${_id}`}>
      <PostItemBlock>
        <SampleImageHolder>
          <img src={sampleImg} alter="sampleImage" />
        </SampleImageHolder>
        <ContentsHolder>
          <BodyHolder>
            <h2>
              {title.length > 20 ? `${title.substring(0, 20)}...` : title}
            </h2>
            <p>
              {description.length > 80
                ? `${description.substring(0, 70)}...`
                : description}
            </p>
          </BodyHolder>
          <TagStatusHolder>
            {/* <p>#{category}</p> */}
            <StatusBox>{status}</StatusBox>
          </TagStatusHolder>
        </ContentsHolder>
      </PostItemBlock>
    </PostItemLink>
  );
};

const PostList = ({
  posts,
  recommendedPosts,
  loading,
  error,
  showWriteButton,
}) => {
  if (error) {
    return <PostListBlock>ERROR!</PostListBlock>;
  }
  return (
    <BackgroundHolder>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button toDefaultColor to="/write">
            대회 개최
          </Button>
        )}
      </WritePostButtonWrapper>
      <ListRecommendedHolder>
        <PostListBlock>
          {!loading && posts && (
            <div>
              {posts.map((post) => {
                return <PostItem post={post} key={post._id} />;
              })}
            </div>
          )}
        </PostListBlock>
        {!loading && recommendedPosts && (
          <RecommendedPosts posts={recommendedPosts} />
        )}
      </ListRecommendedHolder>
    </BackgroundHolder>
  );
};

export default PostList;
