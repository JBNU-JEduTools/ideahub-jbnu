//ContentSchema를 이용해 만든 Content 모델 객체 불러옴.
import Content from '../../models/content';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;
//params로 들어오는 id가 유효한 ObjectId인지 검사하는 미들웨어
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

//포스트 작성, async로 비동기 처리.
export const write = async ctx => {
  //객체의 필드를 검증하기 위함
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    taggedContest: Joi.string().required(),
    videoURL: Joi.string(),
    team: Joi.string().required(),
    status: Joi.string().required(),
    stars: Joi.number(),
    comments: Joi.array().items(Joi.object()),
  });

  //객체 필드 검증 결과가 result에 저장.
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; //bad request
    ctx.body = result.error;
    return;
  }

  const {
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
  } = ctx.request.body;
  const content = new Content({
    title,
    body,
    taggedContest,
    videoURL,
    team,
    status,
    stars: 0,
    comments: [],
  });
  try {
    await content.save();
    ctx.body = content;
  } catch (e) {
    ctx.throw(500, e);
  }
};

//포스트 목록 조회
export const list = async ctx => {
  //current page number
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  //get taggedContest from url
  const contest = ctx.query.taggedContest;
  const query = contest ? { taggedContest: contest } : {};

  try {
    //Content는 content 모델
    const contents = await Content.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const contentCount = await Content.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(contentCount / 10));
    ctx.body = contents.map(content => ({
      ...content,
      body:
        content.body.length < 200
          ? content.body
          : `${content.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

//특정 id를 갖는 포스트 조회
export const read = async ctx => {
  const { id } = ctx.params;
  try {
    const content = await Content.findById(id).exec();
    //받은 id에 해당하는 content가 존재하지 않으면
    if (!content) {
      ctx.status = 404;
      return;
    }
    ctx.body = content;
  } catch (e) {
    ctx.throw(500, e);
  }
};

//특정 id를 갖는 content 삭제
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Content.findByIdAndRemove(id).exec();
    ctx.status = 204; // nothing to return.
  } catch (e) {
    ctx.throw(500, e);
  }
};

//댓글이 달렸을 때 업데이트 할 수 있도록.
export const updateComment = async ctx => {
  const { id } = ctx.params;
  try {
    const content = await Content.findById(id).exec();
    if (!content) {
      ctx.status = 404;
      return;
    }
    content.comments.push(ctx.request);
    ctx.reponse = content;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async ctx => {
  //객체의 필드를 검증하기 위함
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    taggedContest: Joi.string(),
    videoURL: Joi.string(),
    team: Joi.string(),
    status: Joi.string(),
    stars: Joi.number(),
    comments: Joi.array().items(Joi.object()),
  });

  //객체 필드 검증 결과가 result에 저장.
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; //bad request
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  try {
    const content = await Content.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!content) {
      ctx.status = 404;
      return;
    }
    ctx.body = content;
  } catch (e) {
    ctx.throw(500, e);
  }
};
