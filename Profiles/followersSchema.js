import mongoose from "mongoose";
const followersSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  follower_id: { type: Number, required: true, ref: "usersModel" },
  following_id: { type: Number, required: true, ref: "usersModel" }
}, { collection: "followers" });

export default followersSchema;