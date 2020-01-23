import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import idea1 from '../../images/idea1.png';
import idea2 from '../../images/idea2.png';
import idea3 from '../../images/idea3.png';
import idea4 from '../../images/idea4.png';
import idea5 from '../../images/idea5.png';
import idea6 from '../../images/idea6.png';

const ContentListBlock = styled(Responsive)`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const ContentItemBlock = styled(Link)`
  float: left;
  border: 0px solid ${palette.gray[4]};
  border-radius: 5px;
  margin-bottom: 2rem;
  word-break: break-all;
  background: white;
  color: black;
  margin: 0.5rem;
  box-shadow: -1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  min-height: 620px;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    max-height: 350px;
  }

  @media (max-width: 1152px) {
    margin-left: 0rem;
    margin-right: 1rem;
    min-height: 520px;
  }
  @media (max-width: 768px) {
    img {
      max-height: 800px;
    }
  }
`;

const TitleInfoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  h2 {
    margin-top: 2px;
    font-size: 2rem;
    font-weight: 200;
  }
  @media (max-width: 1152px) {
    h2 {
      font-size: 1.35rem;
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
  @media (max-width: 1152px) {
    width: 4rem;
  }
`;

const thumbnails = [idea1, idea2, idea3, idea4, idea5, idea6];

const thumbnailGenerator = () => {
  const min = Math.ceil(0);
  const max = Math.floor(6);
  const random = Math.floor(Math.random() * (max - min)) + min;
  return thumbnails[random];
};

const ContentItem = ({ content }) => {
  const { title, taggedContest, status, body, _id } = content;
  return (
    <ContentItemBlock className="contentItemBlock" to={`/content/${_id}`}>
      <div
        style={{
          padding: '1rem',
          paddingBottom: '0rem',
          color: palette.gray[6],
        }}
      >
        #{taggedContest}
      </div>
      <TitleInfoHolder>
        <h2>{title}</h2>
        <StatusBox>{status}</StatusBox>
      </TitleInfoHolder>

      <img src={thumbnailGenerator()} alt="Thubnail Image" />
      <p style={{ padding: '1rem', paddingBottom: '0rem', paddingTop: '0rem' }}>
        {body}
      </p>
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
            return (
              <ContentItem
                className="ContentItem"
                content={content}
                key={content._id}
              />
            );
          })}
        </div>
      )}
    </ContentListBlock>
  );
};

export default ContentList;
