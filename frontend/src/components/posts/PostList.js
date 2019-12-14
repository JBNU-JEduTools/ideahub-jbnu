import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  border-bottom: 1px solid ${palette.gray[4]};
  border-top: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  word-break: break-all;
  padding: 1rem;
  p {
    margin-top: 2em;
  }
`;

const TitleInfoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin-top: 2px;
    font-size: 2rem;
    &:hover {
      color: ${palette.gray[7]};
    }
  }
`;

const StatusBox = styled.div`
  height: 1.6rem;
  color: #ff4e50;
  margin-bottom: 2rem;
  border-radius: 20px;
  border: 1px solid #ff4e50;
  text-align: center;
  width: 5rem;
  font-size: 0.8rem;
  padding-top: 2px;
`;

const PostItem = ({ post }) => {
  const { user, title, category, status, description, _id } = post;
  return (
    <PostItemBlock>
      <div style={{ color: palette.gray[7], marginBottom: '0px' }}>
        #{category}
      </div>
      <TitleInfoHolder>
        <h2>
          <Link to={`/@${user.username}/${_id}`}>{title}</Link>
        </h2>
        <StatusBox>{status}</StatusBox>
      </TitleInfoHolder>

      <p>{description}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>ERROR!</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button toDefaultColor to="/write">
            대회 개최
          </Button>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map(post => {
            return <PostItem post={post} key={post._id} />;
          })}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
