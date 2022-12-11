import Joi from "joi";

export const addFriendsSchema = {
  userId: Joi.string().required(),
  friendId: Joi.string().required(),
};
export const postSchema = {
    userId: Joi.string().required(),
    postData: Joi.string().required()
};
export const acceptSchema = {
  reqId: Joi.string().required(),
};