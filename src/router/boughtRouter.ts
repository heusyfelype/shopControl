import { Router } from "express";
import { boughtController } from "../controller/boughtController.js";
import { validToken } from "../middleware/authTokenMiddleware.js";
import { validateSchemas } from "../middleware/validateSchemas.js";
import { boughtSchema } from "../schemas/boughtSchema.js";


const boughtRouter = Router();

boughtRouter.post("/bought/create", validToken, validateSchemas(boughtSchema), boughtController.createBought);


export default boughtRouter;