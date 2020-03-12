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
    default: Date.now,
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
