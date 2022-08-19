import { Request, Response } from "express";
import { buyingType, buyinService } from "../service/buyingService.js";

async function upsert(req: Request, res: Response) {
    const infos = req.body

    const status = await buyinService.upsertItem(infos)
    console.log("controller: ", status)

    res.sendStatus(status);

}

async function deleteItem(req: Request, res: Response) {
    const id: number = req.body.id
    const { userId } = res.locals.userData.data

    await buyinService.deleteItem(id, userId)

    res.sendStatus(200);

}

async function getItems(req: Request, res:Response) {
    const { userId } = res.locals.userData.data
    const items = await buyinService.findMany(userId)

    res.send(items)
}

export const buyingController = {
    upsert,
    deleteItem,
    getItems
}