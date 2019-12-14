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
