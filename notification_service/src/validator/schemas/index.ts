import Joi from "joi";

export const passwordChangedSchema = {
  userId: Joi.string().required(),
  username: Joi.string().required(),
};
export const sentOtp = {
  email: Joi.string().email().required(),
  otp: Joi.string().required(),
};