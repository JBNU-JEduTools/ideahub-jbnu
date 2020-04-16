import qs from 'qs';
import client from './client';

export const contentWritePost = ({
  title,
  body,
  taggedContest,
  videoURL,
  team,
  status,
  github,
}) =>
  client.post('/api/contents', {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    github,
  });

export const readContent = (id) => client.get(`/api/contents/${id}`);

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
  github,
}) =>
  client.patch(`/api/contents/${id}`, {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    stars,
    github,
  });

export const removeContent = (id) => client.delete(`/api/contents/${id}`);

//star 버튼 클릭 시 현재 작품의 star에 1을 더하고, star를 누른 유저 목록에 현재 로그인한 유저 등록.
export const giveStar = ({ content, user }) => {
  //로그인 한 상태일 때
  if (user) {
    const { _id, stars, star_edUser } = content;
    //star누른 유저 목록에 현재 로그인한 유저가 없을 경우에만.
    const isInList = star_edUser.find((item) => item === user._id);
    if (!isInList) {
      return client.patch(`/api/contents/${_id}`, {
        stars: stars + 1,
        star_edUser: [...star_edUser, user._id],
      });
    }
  }
};

//star를 취소
export const unStar = ({ content, user }) => {
  //로그인 한 상태일 때
  if (user) {
    const { _id, stars, star_edUser } = content;
    //star누른 유저 목록에 현재 로그인한 유저가 없을 경우에만.
    const indexOfItem = star_edUser.findIndex((item) => item === user._id);
    //유저 목록에 현재 유저가 존재 할 때, unStar 작업 진행.
    if (indexOfItem > -1) {
      let star_edUserCopy = JSON.parse(JSON.stringify(star_edUser));
      star_edUserCopy.splice(indexOfItem, 1);

      return client.patch(`/api/contents/${_id}`, {
        stars: stars - 1,
        star_edUser: star_edUserCopy,
      });
    }
  }
};

//수상 정보를 업데이트(디폴트: '-')
export const updatePrize = ({ content, priority }) => {
  const { _id } = content;
  return client.patch(`/api/contents/${_id}`, {
    prizedPlace: priority,
  });
};
