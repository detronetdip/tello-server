import { Schema, model } from "mongoose";
const userSchema = new Schema({
  uid: {
    type: String,
    unique: true,
  },
  // userName: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // firstName: {
  //   type: String,
  //   unique: true,
  // },
  // lastName: {
  //   type: String,
  //   unique: true,
  // },
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
const handelDuplicateKeyError = function (error, res, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(error);
  } else {
    next();
  }
};
userSchema.post("save", handelDuplicateKeyError);
userSchema.post("update", handelDuplicateKeyError);
userSchema.post("findOneAndUpdate", handelDuplicateKeyError);
userSchema.post("insertMany", handelDuplicateKeyError);
const UserModel = model("user", userSchema);
export { UserModel };
