import mongoose from 'mongoose';
import schema from './schema.js';
const model = mongoose.mode("CommentModel", schema);
export default model;