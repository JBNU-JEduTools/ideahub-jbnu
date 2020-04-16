import client from './client';

//전체 contents를 불러옴
export const listAllContents = () => {
  return client.get('/api/main');
};
