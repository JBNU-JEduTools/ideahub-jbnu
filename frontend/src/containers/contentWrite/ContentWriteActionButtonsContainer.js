import React, { useEffect } from 'react';
import ContentWriteActionButtons from '../../components/contentWrite/ContentWriteActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { contentWritePost, updateContent } from '../../modules/contentWrite';

const ContentWriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    content,
    contentError,
    originalContentId,
  } = useSelector(({ contentWrite }) => ({
    title: contentWrite.title,
    body: contentWrite.body,
    taggedContest: contentWrite.taggedContest,
    videoURL: contentWrite.videoURL,
    team: contentWrite.team,
    status: contentWrite.status,
    content: contentWrite.content,
    contentError: contentWrite.contentError,
    originalContentId: contentWrite.originalContentId,
  }));

  const onPublish = () => {
    if (originalContentId) {
      dispatch(
        updateContent({
          title,
          body,
          taggedContest,
          videoURL,
          team,
          status,
          id: originalContentId,
        }),
      );
      return;
    }
    dispatch(
      contentWritePost({
        title,
        body,
        taggedContest,
        videoURL,
        team,
        status,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (content) {
      const { _id, user } = content;
      history.push(`/content/${_id}`);
    }
    if (contentError) {
      console.log(contentError);
    }
  }, [history, content, contentError]);
  return (
    <ContentWriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalContentId}
    />
  );
};

export default withRouter(ContentWriteActionButtonsContainer);
