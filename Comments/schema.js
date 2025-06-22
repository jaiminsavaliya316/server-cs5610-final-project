import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    movieId: String,
    author: String,
    text: String,
    timestamp: Date,
  },
  { collection: 'comments' }
);
export default commentSchema;