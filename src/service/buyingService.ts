import { Buying, prisma } from "@prisma/client"
import { buyingRepository } from "../repository/buyingRepository.js"

export type buyingType = Omit<Buying, "createdAt">

async function upsertItem(infos: buyingType) {
    let status = 500;
    if (infos.id) {
        status = await buyingRepository.update(infos)
        return status
    }
    status = await buyingRepository.create(infos)
    return status;
}

async function deleteItem(id: number, userId: number) {
    const item = await buyingRepository.findItemById(id);
    if (item.userId != userId) {
        throw { type: "unauthorized", message: "You have not authorization to delete this element!" }
    }
    await buyingRepository.deleteItem(id)
}

async function findMany(userId: number) {
    const items = await buyingRepository.findMany(userId)
    let total = 0
    items.map((item) => {
        delete item.userId;
        delete item.createdAt;

        if (item.statusText == "bought") {
            total = total + item.price * item.qtt
        }
    })
    return { total: total, items: items }
}

async function updateMany(itemsUpdate: buyingType[], userId: number) {
    await buyingRepository.updateMany(itemsUpdate, userId)
}

async function deleteManyByUserId(userId:number) {
    await buyingRepository.deleteManyByUserId(userId)
}

export const buyinService = {
    upsertItem,
    deleteItem,
    findMany,
    updateMany,
    deleteManyByUserId
}