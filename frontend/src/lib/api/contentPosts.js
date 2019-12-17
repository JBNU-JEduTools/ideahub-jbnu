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
