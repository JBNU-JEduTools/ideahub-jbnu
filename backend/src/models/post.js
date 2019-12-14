/*define PostSchema and [static] methods to store post infomation in mongoDB.*/
import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  category: String,
  status: String,
  //대회 일정
  date: String,
  place: String,
  description: String,
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
