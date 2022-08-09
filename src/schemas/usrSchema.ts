
import Joi from "joi";
import { registerUserType, signinUserType } from "../service/usrService.js";

export const signupSchema = Joi.object<registerUserType>({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    password: Joi.string().min(4).required()
})


export const signinSchema = Joi.object<signinUserType>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})