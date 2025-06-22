import mongoose from "mongoose";
const interactionsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  user_id: { type: Number, ref: "UsersModel" },
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, required: true, enum: ["comment", "favorite"] },
  movie_id: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
}, { collection: "interactions" });

export default interactionsSchema;