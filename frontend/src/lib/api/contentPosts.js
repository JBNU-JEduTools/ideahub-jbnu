import qs from 'qs';
import client from './client';

export const contentWritePost = ({
  title,
  body,
  taggedContest,
  videoURL,
  team,
  status,
  comments,
}) =>
  client.post('/api/contents', {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    comments,
  });

export const readContent = id => client.get(`/api/contents/${id}`);

//수정 필요~~~~
export const addComment = ({
  title,
  body,
  taggedContest,
  videoURL,
  team,
  status,
  comments,
}) =>
  client.patch('/api/contents', {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    comments: [
      ...comments,
      { username: 'sangseok', commentBody: 'this is test comment.' },
    ],
  });

export const listContents = ({ page, taggedContest }) => {
  const queryString = qs.stringify({
    page,
    taggedContest,
  });
  return client.get(`/api/contents?${queryString}`, {
    params: {
      taggedContest: queryString.taggedContest,
    },
  });
};
