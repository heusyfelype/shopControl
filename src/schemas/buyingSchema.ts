import Joi from "joi";
import { buyingType } from "../service/buyingService";


export const buyingSchema = Joi.object<buyingType>({
    id: Joi.number().optional(),
    statusText: Joi.string().required().valid("default", "bought", "not_bought"),
    nameText: Joi.string().required().allow(""),
    brandText: Joi.string().required().allow(""),
    vol: Joi.number().min(0).required(),
    unitText: Joi.string().required().valid('g', 'ml', 'unid'),
    price: Joi.number().min(0).required(),
    qtt: Joi.number().min(0).required(),
    positionIndex: Joi.number().required()
})

export const deleteItembuyingSchema = Joi.object({
    id: Joi.number().required()
})

export const updateManyItemsSchema = Joi.array().items(Joi.object({
    id: Joi.number().required(),
    statusText: Joi.string().required().valid("default", "bought", "not_bought"),
    nameText: Joi.string().required().allow(""),
    brandText: Joi.string().required().allow(""),
    vol: Joi.number().min(0).required(),
    unitText: Joi.string().required().valid('g', 'ml', 'unid'),
    price: Joi.number().min(0).required(),
    qtt: Joi.number().min(0).required(),
    positionIndex: Joi.number().required()
}))