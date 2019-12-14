import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readContent, unloadContent } from '../../modules/content';
import ContentViewer from '../../components/content/ContentViewer';

const ContentViewerContainer = ({ match }) => {
  const { contentId } = match.params;
  const dispatch = useDispatch();
  const { content, error, loading } = useSelector(({ content, loading }) => ({
    content: content.content,
    error: content.error,
    loading: loading['content/READ_CONTENT'],
  }));

  useEffect(() => {
    dispatch(readContent(contentId));
    return () => {
      dispatch(unloadContent());
    };
  }, [dispatch, contentId]);

  return <ContentViewer content={content} loading={loading} error={error} />;
};

export default withRouter(ContentViewerContainer);
