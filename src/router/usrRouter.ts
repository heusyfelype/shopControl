import { Router } from "express";
import { validateSchemas } from "../middleware/validateSchemas.js";
import { signinSchema, signupSchema } from "../schemas/usrSchema.js";
import * as usrController from "../controller/usrController.js"

const usrRouter = Router();

usrRouter.post("/signup", validateSchemas(signupSchema), usrController.create)
usrRouter.post("/signin", validateSchemas(signinSchema), usrController.signin)

export default usrRouter