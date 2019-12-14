import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, category, status, date, place, description } = useSelector(
    ({ write }) => ({
      title: write.title,
      category: write.category,
      status: write.status,
      date: write.date,
      place: write.place,
      description: write.description,
    }),
  );
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  //unmount시 write와 관련된 상태를 초기화 하는데 사용
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <Editor
      onChangeField={onChangeField}
      title={title}
      category={category}
      status={status}
      date={date}
      place={place}
      description={description}
    />
  );
};

export default EditorContainer;
