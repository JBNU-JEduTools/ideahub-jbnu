import client from './client';

export const listContentsByStar = () => {
  return client.get('/api/main/star');
};

export const listContentsByPrize = () => {
  return client.get('/api/main/prize');
};
