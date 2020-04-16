import React, { useEffect, useCallback } from 'react';
import ContentEditor from '../../components/contentWrite/ContentEditor';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initialize,
  setInitialState,
} from '../../modules/contentWrite';

const ContentEditorContainer = () => {
  const dispatch = useDispatch();
  const {
    title,
    body,
    status,
    videoURL,
    team,
    taggedContest,
    github,
  } = useSelector(({ contentWrite }) => ({
    title: contentWrite.title,
    body: contentWrite.body,
    taggedContest: contentWrite.taggedContest,
    videoURL: contentWrite.videoURL,
    team: contentWrite.team,
    status: contentWrite.status,
    github: contentWrite.github,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      //unmount시 contentWrite와 관련된 상태를 초기화 하는데 사용
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <ContentEditor
      onChangeField={onChangeField}
      title={title}
      body={body}
      taggedContest={taggedContest}
      videoURL={videoURL}
      team={team}
      status={status}
      github={github}
    />
  );
};

export default ContentEditorContainer;
