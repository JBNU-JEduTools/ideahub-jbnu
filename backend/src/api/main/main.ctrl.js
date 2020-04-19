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

//전체 contents를 불러옴
export const fullList = async (ctx) => {
  const contest = ctx.query.taggedContestID;
  const query = contest ? { taggedContestID: contest } : {};

  try {
    const contents = await Content.find(query)
      .sort({ stars: -1 })
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
