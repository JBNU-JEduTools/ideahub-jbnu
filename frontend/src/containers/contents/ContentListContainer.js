import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContentList from '../../components/contents/ContentList';
import { listContents } from '../../modules/contents';

const ContentListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { contents, error, loading, user } = useSelector(
    ({ contents, loading, user }) => ({
      contents: contents.contents,
      error: contents.error,
      loading: loading['contents/LIST_CONTENTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listContents({ tag, username, page }));
  }, [dispatch, location.search]);

  return (
    <ContentList
      loading={loading}
      error={error}
      contents={contents}
      showWriteButton={user}
    />
  );
};

export default withRouter(ContentListContainer);
