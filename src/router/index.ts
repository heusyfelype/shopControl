import { Router } from "express";
import usrRouter from "./usrRouter.js";

const router = Router();
router.use(usrRouter)

export default router;