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
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  bio: Joi.string().required(),
};
