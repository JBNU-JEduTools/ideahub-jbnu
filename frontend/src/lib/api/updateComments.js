import client from './client';

export const updateComments = ({ comments }) =>
  client.patch('api/contents', { comments });
