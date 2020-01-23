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
export const readPost = id => client.get(`/api/posts/${id}`);

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

export const removePost = id => client.delete(`/api/posts/${id}`);
