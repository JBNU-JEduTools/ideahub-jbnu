import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  readContent,
  unloadContent,
  changeComment,
} from '../../modules/content';
import ContentViewer from '../../components/content/ContentViewer';

const ContentViewerContainer = ({ match }) => {
  const { contentId } = match.params;
  const dispatch = useDispatch();
  const { content, error, loading } = useSelector(({ content, loading }) => ({
    content: content.content,
    error: content.error,
    loading: loading['content/READ_CONTENT'],
  }));

  const onChangeComment = useCallback(
    payload => dispatch(changeComment(payload)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(readContent(contentId));
    return () => {
      dispatch(unloadContent());
    };
  }, [dispatch, contentId]);

  return (
    <ContentViewer
      onChangeComment={onChangeComment}
      content={content}
      loading={loading}
      error={error}
    />
  );
};

export default withRouter(ContentViewerContainer);
