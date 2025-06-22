import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "" },
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  bio: { type: String, default: "" },
  date_joined: { type: String, default: () => new Date().toISOString().split('T')[0] },
  role: { type: String, default: "user" }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  _id: false
});

const User = mongoose.model('User', userSchema);
export default User;