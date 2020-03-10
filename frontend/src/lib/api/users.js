import client from './client';

//user 목록을 불러옴
export const listUsers = () => client.get('/api/users');

//유저 정보 업데이트. 현재는 user role만 변경할 수 있도록.
/*
{
  "_id": 전달받은 _id,
  "role": 전달받은 role
}
의 형태로 http patch 메소드 실행
*/
export const updateUsers = ({ _id, role }) =>
  client.patch('/api/users', { _id, role });

//유저 삭제
/*
{
  "_id": 전달받은 _id
}
*/
export const removeUsers = ({ _id }) => client.remove('/api/users', { _id });
