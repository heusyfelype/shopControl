import { Buying } from "@prisma/client"
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

export const buyinService = {
    upsertItem
}