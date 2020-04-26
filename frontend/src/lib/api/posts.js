import qs from 'qs';
import client from './client';

//posts post
export const writePost = ({
  title,
  category,
  status,
  date,
  place,
  description,
}) =>
  client.post('/api/posts', {
    title,
    category,
    status,
    date,
    place,
    description,
  });

//requests post info
export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username }) => {
  const queryString = qs.stringify({
    page,
    username,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({
  id,
  title,
  category,
  status,
  date,
  place,
  description,
}) =>
  client.patch(`/api/posts/${id}`, {
    title,
    category,
    status,
    date,
    place,
    description,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);

//특정 대회(taggedContestID)에 등록된 작품 목록을 받아옴.
export const listContentItem = (taggedContestID) => {
  const query = qs.stringify({ taggedContestID });
  console.log('taggedContestID:', taggedContestID);

  return client.get(`/api/contents?${query}`, {
    taggedContestID,
  });
};
