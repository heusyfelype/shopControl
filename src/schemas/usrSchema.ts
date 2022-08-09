
import Joi from "joi";

export const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    password: Joi.string().min(4).required()
})


export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})