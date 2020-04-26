import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listContentsByStar, listContentsByPrize } from '../../modules/main';
import MainViewer from '../../components/main/MainViewer';

const MainViewerContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { contentsByStar, contentsByPrize, error, loading } = useSelector(
    ({ main, loading }) => ({
      contentsByStar: main.contentsByStar,
      contentsByPrize: main.contentsByPrize,
      error: main.error,
      loading:
        loading[('main/LIST_CONTENTS_BY_STAR', 'main/LIST_CONTENTS_BY_PRIZE')],
    }),
  );
  useEffect(() => {
    // const { taggedContest, page } = qs.parse(location.search, {
    //   ignoreQueryPrefix: true,
    // });
    dispatch(listContentsByStar());
    dispatch(listContentsByPrize());
  }, [dispatch, location.search]);
  return (
    <MainViewer
      loading={loading}
      error={error}
      contentsByStar={contentsByStar}
      contentsByPrize={contentsByPrize}
    />
  );
};

export default withRouter(MainViewerContainer);
