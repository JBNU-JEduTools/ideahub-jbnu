/*define PostSchema and [static] methods to store post infomation in mongoDB.*/
import mongoose from 'mongoose';

const { Schema } = mongoose;

//맞나?
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

const PostSchema = new Schema({
  title: String,
  category: String,
  status: String,
  //대회 일정
  date: String,
  place: String,
  description: String,
  //수상작..이게 맞어?
  prized: [ContentSchema],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
