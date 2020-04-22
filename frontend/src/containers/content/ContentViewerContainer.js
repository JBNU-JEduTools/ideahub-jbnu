import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readContent, unloadContent } from '../../modules/content';
import ContentViewer from '../../components/content/ContentViewer';
import ContentActionButtons from '../../components/content/ContentActionButtons';
import { setOriginalContent } from '../../modules/contentWrite';
import { removeContent, giveStar, unStar } from '../../lib/api/contentPosts';

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

  /*
  ☆★☆★☆★☆★☆★☆ TODO ★☆★☆★☆★☆★☆★
  새로고침 말고 새로운 방법 찾아보기. 부드럽지가 않다.
  현재 유저가 star를 눌렀는지 스스로 확인할 수 있도록 (이미지로)구분 하자.
  ☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★
  */
  //작품에 star(like, unlike)를 눌렀을 때 동작
  const onStar = () => {
    if (!user) {
      alert('로그인 후에 이용 가능한 서비스 입니다.');
      history.push('/login');
    } else {
      const { star_edUser } = content;
      const isInList = star_edUser.find((item) => item === user._id);
      //star누른 유저 목록에 현재 유저가 있으면
      if (isInList) {
        unStar({ content, user });
        window.location.reload();
      } else {
        giveStar({ content, user });
        window.location.reload();
      }
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
      onStar={onStar}
    />
  );
};

export default withRouter(ContentViewerContainer);
