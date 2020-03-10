import qs from 'qs';
import client from './client';

export const contentWritePost = ({
  title,
  body,
  taggedContest,
  videoURL,
  team,
  status,
}) =>
  client.post('/api/contents', {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
  });

export const readContent = id => client.get(`/api/contents/${id}`);

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

export const updateContent = ({
  id,
  title,
  body,
  taggedContest,
  videoURL,
  team,
  status,
  stars,
}) =>
  client.patch(`/api/contents/${id}`, {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    stars,
  });

export const removeContent = id => client.delete(`/api/contents/${id}`);
