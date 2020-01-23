import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    category,
    status,
    date,
    place,
    description,
    post,
    postError,
    originalPostId,
  } = useSelector(({ write }) => ({
    title: write.title,
    category: write.category,
    status: write.status,
    date: write.date,
    place: write.place,
    description: write.description,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({
          title,
          category,
          status,
          date,
          place,
          description,
          id: originalPostId,
        }),
      );
      return;
    }

    dispatch(
      writePost({
        title,
        category,
        status,
        date,
        place,
        description,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]); //history, post, postError가 변경될 경우에만 호출
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
