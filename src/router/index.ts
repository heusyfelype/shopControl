import { Router } from "express";
import boughtRouter from "./boughtRouter.js";
import buyingRouter from "./buyingRouter.js";
import usrRouter from "./usrRouter.js";

const router = Router();
router.use(usrRouter);
router.use(buyingRouter);
router.use(boughtRouter)

export default router;