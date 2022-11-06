import Joi from 'joi';

export const addFriendsSchema= {
    userId: Joi.string().required(),
    friendId: Joi.string().required()
}