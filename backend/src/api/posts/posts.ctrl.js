/*controlls posting middleware functions*/

import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';

const { ObjectId } = mongoose.Types;

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findById(id);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

//자신이 개최한 대회인지 결정. 관리자일 경우에도 true
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  //mongoDB에서 조회한 데이터의 id값을 문자열과 비교하기 위해 toString 사용
  if (user.role !== 'admin' && post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

export const write = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    category: Joi.string().required(),
    status: Joi.string().required(),
    date: Joi.string().required(),
    place: Joi.string().required(),
    description: Joi.string().required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    title,
    category,
    status,
    date,
    place,
    description,
  } = ctx.request.body;

  const post = new Post({
    title,
    category,
    status,
    date,
    place,
    description,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

//removes html tags, slices paragraph.
const removeHtmlAndShorten = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
    //   'h1',
    //   'h2',
    //   'b',
    //   'i',
    //   'u',
    //   's',
    //   'p',
    //   'ul',
    //   'ol',
    //   'li',
    //   'blockquote',
    //   'a',
    //   'img',
    // ],
    // allowedAttributes: {
    //   a: ['href', 'name', 'target'],
    //   img: ['src'],
    //   li: ['class'],
    // },
    // allowedSchemes: ['data', 'http'],
  });
  return filtered.length < 300 ? filtered : `${filtered.slice(0, 300)}...`;
};

//������ ��ȸ
export const list = async (ctx) => {
  //http://localhost:4000/api/posts?page=2 �� �������� �����Ͽ� ��ȸ
  //page �������� ������ �� ���� int�� �Ľ��ϰ�, ������ 1�� �Ľ�
  const page = parseInt(ctx.query.page || '1', 5);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { username } = ctx.query;
  //??
  const query = {
    //username, ���� ��ȿ�ϸ� ��ü �ȿ� �ְ�, �ƴϸ� ���� ����
    ...(username ? { 'user.username': username } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(5)
      .skip((page - 1) * 5)
      .exec();
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 5));
    ctx.body = posts
      .map((post) => post.toJSON())
      .map((post) => ({
        ...post,
        description: removeHtmlAndShorten(post.description),
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

//getPostById에서 ctx.state.post에 포스트 정보를 넣어주므로.
export const read = (ctx) => {
  ctx.body = ctx.state.post;
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const update = async (ctx) => {
  const schema = Joi.object().keys({
    title: Joi.string(),
    category: Joi.string(),
    status: Joi.string(),
    date: Joi.string(),
    place: Joi.string(),
    description: Joi.string(),
    prized: Joi.array(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  try {
    //await 구문을 넣지 않았을 때에는, post에 프로미스가 할당되었으나, await구문을 넣어 해결.
    //https://github.com/koajs/koa/issues/881
    //https://joshua1988.github.io/web-development/javascript/js-async-await/
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
