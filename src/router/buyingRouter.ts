import { Router } from "express";
import { buyingController } from "../controller/buyinngController.js";
import { validToken } from "../middleware/authTokenMiddleware.js";
import { validateSchemas } from "../middleware/validateSchemas.js";
import { buyingSchema, deleteItembuyingSchema } from "../schemas/buyingSchema.js";


const buyingRouter = Router();

buyingRouter.post("/buying", validToken, validateSchemas(buyingSchema), buyingController.upsert);
buyingRouter.get("/buying", validToken, buyingController.getItems)
buyingRouter.delete("/buying", validToken, validateSchemas(deleteItembuyingSchema), buyingController.deleteItem);


export default buyingRouter;