import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import profile1 from '../../images/profile1.png';
import profile2 from '../../images/profile2.png';
import profile3 from '../../images/profile3.png';
import profile4 from '../../images/profile4.png';

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CommentTitle = styled.div`
  display: flex;
  h2 {
    font-weight: 500;
    margin: 2px;
  }
  h3 {
    margin-left: 0.5rem;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${palette.gray[6]};
  }
`;

const ProfileImage = styled.img`
  margin: 0.8rem;
  margin-left: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
`;

const CommentBody = styled.div``;

const profileImages = [profile1, profile2, profile3, profile4];

const profileGenerator = () => {
  const min = Math.ceil(0);
  const max = Math.floor(4);
  const random = Math.floor(Math.random() * (max - min)) + min;
  return profileImages[random];
};

const CommentItem = React.memo(({ comment }) => {
  const { username, commentBody, commentPublishDate } = comment;
  return (
    <ItemWrapper>
      <ProfileImage src={profileGenerator()} alt="ProfileImage" />
      <div>
        <CommentTitle>
          <h2>{username}</h2>
          <h3>{commentPublishDate}</h3>
        </CommentTitle>
        <CommentBody>{commentBody}</CommentBody>
      </div>
    </ItemWrapper>
  );
});

const CommentsList = React.memo(({ comments }) => {
  return (
    <div>
      {comments.map(comment => {
        return <CommentItem comment={comment} />;
      })}
    </div>
  );
});

const CommentsViewer = ({ comments }) => {
  return (
    <div>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsViewer;
