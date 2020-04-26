import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const RecommendedPostsHolder = styled.div`
  background: white;
  width: 30%;
  height: 50%;
  margin-left: 1.5rem;
  padding: 1rem;
  color: ${palette.gray[5]};
  p {
    font-size: 0.8rem;
    margin: 0;
  }
  @media (max-width: 1152px) {
    display: none;
  }
`;

const RecommendedPostItemLink = styled(Link)`
  display: flex;
`;
const RecommendedPostItemHolder = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border-left: 2px solid ${palette.mainColor};
  padding: 0 0.5rem;
  p {
    font-size: 1rem;
    color: ${palette.gray[7]};
  }
  .subInfo {
    font-size: 0.8rem;
    color: ${palette.gray[5]};
  }
  &:hover {
    background: ${palette.gray[0]};
  }
`;

const RecommendedPostItem = ({ postItem }) => {
  const { user, _id, title, date } = postItem;
  return (
    <RecommendedPostItemLink to={`/@${user.username}/${_id}`}>
      <RecommendedPostItemHolder>
        <p>{title.length > 12 ? `${title.substring(0, 12)}...` : title}</p>
        <p className="subInfo">{`일시: ${date}`}</p>
      </RecommendedPostItemHolder>
    </RecommendedPostItemLink>
  );
};

const RecommendedPosts = ({ posts }) => {
  //최근 등록된 대회 중 접수중인 대회들을 보여줌.
  return (
    <RecommendedPostsHolder>
      <p>추천 대회</p>
      {posts.map((item) => {
        return <RecommendedPostItem postItem={item} />;
      })}
    </RecommendedPostsHolder>
  );
};

export default RecommendedPosts;
