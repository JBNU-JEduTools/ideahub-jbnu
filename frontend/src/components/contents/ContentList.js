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

  margin-left: auto;
  width: 1400px;
  @media (max-width: 1400px) {
    width: 1140px;
    padding-left: auto;
    .contentItemBlock {
      width: 47%;
    }
  }
  @media (max-width: 1152px) {
    width: 768px;
    .contentItemBlock {
      width: 45%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    .mainTitle {
      font-size: 1.5rem;
    }
    .contentItemBlock {
      width: 100%;
    }
  }
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
  min-height: 750px;
  p {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    max-height: 300px;
  }

  h3 {
    margin: 0.1rem 0rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${palette.gray[8]};
  }

  @media (max-width: 1152px) {
    margin-left: 0rem;
    margin-right: 1rem;
    min-height: 700px;
  }
  @media (max-width: 768px) {
    img {
      max-height: 800px;
    }
    min-height: 0px;
  }
`;

const TitleInfoHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 1.5rem 0;
  margin-top: 0.5rem;
  width: 100%;
  h2 {
    font-size: 1.7rem;
    font-weight: 200;
    margin: 0;
  }
  h4 {
    margin: 0;
    font-weight: 100;
    font-size: 1.25rem;
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

const StarBox = styled.div`
  width: 95%;
  border-bottom: 1px solid ${palette.gray[2]};
  margin: auto;
  padding: 0.5rem 0;
`;

const thumbnails = [idea1, idea2, idea3, idea4, idea5, idea6];

const thumbnailGenerator = () => {
  const min = Math.ceil(0);
  const max = Math.floor(6);
  const random = Math.floor(Math.random() * (max - min)) + min;
  return thumbnails[random];
};

const ContentItem = ({ content }) => {
  const { title, taggedContest, status, body, _id, stars } = content;
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
        {title.length > 10 ? <h4>{title}</h4> : <h2>{title}</h2>}
        <StatusBox>{status}</StatusBox>
      </TitleInfoHolder>

      <img src={thumbnailGenerator()} alt="Thubnail Image" />
      <StarBox>
        <h3>⭐ {stars}</h3>
      </StarBox>
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
