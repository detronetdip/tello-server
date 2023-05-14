import Joi from "joi";

export const addFriendsSchema = {
  userId: Joi.string().required(),
  friendId: Joi.string().required(),
};
export const postSchema = {
  userId: Joi.string().required(),
  postData: Joi.string().required(),
};
export const acceptSchema = {
  reqId: Joi.string().required(),
};
export const blockSchema = {
  userId: Joi.string().required(),
  friendId: Joi.string().required(),
  action: Joi.boolean().required(),
};
export const updateProfileSchema = {
  userId: Joi.string().required(),
  email: Joi.string().email().optional(),
  username: Joi.string().optional(),
  bio: Joi.string().optional(),
  password: Joi.string().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  dob: Joi.string().optional(),
};
export const DeleteSchema = {
  reqId: Joi.string().required(),
};

export const deletePostSchema = {
  postId: Joi.string().required().uuid().message("postId should be valid id"),
  userId: Joi.string().required().uuid().message("userId should be valid id"),
};