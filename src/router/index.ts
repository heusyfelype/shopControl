import { Router } from "express";
import buyingRouter from "./buyingRouter.js";
import usrRouter from "./usrRouter.js";

const router = Router();
router.use(usrRouter);
router.use(buyingRouter);

export default router;