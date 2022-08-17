import { Router } from "express";
import { buyingController } from "../controller/buyinngController.js";
import { validateSchemas } from "../middleware/validateSchemas.js";
import { buyingSchema } from "../schemas/buyingSchema.js";


const buyingRouter = Router();

buyingRouter.post("/buying", validateSchemas(buyingSchema), buyingController.upsert);
// buyingRouter.delete("/buying", validateSchemas(buyingSchema), buyingController.upsert);


export default buyingRouter;