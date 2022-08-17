import { Request, Response } from "express";
import { buyingType, buyinService } from "../service/buyingService.js";

async function upsert(req:Request, res: Response) {
    const infos = req.body

    const status = await buyinService.upsertItem(infos)
    console.log("controller: ", status)

    res.sendStatus(status);

}

export const buyingController = {
    upsert
}