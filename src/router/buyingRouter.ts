import { Router } from "express";
import { buyingController } from "../controller/buyinngController.js";
import { validToken } from "../middleware/authTokenMiddleware.js";
import { validateArraySchemas } from "../middleware/validateArraySchemas.js";
import { validateSchemas } from "../middleware/validateSchemas.js";
import { buyingSchema, deleteItembuyingSchema, updateManyItemsSchema } from "../schemas/buyingSchema.js";


const buyingRouter = Router();

buyingRouter.post("/buying", validToken, validateSchemas(buyingSchema), buyingController.upsert);
buyingRouter.get("/buying", validToken, buyingController.getItems)
buyingRouter.delete("/buying", validToken, buyingController.deleteItem);
buyingRouter.put("/buying/update/many", validToken, validateArraySchemas(updateManyItemsSchema), buyingController.updateMany)
buyingRouter.delete("/buying/deleteAll", validToken, buyingController.deleteMany)
buyingRouter.post("/buying/finish", validToken, validateArraySchemas(updateManyItemsSchema), )

export default buyingRouter;