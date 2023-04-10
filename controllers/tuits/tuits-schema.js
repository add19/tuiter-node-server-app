import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  topic: String,
  userName: String,
  title: String,
  time: String,
  comments: Number,
  retweets: Number,
  avatar: String,
  handle: String,
  image: String
}, {collection: 'tuits'});
export default schema;

