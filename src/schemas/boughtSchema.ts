import Joi from "joi";
import { join } from "path";
import { createBoughtTypeService } from "../service/boughtService";


export const boughtSchema = Joi.object<createBoughtTypeService>({
    items: Joi.array().required(), // melhorar a validação deste array!
    name: Joi.string().required(),
    total: Joi.number().min(0).required()
})
