import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const ContentListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WriteContentButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ContentItemBlock = styled.div`
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

const ContentItem = ({ content }) => {
  const { title, taggedContest, status, body, _id } = content;
  return (
    <ContentItemBlock>
      <div style={{ color: palette.gray[7], marginBottom: '0px' }}>
        #{taggedContest}
      </div>
      <TitleInfoHolder>
        <h2>
          <Link to={`/content/${_id}`}>{title}</Link>
        </h2>
        <StatusBox>{status}</StatusBox>
      </TitleInfoHolder>

      <p>{body}</p>
    </ContentItemBlock>
  );
};

const ContentList = ({ contents, loading, error, showWriteButton }) => {
  if (error) {
    return <ContentListBlock>ERROR!</ContentListBlock>;
  }
  return (
    <ContentListBlock>
      {!loading && contents && (
        <div>
          {contents.map(content => {
            return <ContentItem content={content} key={content._id} />;
          })}
        </div>
      )}
    </ContentListBlock>
  );
};

export default ContentList;
