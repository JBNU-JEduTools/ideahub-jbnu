import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listAllContents } from '../../modules/main';
import MainViewer from '../../components/main/MainViewer';

const MainViewerContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { contents, error, loading } = useSelector(({ main, loading }) => ({
    contents: main.allContents,
    error: main.error,
    loading: loading['main/LIST_ALL_CONTENTS'],
  }));
  useEffect(() => {
    // const { taggedContest, page } = qs.parse(location.search, {
    //   ignoreQueryPrefix: true,
    // });
    dispatch(listAllContents());
  }, [dispatch, location.search]);

  console.log(contents);
  return <MainViewer loading={loading} error={error} contents={contents} />;
};

export default withRouter(MainViewerContainer);
