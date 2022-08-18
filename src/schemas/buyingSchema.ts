import Joi from "joi";
import { buyingType } from "../service/buyingService";


export const buyingSchema = Joi.object<buyingType>({
    id: Joi.number().optional(),
    userId: Joi.number().required(),
    statusText: Joi.string().required().valid("default", "bought", "not_bought"),
    nameText: Joi.string().required(),
    brandText: Joi.string().required(),
    vol: Joi.number().required(),
    unitText: Joi.string().required().valid('g', 'ml'),
    price: Joi.number().min(0).required(),
    qtt: Joi.number().min(0).required()
})

export const deleteItembuyingSchema = Joi.object({
    id: Joi.number().required()
})

