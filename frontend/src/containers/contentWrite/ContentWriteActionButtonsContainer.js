import React, { useEffect } from 'react';
import ContentWriteActionButtons from '../../components/contentWrite/ContentWriteActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { contentWritePost } from '../../modules/contentWrite';

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
  } = useSelector(({ contentWrite }) => ({
    title: contentWrite.title,
    body: contentWrite.body,
    taggedContest: contentWrite.taggedContest,
    videoURL: contentWrite.videoURL,
    team: contentWrite.team,
    status: contentWrite.status,
    content: contentWrite.content,
    contentError: contentWrite.contentError,
  }));

  const onPublish = () => {
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
    <ContentWriteActionButtons onPublish={onPublish} onCancel={onCancel} />
  );
};

export default withRouter(ContentWriteActionButtonsContainer);
