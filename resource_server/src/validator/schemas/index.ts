import Joi from 'joi';

export const addFriendsSchema= {
    userId: Joi.string().alphanum().required(),
    friendId: Joi.string().alphanum().required()
}