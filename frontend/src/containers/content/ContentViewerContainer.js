import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readContent, unloadContent } from '../../modules/content';
import ContentViewer from '../../components/content/ContentViewer';
import ContentActionButtons from '../../components/content/ContentActionButtons';
import { setOriginalContent } from '../../modules/contentWrite';
import { removeContent } from '../../lib/api/contentPosts';

const ContentViewerContainer = ({ match, history }) => {
  const { contentId } = match.params;
  const dispatch = useDispatch();
  const { content, error, loading, user } = useSelector(
    ({ content, loading, user }) => ({
      content: content.content,
      error: content.error,
      loading: loading['content/READ_CONTENT'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readContent(contentId));
    return () => {
      dispatch(unloadContent());
    };
  }, [dispatch, contentId]);

  const onEdit = () => {
    dispatch(setOriginalContent(content));
    history.push('/contentwrite');
  };

  //작품 삭제 후 메인 페이지로 이동
  const onRemove = async () => {
    try {
      await removeContent(contentId);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ContentViewer
      content={content}
      loading={loading}
      error={error}
      user={user}
      actionButtons={
        <ContentActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(ContentViewerContainer);
