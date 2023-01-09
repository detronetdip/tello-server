import Joi from "joi";

export const passwordChangedSchema = {
  userId: Joi.string().required(),
  username: Joi.string().required(),
};