import { Request, Response } from "express";
import { buyingType, buyinService } from "../service/buyingService.js";

async function upsert(req:Request, res: Response) {
    const infos = req.body

    const data = await buyinService.upsertItem(infos)

    res.sendStatus(201);

}

export const buyingController = {
    upsert
}