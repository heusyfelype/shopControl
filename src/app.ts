import cors from "cors";
import express, { Router } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./router/index.js";



dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export default app;