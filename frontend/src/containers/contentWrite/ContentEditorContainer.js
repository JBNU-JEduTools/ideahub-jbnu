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
    contestName,
  } = useSelector(({ contentWrite, contestName }) => ({
    title: contentWrite.title,
    body: contentWrite.body,
    taggedContest: contentWrite.taggedContest,
    videoURL: contentWrite.videoURL,
    team: contentWrite.team,
    status: contentWrite.status,
    contestName: contestName.contestName,
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);

  useEffect(() => {
    //☆★☆★☆★☆★☆★수정 시에도 작동함..
    dispatch(setInitialState(contestName));
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
      taggedContest={contestName}
      videoURL={videoURL}
      team={team}
      status={status}
    />
  );
};

export default ContentEditorContainer;
