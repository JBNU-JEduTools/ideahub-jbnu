/*controlls posting middleware functions*/

import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

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

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

//����Ʈ �ۼ�
export const write = async ctx => {
  const schema = Joi.object().keys({
    //��ü�� ���� �ʵ带 ������ ������ ����
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required(),
  });

  //���� ��, ������ ��� ����ó��
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
    user: ctx.state.user, //����Ʈ �ۼ��� �α����� ���� ������ ����Ʈ ��ü�� ����
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
//������ ��ȸ
export const list = async ctx => {
  //http://localhost:4000/api/posts?page=2 �� �������� �����Ͽ� ��ȸ
  //page �������� ������ �� ���� int�� �Ľ��ϰ�, ������ 1�� �Ľ�
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  //??
  const query = {
    //username, tag���� ��ȿ�ϸ� ��ü �ȿ� �ְ�, �ƴϸ� ���� ����
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    //�ֽż� ����, �ѹ��� ã�� �����͸� 10���� ����, (�־��� page������ - 1) * 10���� �����ʹ� �ǳʶ�.
    //posts�� ��ü�� �迭
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    //postCount�� db ���� document(row)�� ����
    const postCount = await Post.countDocuments().exec();
    //Last-Page��� Ŀ���� HTTP ������� document ����/10 + 1�� ����.
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    //three dotǥ�� ����, ������Ʈ�� ������Ƽ�� ������ �� �Ȱ��� ������Ƽ�� ������ �ڿ� ���ɷ� ������.
    ctx.body = posts
      .map(post => post.toJSON())
      .map(post => ({
        ...post,
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};
//Ư�� ������ ��ȸ
export const read = ctx => {
  ctx.body = ctx.state.post;
};
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const update = async ctx => {
  const schema = Joi.object().keys({
    //��ü�� ���� �ʵ带 ������ ������ ����
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  //���� ��, ������ ��� ����ó��
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  try {
    const post = Post.findByIdAndUpdate(id, ctx.request.body, {
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
