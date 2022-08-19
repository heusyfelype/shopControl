import { Buying, prisma } from "@prisma/client"
import { buyingRepository } from "../repository/buyingRepository.js"

export type buyingType = Omit<Buying , "createdAt">

async function upsertItem(infos:buyingType) {
    let  status = 500;
    if(infos.id){
        status = await buyingRepository.update(infos)
        console.log("Deve ser 200: ", status)
        return status
    }
    status = await buyingRepository.create(infos)
    return status;
}

async function deleteItem(id:number, userId:number) {
    const item = await buyingRepository.findItemById(id);
    if(item.userId != userId){
        throw {type:"unauthorized", message:"You have not authorization to delete this element!"}
    }
    await buyingRepository.deleteItem(id)
}

async function findMany(userId:number) {
    return await buyingRepository.findMany(userId)
}

export const buyinService = {
    upsertItem,
    deleteItem,
    findMany
}