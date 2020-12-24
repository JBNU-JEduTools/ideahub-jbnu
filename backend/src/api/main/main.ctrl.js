//메인 화면에서 사용할 전체 contents list 불러오기
import Content from '../../models/content';
import sanitizeHtml from 'sanitize-html';

//removes html tags, slices paragraph.
const removeHtmlAndShorten = (body) => {
  const filtered = sanitizeHtml(body, {
    allowedTags: [],
  });
  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

//전체 작품들 중 작품 8개 목록을 불러오고, star순으로 정렬.
export const listByStar = async (ctx) => {
  try {
    const contents = await Content.find()
      .sort({ stars: -1 })
      .limit(8)
      .lean()
      .exec();

    ctx.body = contents.map((content) => ({
      ...content,
      body: removeHtmlAndShorten(content.body),
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

//전체 작품들 중 prizedPlace가 0에서 9 사이인 작품 8개 목록을 불러옴.
export const listByPrize = async (ctx) => {
  try {
    const contents = await Content.find({
      prizedPlace: { $gte: '0', $lte: '9' }, //prizedPlace가 0에서 9사이인 작품 목록만 불러옴
    })
      .sort({ prizedPlace: 1 })
      .limit(8)
      .lean()
      .exec();

    ctx.body = contents.map((content) => ({
      ...content,
      body: removeHtmlAndShorten(content.body),
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};
