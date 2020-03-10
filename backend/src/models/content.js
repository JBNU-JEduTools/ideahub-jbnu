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
  publishDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

//스키마는 저장할 데이터 타입 정의, 모델은 스키마를 사용하여 만드는 인스턴스. 데이터베이스와 상호작용 하면서 실제 작업을 처리하는 함수를 지님.
const Content = mongoose.model('Content', ContentSchema);
export default Content;
