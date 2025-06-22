import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("usersModel", schema);
export default model;