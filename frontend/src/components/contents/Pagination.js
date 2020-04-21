import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
  .pageButton {
    border-radius: 5px;
  }
`;

const PageNumber = styled.div``;

const buildLink = ({ username, page, taggedContestID }) => {
  const query = qs.stringify({ taggedContestID, page });
  return username
    ? `/contentlist/@${username}?${query}`
    : `/contentlist/?${query}`;
};

const Pagination = ({ page, lastPage, username, taggedContestID }) => {
  return (
    <PaginationBlock>
      <Button
        className="pageButton"
        disabled={page === 1}
        to={
          page === 1
            ? undefined
            : buildLink({ username, taggedContestID, page: page - 1 })
        }
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        className="pageButton"
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ username, taggedContestID, page: page + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default Pagination;
