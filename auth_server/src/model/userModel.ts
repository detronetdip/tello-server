import { Schema, model } from "mongoose";
const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  tokenVersion: {
    type: Number,
    default: 0,
  },
});
const UserModel = model("user", userSchema);
export { UserModel };
