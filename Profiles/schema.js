import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Int32
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  first_name: String,
  last_name: String,
  bio: String,
  date_joined: { type: String, default: () => new Date().toISOString().split('T')[0] },
  role: { 
    type: String, 
    required: true,
    enum: ["admin", "user", "critic"], 
    default: "user",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { collection: "users" });

export default usersSchema;