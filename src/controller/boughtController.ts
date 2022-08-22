import { Request, Response } from "express";
import { boughtService, createBoughtTypeService } from "../service/boughtService.js";

async function createBought(req: Request, res: Response) {
    const infos: createBoughtTypeService = req.body
    infos.userId = res.locals.userData.data.userId

    const status = await boughtService.createBought({ ...infos })
    console.log("controller CREATEBOUGHT: ", status)

    res.sendStatus(status)
}


export const boughtController = {
    createBought,
}