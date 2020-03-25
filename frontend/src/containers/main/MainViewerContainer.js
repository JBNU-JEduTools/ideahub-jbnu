import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listContents } from '../../modules/contents';
import MainViewer from '../../components/main/MainViewer';

const MainViewerContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { contents, error, loading } = useSelector(({ contents, loading }) => ({
    contents: contents.contents,
    error: contents.error,
    loading: loading['contents/LIST_CONTENTS'],
  }));
  useEffect(() => {
    const { taggedContest, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listContents({ taggedContest, page }));
  }, [dispatch, location.search]);

  console.log(contents);
  return <MainViewer loading={loading} error={error} contents={contents} />;
};

export default withRouter(MainViewerContainer);
