import mongoose from "mongoose";
const followersSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  follower_id: { type: String, required: true, ref: "usersModel" },
  following_id: { type: String, required: true, ref: "usersModel" }
}, { collection: "followers" });

export default followersSchema;