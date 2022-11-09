import Joi from "joi";

export const addFriendsSchema = {
  userId: Joi.string().alphanum().required(),
  friendId: Joi.string().alphanum().required(),
};
export const postSchema = {
    userId: Joi.string().alphanum().required(),
    postData: Joi.string().alphanum().required()
};
