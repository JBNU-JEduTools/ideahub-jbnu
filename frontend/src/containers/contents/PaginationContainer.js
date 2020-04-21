import React from 'react';
import Pagination from '../../components/contents/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location }) => {
  const { lastPage, contents, loading } = useSelector(
    ({ contents, loading }) => ({
      lastPage: contents.lastPage,
      contents: contents.contents,
      loading: loading['contents/LIST_CONTENTS'],
    }),
  );

  if (!contents || loading) return null;

  const { taggedContestID, username, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      taggedContestID={taggedContestID}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);
