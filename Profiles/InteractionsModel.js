import mongoose from "mongoose";
import interactionsSchema from "./InteractionsSchema.js";
const interactionsModel = mongoose.model("interactionsModel", interactionsSchema);
export default interactionsModel;