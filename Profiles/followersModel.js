import mongoose from "mongoose";
import followersSchema from "./followersSchema.js";
const followersModel = mongoose.model("followersModel", followersSchema);
export default followersModel;