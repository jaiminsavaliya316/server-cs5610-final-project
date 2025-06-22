import mongoose from 'mongoose';
import commentSchema from './schema.js';
const model = mongoose.model("CommentModel", commentSchema);
export default model;