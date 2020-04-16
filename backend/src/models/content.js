import mongoose from 'mongoose';

const { Schema } = mongoose;

const ContentSchema = new Schema({
  title: String,
  body: String,
  taggedContest: String,
  videoURL: String,
  team: String,
  status: String,
  stars: Number,
  github: String,
  //작품에 star를 누른 유저의 _id 목록.
  star_edUser: [String],
  publishDate: {
    type: Date,
    default: Date.now,
  },
  prizedPlace: {
    //수상 순위. 기본값은 '-'으로, 수상 우선 순위가 높을수록 낮은 수가 할당.
    //e.g.) 해당 대회의 1위작: 1,
    //      해당 대회의 2위작: 2,
    //      해당 대회의 공동 2위작: 2
    type: String,
    default: '-',
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

//스키마는 저장할 데이터 타입 정의, 모델은 스키마를 사용하여 만드는 인스턴스. 데이터베이스와 상호작용 하면서 실제 작업을 처리하는 함수를 지님.
const Content = mongoose.model('Content', ContentSchema);
export default Content;
