import { Request, Response } from "express";
import { type } from "os";
import { buyingType, buyinService } from "../service/buyingService.js";

async function upsert(req: Request, res: Response) {
    const infos = req.body
    const { userId } = res.locals.userData.data


    const status = await buyinService.upsertItem({ ...infos, userId })
    console.log("controller: ", status)

    res.sendStatus(status);

}

async function deleteItem(req: Request, res: Response) {
    const id: number = +req.headers.id
    const { userId } = res.locals.userData.data

    await buyinService.deleteItem(id, userId)

    res.sendStatus(200);

}

async function getItems(req: Request, res: Response) {
    const { userId } = res.locals.userData.data
    const items = await buyinService.findMany(userId)

    res.send(items)
}

export type itemsToUpdate = Omit<buyingType, "userId">

async function updateMany(req: Request, res: Response) {
    const { userId } = res.locals.userData.data
    const itemsUpdate: itemsToUpdate[] = req.body

    let itemsUpdated = itemsUpdate.map((eachItem: itemsToUpdate): buyingType => {
        return { ...eachItem, userId }
    })

    await buyinService.updateMany(itemsUpdated, userId)

    res.send(200)
}

async function deleteMany(req:Request, res:Response) {
    const { userId } = res.locals.userData.data
    
    await buyinService.deleteManyByUserId(userId);

    res.sendStatus(200)
}

export const buyingController = {
    upsert,
    deleteItem,
    getItems,
    updateMany,
    deleteMany
}